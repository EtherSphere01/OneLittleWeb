import { Reviews } from "@/content/landingPage/reviews";
import { ReviewProps } from "@/types/landingPage/review.types";
import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewCards = ({ items }: { items: ReviewProps[] }) => (
    <>
        {items.map((item) => (
            <ReviewCard key={item.id} reviewItem={item} />
        ))}
    </>
);

export default function ReviewSection() {
    return (
        <div className="mt-30">
            <h1 className="text-center font-bold text-[32px] px-3 lg:px-6">
                Check Our Clients <span className="text-[#ED3C6A]">Review</span>
            </h1>
            <p className="text-[14px] font-normal text-center max-w-184.5 mx-auto mt-6 px-3 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-14 py-4 overflow-hidden">
                <div className="animate-scroll flex items-center gap-6 px-3 lg:px-6">
                    <ReviewCards items={Reviews} />
                    <ReviewCards items={Reviews} />
                    <ReviewCards items={Reviews} />
                </div>
            </div>
        </div>
    );
}
