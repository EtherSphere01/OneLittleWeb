import { ToolCardProps } from "@/types/landingPage/toolCard.type";

export default function ToolsCard({ toolItem }: { toolItem: ToolCardProps }) {
    return (
        <div className="px-17.5 py-10.5 rounded-[11px] bg-white  transition-colors duration-200 hover:shadow-[0_4px_90.3px_0_rgba(215,205,207,0.47)] flex items-center justify-center">
            {toolItem.icon}
        </div>
    );
}
