import { cn } from "@/lib/utils";
import {
    BillingCycle,
    PriceListProps,
} from "@/types/landingPage/priceList.types";
import { Check, X } from "lucide-react";

type PricingCardProps = {
    pricingItem: PriceListProps;
    billingCycle: BillingCycle;
};

export default function PricingCard({
    pricingItem,
    billingCycle,
}: PricingCardProps) {
    return (
        <article
            className={cn(
                "font-manrope rounded-[10px] border px-4 py-6 md:px-6 md:py-10 ",
                pricingItem.theme.cardBackgroundClassName,
                pricingItem.theme.cardBorderClassName,
            )}
        >
            <h2
                className={cn(
                    "text-[22px] leading-tight font-bold",
                    pricingItem.theme.titleClassName,
                )}
            >
                {pricingItem.title}
            </h2>

            <p
                className={cn(
                    "mt-2.75 text-[16px] leading-[1.35] min-h-10 font-regular",
                    pricingItem.theme.descriptionClassName,
                )}
            >
                {pricingItem.description}
            </p>

            <div className="mt-5 flex items-center gap-2">
                <span
                    className={cn(
                        "text-[56px] leading-none font-semibold",
                        pricingItem.theme.priceClassName,
                    )}
                >
                    ${pricingItem.prices[billingCycle]}
                </span>
                <span
                    className={cn(
                        "text-[16px] leading-none",
                        pricingItem.theme.billingClassName,
                    )}
                >
                    / {billingCycle === "monthly" ? "Month" : "Year"}
                </span>
            </div>

            <button
                type="button"
                className={cn(
                    "mt-6 h-11 w-full rounded border text-[16px] font-medium transition-colors duration-200 cursor-pointer",
                    pricingItem.theme.buttonClassName,
                )}
            >
                {pricingItem.buttonText}
            </button>

            <ul className="mt-10 space-y-3">
                {pricingItem.features.map((feature) => (
                    <li
                        key={feature.name}
                        className="flex items-center gap-4.25"
                    >
                        <span
                            className={cn(
                                "flex size-8 shrink-0 items-center justify-center rounded-full",
                                feature.isIncluded
                                    ? pricingItem.theme.includedIconBgClassName
                                    : pricingItem.theme.excludedIconBgClassName,
                            )}
                        >
                            {feature.isIncluded ? (
                                <Check
                                    className={cn(
                                        "size-4.5",
                                        pricingItem.theme.includedIconClassName,
                                    )}
                                />
                            ) : (
                                <X
                                    className={cn(
                                        "size-4.5",
                                        pricingItem.theme.excludedIconClassName,
                                    )}
                                />
                            )}
                        </span>
                        <span
                            className={cn(
                                "text-[16px] leading-[1.35]",
                                feature.isIncluded
                                    ? pricingItem.theme.includedFeatureClassName
                                    : pricingItem.theme
                                          .excludedFeatureClassName,
                            )}
                        >
                            {feature.name}
                        </span>
                    </li>
                ))}
            </ul>
        </article>
    );
}
