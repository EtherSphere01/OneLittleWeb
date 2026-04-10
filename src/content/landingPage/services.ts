import { CalendarIcon } from "@/svg/LandingPage/ServiceSection/CalendarIcon";
import { CleaningIcon } from "@/svg/LandingPage/ServiceSection/CleaningIcon";
import { ClipboardIcon } from "@/svg/LandingPage/ServiceSection/ClipboardIcon";
import { SupportIcon } from "@/svg/LandingPage/ServiceSection/SupportIcon";
import { ThumbsUpIcon } from "@/svg/LandingPage/ServiceSection/ThumbsUpIcon";
import { TrackIcon } from "@/svg/LandingPage/ServiceSection/TrackIcon";
import { ServiceCardProps } from "@/types/landingPage/serviceCard.types";
import { createElement } from "react";

export const services: ServiceCardProps[] = [
    {
        id: "1",
        title: "Manage Property Listings",
        description:
            "Easily create and manage your property listings across multiple platforms with our centralized dashboard.",
        icon: createElement(ClipboardIcon),
        buttonText: "Read More",
    },
    {
        id: "2",
        title: "Manage Customer Bookings",
        description:
            "Streamline your booking process and keep track of all your reservations in one place.",
        icon: createElement(CalendarIcon),
        buttonText: "Read More",
    },
    {
        id: "3",
        title: "Schedule House Cleaning",
        description:
            "Offer your guests the convenience of scheduling house cleaning services directly through our platform.",
        icon: createElement(CleaningIcon),
        buttonText: "Read More",
    },
    {
        id: "4",
        title: "Monitor Guest Reviews",
        description:
            "Keep an eye on guest feedback and reviews to ensure your property maintains a high standard of service.",
        icon: createElement(ThumbsUpIcon),
        buttonText: "Read More",
    },
    {
        id: "5",
        title: "Track & Report Expenses",
        description:
            "Easily track your expenses and generate reports to help you manage your finances effectively.",
        icon: createElement(TrackIcon),
        buttonText: "Read More",
    },
    {
        id: "6",
        title: "Guest Inquiry & Support",
        description:
            "Provide excellent customer support by managing guest inquiries and issues through our integrated support system.",
        icon: createElement(SupportIcon),
        buttonText: "Read More",
    },
];
