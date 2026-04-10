import GettingStartedSection from "@/components/modules/LandingPage/GettingStartedSection";
import HeroSection from "@/components/modules/LandingPage/HeroSection";
import IndustryBanner from "@/components/modules/LandingPage/IndustryBanner";
import PricingSection from "@/components/modules/LandingPage/PricingSection";
import ReviewSection from "@/components/modules/LandingPage/ReviewSection";
import ServiceSection from "@/components/modules/LandingPage/ServiceSection";
import ToolsSection from "@/components/modules/LandingPage/ToolsSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <IndustryBanner />
            <ServiceSection />
            <PricingSection />
            <ToolsSection />
            <GettingStartedSection />
            <ReviewSection />
        </div>
    );
}
