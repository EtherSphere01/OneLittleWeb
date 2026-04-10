export type BillingCycle = "monthly" | "yearly";

export type PricingPackageType = "freebie" | "professional" | "enterprise";

export type PricingFeature = {
    name: string;
    isIncluded: boolean;
};

export type PricingCardTheme = {
    cardBackgroundClassName: string;
    cardBorderClassName: string;
    titleClassName: string;
    descriptionClassName: string;
    priceClassName: string;
    billingClassName: string;
    buttonClassName: string;
    includedIconBgClassName: string;
    includedIconClassName: string;
    excludedIconBgClassName: string;
    excludedIconClassName: string;
    includedFeatureClassName: string;
    excludedFeatureClassName: string;
};

export type PriceListProps = {
    id: string;
    packageType: PricingPackageType;
    title: string;
    description: string;
    prices: Record<BillingCycle, number>;
    features: PricingFeature[];
    buttonText: string;
    theme: PricingCardTheme;
};
