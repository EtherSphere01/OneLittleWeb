import { createElement } from "react";
import { AirbnbBanner } from "@/svg/LandingPage/IndustryBanner/AirbnbBanner";
import { IndustryBannerProps } from "@/types/landingPage/industryBanner.types";
import { BookingBanner } from "@/svg/LandingPage/IndustryBanner/BookingBanner";
import { VrboBanner } from "@/svg/LandingPage/IndustryBanner/VrboBanner";
import { TripadvisorBanner } from "@/svg/LandingPage/IndustryBanner/TripadvisorBanner";
import { AgodaBanner } from "@/svg/LandingPage/IndustryBanner/AgodaBanner";
import { ExpediaBanner } from "@/svg/LandingPage/IndustryBanner/ExpediaBanner";
import { HomeToGoBanner } from "@/svg/LandingPage/IndustryBanner/HomeToGoBanner";

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
