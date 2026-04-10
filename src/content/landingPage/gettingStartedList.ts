import { HeadPhoneIcon } from "@/svg/LandingPage/GettingStartedSection/HeadphoneIcon";
import { UserAddIcon } from "@/svg/LandingPage/GettingStartedSection/UserAddIcon";
import { UserGroupIcon } from "@/svg/LandingPage/GettingStartedSection/UserGroupIcon";
import { GettingStartedCardProps } from "@/types/landingPage/gettingStarted.types";
import { createElement } from "react";

export const GettingStartedList: GettingStartedCardProps[] = [
    {
        id: "01",
        title: "Add requirements & sign up today",
        icon: createElement(UserAddIcon),
    },
    {
        id: "02",
        title: "Connect with your CSM & onboarding team",
        icon: createElement(UserGroupIcon),
    },
    {
        id: "03",
        title: "Meet your STR Assistant next week",
        icon: createElement(HeadPhoneIcon),
    },
];
