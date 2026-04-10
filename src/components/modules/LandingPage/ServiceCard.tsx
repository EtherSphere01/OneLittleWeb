import { ServiceCardProps } from "@/types/landingPage/serviceCard.types";

export default function ServiceCard({
    serviceCardItems,
}: {
    serviceCardItems: ServiceCardProps;
}) {
    return (
        <div className="px-8.25 pb-8.25 pt-12.5 border border-[#FAC4D2] hover:border-transparent rounded-[13px] hover:bg-white transition-colors duration-200 hover:shadow-[0_4px_90.3px_0_rgba(215,205,207,0.47)]">
            <div>{serviceCardItems.icon}</div>
            <h1 className="text-[24px] font-bold leading-[130%] mt-8 max-w-55 text-[#1E1E1E]">
                {serviceCardItems.title}
            </h1>
            <p className="mt-3.5 max-w-76.5 leading-[120%]">
                {serviceCardItems.description}
            </p>
            <button className="border border-[#ED3C6A] rounded-[44px] text-[#ED3C6A] font-medium text-[14px] px-6 py-2.5 mt-9 cursor-pointer hover:bg-[#ED3C6A] hover:text-white transition-colors duration-200">
                {serviceCardItems.buttonText}
            </button>
        </div>
    );
}
