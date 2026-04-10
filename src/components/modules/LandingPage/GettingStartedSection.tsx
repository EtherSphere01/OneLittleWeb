import { GettingStartedList } from "@/content/landingPage/gettingStartedList";
import React from "react";
import GettingStartedCard from "./GettingStartedCard";
import { Check } from "lucide-react";
import { WhyChooseUsList } from "@/content/landingPage/whyChooseUsList";
import { Button } from "@/components/ui/button";
import { RightArrow } from "@/svg/Header/RightArrow";
import { WhyChooseUsImage } from "@/svg/LandingPage/GettingStartedSection/WhyChooseUsImage";

export default function GettingStartedSection() {
    return (
        <div className="mt-16.75 px-3 lg:px-6">
            <h1 className="text-center font-bold text-[32px] px-3 lg:px-6">
                Getting Started is <span className="text-[#ED3C6A]">Easy</span>
            </h1>
            <p className="text-[14px] font-normal text-center max-w-184.5 mx-auto mt-6 px-3 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-15.75">
                <div className="max-w-90 md:max-w-180 lg:max-w-240 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9.5">
                    {GettingStartedList.map((item) => (
                        <GettingStartedCard key={item.id} listItem={item} />
                    ))}
                </div>
            </div>

            <div className="mt-21 container mx-auto bg-[#FDEBF0] border border-[#F8BECD] rounded-[33px] px-6 py-10 md:px-12 md:pt-16 md:pb-4 lg:pl-22.25 lg:pb-14 flex flex-col lg:flex-row items-start justify-between gap-10 overflow-hidden">
                <div>
                    <h1 className="text-[36px] font-bold max-w-104">
                        Few Reasons Why You Choose Us
                    </h1>
                    <p className="text-[14px] font-semibold max-w-114.25 mt-6.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                    </p>
                    <div className="mt-7.5 space-y-3.5">
                        {WhyChooseUsList.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-2"
                            >
                                <div className="h-8 w-8 rounded-full bg-[#FAC4D2] flex items-center justify-center">
                                    <Check className="size-4.5 text-[#ED3C6A]" />
                                </div>
                                <p className="text-4 text-[#1E1E1E] font-bold">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-11.25">
                        <Button className="flex items-center gap-2.5">
                            <span className="font-bold text-[14px]">
                                Schedule A Meeting
                            </span>
                            <RightArrow />
                        </Button>
                    </div>
                </div>
                <div className="hidden md:block mt-4 lg:mt-0">
                    <WhyChooseUsImage />
                </div>
            </div>
        </div>
    );
}
