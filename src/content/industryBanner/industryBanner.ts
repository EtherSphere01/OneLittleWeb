import { createElement } from "react";
import { AirbnbBanner } from "@/svg/IndustryBanner/AirbnbBanner";
import { IndustryBannerProps } from "@/types/industryBanner";
import { BookingBanner } from "@/svg/IndustryBanner/BookingBanner";
import { VrboBanner } from "@/svg/IndustryBanner/VrboBanner";
import { TripadvisorBanner } from "@/svg/IndustryBanner/TripadvisorBanner";
import { AgodaBanner } from "@/svg/IndustryBanner/AgodaBanner";
import { ExpediaBanner } from "@/svg/IndustryBanner/ExpediaBanner";
import { HomeToGoBanner } from "@/svg/IndustryBanner/HomeToGoBanner";

export const industryBanner: IndustryBannerProps[] = [
    {
        company: "Airbnb",
        logo: createElement(AirbnbBanner),
    },
    {
        company: "Booking.com",
        logo: createElement(BookingBanner),
    },
    {
        company: "Vrbo",
        logo: createElement(VrboBanner),
    },
    {
        company: "TripAdvisor",
        logo: createElement(TripadvisorBanner),
    },
    {
        company: "Agoda",
        logo: createElement(AgodaBanner),
    },
    {
        company: "Expedia",
        logo: createElement(ExpediaBanner),
    },
    {
        company: "HomeToGo",
        logo: createElement(HomeToGoBanner),
    },
];
