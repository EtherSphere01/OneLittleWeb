import { createElement } from "react";
import { AirbnbBanner } from "@/svg/IndustryBanner/AirbnbBanner";
import { IndustryBannerProps } from "@/types/industryBanner";

export const industryBanner: IndustryBannerProps[] = [
    {
        company: "Airbnb",
        logo: createElement(AirbnbBanner),
    },
];
