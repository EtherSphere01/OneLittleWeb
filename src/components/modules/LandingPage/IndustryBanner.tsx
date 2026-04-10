import { industryBanner } from "@/content/landingPage/industryBanner";
import { IndustryBannerProps } from "@/types/landingPage/industryBanner.types";

const Logos = ({ items }: { items: IndustryBannerProps[] }) => (
    <>
        {items.map((item, index) => (
            <div
                key={index}
                className="shrink-0"
                aria-hidden={index > 0 ? "true" : undefined}
            >
                {item.logo}
            </div>
        ))}
    </>
);

export default function IndustryBanner() {
    return (
        <div className="mt-12.75">
            <h3 className="text-[20px] font-semibold text-center px-3 lg:px-6 ">
                Trusted by leaders in 50+ industries
            </h3>
            <div className="mt-9 bg-[#F6F6F6] py-5 overflow-hidden">
                <div className="animate-scroll flex items-center gap-15.25 px-3 lg:px-6">
                    <Logos items={industryBanner} />
                    <Logos items={industryBanner} />
                    <Logos items={industryBanner} />
                </div>
            </div>
        </div>
    );
}
