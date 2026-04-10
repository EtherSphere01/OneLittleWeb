"use client";

import { priceList } from "@/content/landingPage/priceList";
import { BillingCycle } from "@/types/landingPage/priceList.types";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import PricingSwitchToggle from "./PricingSwitchToggle";

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

    return (
        <div id="pricing" className="mt-18.25 px-3 lg:px-6">
            <h1 className="text-[40px] font-bold text-center text-[#191D23]">
                Airbnb Assistant <span className="text-[#ED3C6A]">Pricing</span>
            </h1>
            <p className="text-[20px] font-normal text-center mt-4 text-[#191D23]">
                Choose a plan that&apos;s right for you
            </p>
            <div className="text-center">
                <PricingSwitchToggle
                    billingCycle={billingCycle}
                    onBillingCycleChange={setBillingCycle}
                />
            </div>

            <div className="mt-22.5 grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto">
                {priceList.map((pricingItem) => (
                    <PricingCard
                        key={pricingItem.id}
                        pricingItem={pricingItem}
                        billingCycle={billingCycle}
                    />
                ))}
            </div>
        </div>
    );
}
