import { Button } from "@/components/ui/button";
import { RightArrow } from "@/svg/Header/RightArrow";
import { AirbnbLogo } from "@/svg/HeroSection/AirbnbLogo";
import { BookingLogo } from "@/svg/HeroSection/BookingLogo";
import { TripadvisorLogo } from "@/svg/HeroSection/Tripadvisor";
import { VrboLogo } from "@/svg/HeroSection/VrboLogo";
import React from "react";

export default function HeroSection() {
    return (
        <div
            className="w-full px-3 lg:px-6 flex flex-col items-center justify-center pt-12.5 pb-7.5 md:pt-42 md:pb-22.5 border-b border-[#00000014] relative"
            style={{
                backgroundSize: "86px 86px",
                backgroundImage:
                    "linear-gradient(to right, #00000014 1px, transparent 1px), linear-gradient(to bottom, #00000014 1px, transparent 1px)",
            }}
        >
            <h1 className="text-[30px] md:text-[48px] font-bold leading-[130%]">
                Airbnb Assistants For
            </h1>
            <h3 className="text-[20px] md:text-[38.13px] font-medium leading-[130%]">
                Property Management
            </h3>
            <p className="text-[14px] font-medium mt-7.75 max-w-166.25 text-center leading-[120%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <Button className="flex items-center gap-2.5 mt-10">
                <span className="font-bold text-[14px]">
                    Schedule A Meeting
                </span>
                <RightArrow />
            </Button>
            <h6 className="text-[14px] font-medium mt-6.75 underline underline-offset-4">
                See Pricing
            </h6>
            <div className="hidden md:block">
                <div
                    className="h-3.25 w-3.25 rounded-full bg-[#635BFF] absolute top-35 left-30 animate-float"
                    style={{
                        boxShadow: "inset 0 1px 3.3px 0 #00000040",
                        animationDuration: "6s",
                    }}
                ></div>
                <div
                    className="h-3.25 w-3.25 rounded-full bg-[#FF5A5F] absolute top-90 left-55 animate-float"
                    style={{
                        boxShadow: "inset 0 1px 3.3px 0 #00000040",
                        animationDuration: "5s",
                    }}
                ></div>
                <div
                    className="h-1.75 w-1.75 rounded-full bg-[#FFEC5A] absolute bottom-10 left-30 animate-float"
                    style={{
                        boxShadow: "inset 0 1px 2.3px 0 #00000040",
                        animationDuration: "4.5s",
                    }}
                ></div>
                <div
                    className="h-3.75 w-3.75 rounded-full bg-[#34E0A1] absolute md:top-25 md:left-120 lg:top-25 lg:left-180 animate-float"
                    style={{
                        boxShadow: "inset 2px -2px 3.3px 0px #00000040",
                        animationDuration: "3.5s",
                    }}
                ></div>
                <div
                    className="h-3.25 w-3.25 rounded-full bg-[#5AF9FF] absolute md:bottom-10 md:left-100 lg:bottom-10 lg:left-195 animate-float"
                    style={{
                        boxShadow: "inset 2px 2px 3.3px 0 #00000040",
                        animationDuration: "5s",
                    }}
                ></div>

                <div
                    className="h-3.25 w-3.25 rounded-full bg-[#FFEC5A] absolute md:top-60 md:right-20 lg:top-50 lg:right-60 animate-float"
                    style={{
                        boxShadow: "inset 0 1px 2.3px 0 #00000040",
                        animationDuration: "4.5s",
                    }}
                ></div>

                <div
                    className="h-1.75 w-1.75 rounded-full bg-[#0C3B7C] absolute bottom-10 right-40 animate-float"
                    style={{
                        boxShadow: "inset 0 1px 2.3px 0 #00000040",
                        animationDuration: "3s",
                    }}
                ></div>
            </div>

            <div className="hidden md:block">
                <div
                    className="absolute top-40 left-5 lg:top-20 lg:left-70 animate-float"
                    style={{ animationDuration: "4s" }}
                >
                    <AirbnbLogo />
                </div>
                <div
                    className="absolute top-105 left-30 lg:top-100 lg:left-90 animate-float"
                    style={{ animationDuration: "5s" }}
                >
                    <VrboLogo />
                </div>
                <div
                    className="absolute top-20 right-5 lg:top-25 lg:right-80 animate-float"
                    style={{ animationDuration: "3.5s" }}
                >
                    <BookingLogo />
                </div>
                <div
                    className="absolute top-105 right-5 lg:top-100 lg:right-90 animate-float"
                    style={{ animationDuration: "4.5s" }}
                >
                    <TripadvisorLogo />
                </div>
            </div>
        </div>
    );
}
