import React from "react";
import { TwitterIcon } from "@/svg/Footer/TwitterIcon";
import { socialMediaItem } from "@/types/footer/footer.types";
import { FacebookIcon } from "@/svg/Footer/FacebookIcon";
import { InstagramIcon } from "@/svg/Footer/InstagramIcon";
import { GithubIcon } from "@/svg/Footer/GithubIcon";

export const socialMediaItems: socialMediaItem[] = [
    {
        name: "Twitter",
        href: "https://twitter.com",
        icon: React.createElement(TwitterIcon),
    },
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: React.createElement(FacebookIcon),
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: React.createElement(InstagramIcon),
    },
    {
        name: "GitHub",
        href: "https://github.com",
        icon: React.createElement(GithubIcon),
    },
];
