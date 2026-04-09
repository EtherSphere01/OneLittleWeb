import HeroSection from "@/components/modules/LandingPage/HeroSection";
import IndustryBanner from "@/components/modules/LandingPage/IndustryBanner";
import ServiceSection from "@/components/modules/LandingPage/ServiceSection";
import React from "react";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <IndustryBanner />
            <ServiceSection />
        </div>
    );
}
