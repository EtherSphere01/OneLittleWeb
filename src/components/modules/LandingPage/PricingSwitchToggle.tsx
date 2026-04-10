"use client";

import { Switch } from "@/components/ui/switch";
import { BillingCycle } from "@/types/landingPage/priceList.types";
import { Arrow } from "@/svg/LandingPage/PricingSection/Arrow";
import React from "react";

type PricingSwitchToggleProps = {
    billingCycle: BillingCycle;
    onBillingCycleChange: (billingCycle: BillingCycle) => void;
};

export default function PricingSwitchToggle({
    billingCycle,
    onBillingCycleChange,
}: PricingSwitchToggleProps) {
    const isYearly = billingCycle === "yearly";

    return (
        <div className="gap-x-6 mt-9.5 inline-flex items-center text-[#191D23] relative">
            <span className="text-[16px] font-normal">Pay Monthly</span>
            <Switch
                checked={isYearly}
                onCheckedChange={(checked) =>
                    onBillingCycleChange(checked ? "yearly" : "monthly")
                }
            />
            <p className="text-[16px] font-normal">
                Pay Yearly{" "}
                <span className="md:hidden text-[18px] font-medium text-[#ED3C6A]">
                    (Save 25%)
                </span>
            </p>

            <div className="absolute  md:-right-31 md:-top-4 hidden md:block">
                <div className="relative">
                    <div>
                        <Arrow />
                    </div>
                    <div className="text-[18px] font-medium text-[#ED3C6A] absolute  bottom-6.5 -right-11 translate-x-1/2 translate-y-1/2">
                        Save 25%
                    </div>
                </div>
            </div>
        </div>
    );
}
