import { ToolCardList } from "@/content/landingPage/toolCardList";
import ToolsCard from "./ToolsCard";

export default function ToolsSection() {
    return (
        <div className="mt-21">
            <h1 className="text-center font-bold text-[32px] px-3 lg:px-6">
                Our <span className="text-[#ED3C6A]">Tools</span>
            </h1>
            <p className="text-[14px] font-normal text-center max-w-184.5 mx-auto mt-6 px-3 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="mt-23 bg-[#F6F6F6] py-9.5">
                <div className="max-w-240 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-3 lg:px-6">
                    {ToolCardList.map((tool) => (
                        <ToolsCard key={tool.id} toolItem={tool} />
                    ))}
                </div>
            </div>
        </div>
    );
}
