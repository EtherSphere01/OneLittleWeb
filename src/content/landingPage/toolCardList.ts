import { BeyondPricingIcon } from "@/svg/LandingPage/ToolsSection.tsx/BeyondPricingIcon";
import { GuestyIcon } from "@/svg/LandingPage/ToolsSection.tsx/GuestyIcon";
import { HostfullyIcon } from "@/svg/LandingPage/ToolsSection.tsx/HostfullyIcon";
import { LodgifyIcon } from "@/svg/LandingPage/ToolsSection.tsx/LodgifyIcon";
import { PriceLabsIcon } from "@/svg/LandingPage/ToolsSection.tsx/PriceLabsIcon";
import { WheelHouseIcon } from "@/svg/LandingPage/ToolsSection.tsx/WheelHouseIcon";
import { ToolCardProps } from "@/types/landingPage/toolCard.types";
import { createElement } from "react";

export const ToolCardList: ToolCardProps[] = [
    {
        id: "1",
        name: "PriceLabs",
        icon: createElement(PriceLabsIcon),
    },
    {
        id: "2",
        name: "Wheelhouse",
        icon: createElement(WheelHouseIcon),
    },
    {
        id: "3",
        name: "Beyond pricing",
        icon: createElement(BeyondPricingIcon),
    },
    {
        id: "4",
        name: "Hostfully",
        icon: createElement(HostfullyIcon),
    },
    {
        id: "5",
        name: "Guesty",
        icon: createElement(GuestyIcon),
    },
    {
        id: "6",
        name: "Lodgify",
        icon: createElement(LodgifyIcon),
    },
    {
        id: "7",
        name: "Guesty",
        icon: createElement(GuestyIcon),
    },
    {
        id: "8",
        name: "Lodgify",
        icon: createElement(LodgifyIcon),
    },
    {
        id: "9",
        name: "Beyond pricing",
        icon: createElement(BeyondPricingIcon),
    },
];
