import { PriceListProps } from "@/types/landingPage/priceList.types";

export const priceList: PriceListProps[] = [
    {
        id: "freebie",
        packageType: "freebie",
        title: "Freebie",
        description:
            "Ideal for individuals who need quick access to basic features.",
        prices: {
            monthly: 0,
            yearly: 0,
        },
        buttonText: "Get Started Now",
        features: [
            {
                name: "20,000+ of PNG & SVG graphics",
                isIncluded: true,
            },
            {
                name: "Access to 100 million stock images",
                isIncluded: true,
            },
            {
                name: "Upload custom icons and fonts",
                isIncluded: false,
            },
            {
                name: "Unlimited Sharing",
                isIncluded: false,
            },
            {
                name: "Upload graphics & video in up to 4k",
                isIncluded: false,
            },
            {
                name: "Unlimited Projects",
                isIncluded: false,
            },
            {
                name: "Instant Access to our design system",
                isIncluded: false,
            },
            {
                name: "Create teams to collaborate on designs",
                isIncluded: false,
            },
        ],
        theme: {
            cardBackgroundClassName: "bg-white",
            cardBorderClassName: "border-[#FAC4D2]",
            titleClassName: "text-[#191D23]",
            descriptionClassName: "text-[#64748B]",
            priceClassName: "text-[#191D23]",
            billingClassName: "text-[#4B5768]",
            buttonClassName:
                "border-[#ED3C6A] text-[#ED3C6A] bg-white hover:bg-[#ED3C6A] hover:text-white",
            includedIconBgClassName: "bg-[#FAC4D2]",
            includedIconClassName: "text-[#ED3C6A]",
            excludedIconBgClassName: "bg-[#F7F8F9]",
            excludedIconClassName: "text-[#191D23]",
            includedFeatureClassName: "text-[#191D23]",
            excludedFeatureClassName: "text-[#A0ABBB]",
        },
    },
    {
        id: "professional",
        packageType: "professional",
        title: "Professional",
        description:
            "Ideal for individuals who need advanced features and tools for client work.",
        prices: {
            monthly: 25,
            yearly: 19,
        },
        buttonText: "Get Started Now",
        features: [
            {
                name: "20,000+ of PNG & SVG graphics",
                isIncluded: true,
            },
            {
                name: "Access to 100 million stock images",
                isIncluded: true,
            },
            {
                name: "Upload custom icons and fonts",
                isIncluded: true,
            },
            {
                name: "Unlimited Sharing",
                isIncluded: true,
            },
            {
                name: "Upload graphics & video in up to 4k",
                isIncluded: true,
            },
            {
                name: "Unlimited Projects",
                isIncluded: true,
            },
            {
                name: "Instant Access to our design system",
                isIncluded: false,
            },
            {
                name: "Create teams to collaborate on designs",
                isIncluded: false,
            },
        ],
        theme: {
            cardBackgroundClassName: "bg-[#ED3C6A]",
            cardBorderClassName: "border-[#ED3C6A]",
            titleClassName: "text-white",
            descriptionClassName: "text-[#F7F8F9]",
            priceClassName: "text-white",
            billingClassName: "text-[#F7F8F9]",
            buttonClassName:
                "border-white bg-white text-[#ED3C6A] hover:bg-[#FFDCE7] hover:border-[#FFDCE7]",
            includedIconBgClassName: "bg-[#FAC4D2]",
            includedIconClassName: "text-[#F16388]",
            excludedIconBgClassName: "bg-white",
            excludedIconClassName: "text-[#4B5768]",
            includedFeatureClassName: "text-white",
            excludedFeatureClassName: "text-[#FFE8EF]",
        },
    },
    {
        id: "enterprise",
        packageType: "enterprise",
        title: "Enterprise",
        description:
            "Ideal for businesses who need personalized services and security for large teams.",
        prices: {
            monthly: 100,
            yearly: 75,
        },
        buttonText: "Get Started Now",
        features: [
            {
                name: "20,000+ of PNG & SVG graphics",
                isIncluded: true,
            },
            {
                name: "Access to 100 million stock images",
                isIncluded: true,
            },
            {
                name: "Upload custom icons and fonts",
                isIncluded: true,
            },
            {
                name: "Unlimited Sharing",
                isIncluded: true,
            },
            {
                name: "Upload graphics & video in up to 4k",
                isIncluded: true,
            },
            {
                name: "Unlimited Projects",
                isIncluded: true,
            },
            {
                name: "Instant Access to our design system",
                isIncluded: true,
            },
            {
                name: "Create teams to collaborate on designs",
                isIncluded: true,
            },
        ],
        theme: {
            cardBackgroundClassName: "bg-white",
            cardBorderClassName: "border-[#FAC4D2]",
            titleClassName: "text-[#191D23]",
            descriptionClassName: "text-[#64748B]",
            priceClassName: "text-[#191D23]",
            billingClassName: "text-[#4B5768]",
            buttonClassName:
                "border-[#ED3C6A] text-[#ED3C6A] bg-white hover:bg-[#ED3C6A] hover:text-white",
            includedIconBgClassName: "bg-[#FAC4D2]",
            includedIconClassName: "text-[#ED3C6A]",
            excludedIconBgClassName: "bg-[#F7F8F9]",
            excludedIconClassName: "text-[#191D23]",
            includedFeatureClassName: "text-[#191D23]",
            excludedFeatureClassName: "text-[#A0ABBB]",
        },
    },
];
