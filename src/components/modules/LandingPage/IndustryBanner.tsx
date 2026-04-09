import { industryBanner } from "@/content/industryBanner/industryBanner";

export default function IndustryBanner() {
    return (
        <div className="mt-12.75">
            <h3 className="text-[20px] font-semibold text-center px-3 lg:px-6 ">
                Trusted by leaders in 50+ industries
            </h3>
            <div className="mt-9 bg-[#F6F6F6] py-5 overflow-hidden">
                <div className="animate-scroll flex items-center gap-15.25 px-3 lg:px-6">
                    {industryBanner.map((item, index) => (
                        <div key={index} className="shrink-0">
                            {item.logo}
                        </div>
                    ))}
                    {industryBanner.map((item, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="shrink-0"
                            aria-hidden="true"
                        >
                            {item.logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
