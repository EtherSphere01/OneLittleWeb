import { ReviewProps } from "@/types/landingPage/review.types";
import { Star } from "lucide-react";
import Image from "next/image";

export default function ReviewCard({
    reviewItem,
}: {
    reviewItem: ReviewProps;
}) {
    const roundedRating = Math.round(reviewItem.rating);

    return (
        <article className="w-132.5 rounded-[11px] px-9.25 py-11 bg-[#F6F6F6] border border-[#F6F6F6] hover:border-transparent hover:shadow-[0_3px_8px_0_rgba(215,205,207,0.47)] hover:bg-white flex items-center gap-7.5">
            <div className="rounded-full min-w-25 h-25">
                <Image
                    src={reviewItem.reviewerAvatarUrl}
                    alt={reviewItem.reviewerName}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover rounded-full"
                />
            </div>

            <div>
                <h4 className="text-[20px] font-bold leading-tight text-[#000000]">
                    {reviewItem.reviewerName}
                </h4>

                <p className="mt-1.25 overflow-hidden text-[14px] leading-[1.35] text-[#000000]">
                    {reviewItem.review}
                </p>

                <div className="mt-3 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            className={`size-3.25 ${
                                index < roundedRating
                                    ? "fill-[#FF9D00] text-[#FF9D00]"
                                    : "text-[#E4E4E7]"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}
