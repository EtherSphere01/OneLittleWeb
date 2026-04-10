import { GettingStartedCardProps } from "@/types/landingPage/gettingStarted.types";
import React from "react";

export default function GettingStartedCard({
    listItem,
}: {
    listItem: GettingStartedCardProps;
}) {
    return (
        <div>
            <div className="relative border-2 border-[#FDEBF0] bg-white hover:shadow-[0_4px_90.3px_0_rgba(215,205,207,0.47)] min-w-71.25 min-h-48 rounded-[9px] flex items-center justify-center">
                <div className="text-[29.23px] font-medium h-19 w-19 rounded-full flex items-center justify-center border-[5px] border-[#ED3C6A] absolute -top-6.5 -left-6.5 bg-white">
                    {listItem.id}
                </div>
                <div>{listItem.icon}</div>
            </div>
            <div className="mt-8.25 max-w-71.25 mx-auto text-center text-[20px] font-semibold">
                {listItem.title}
            </div>
        </div>
    );
}
