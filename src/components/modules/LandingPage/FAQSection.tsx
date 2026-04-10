"use client";

import { Button } from "@/components/ui/button";
import { faqs } from "@/content/landingPage/faqs";
import Image from "next/image";
import React, { useState } from "react";

export default function FAQSection() {
    const [openItemIds, setOpenItemIds] = useState<string[]>(
        faqs.filter((item) => item.isOpen).map((item) => item.id),
    );

    return (
        <div className="mt-45 container mx-auto px-3 lg:px-6 mb-19.25">
            <div className="bg-[#F9FAFB] rounded-[16px] px-3 lg:px-6 pb-18">
                <h1 className="text-center font-bold text-[34px] px-3 lg:px-6 pt-18.5 text-[#191D23]">
                    Frequently Asked{" "}
                    <span className="text-[#ED3C6A]">Questions</span>
                </h1>
                <p className="text-[20px] font-normal text-center max-w-184.5 mx-auto mt-4 text-[#191D23]">
                    Everything you need to know about the product and billing.
                </p>

                <div className="mt-16 max-w-3xl mx-auto">
                    {faqs.map((faqItem) => {
                        const isOpen = openItemIds.includes(faqItem.id);

                        return (
                            <div
                                key={faqItem.id}
                                className="border-b last:border-none border-[#BF214A47] py-6.25"
                            >
                                <button
                                    type="button"
                                    className="flex w-full items-start justify-between gap-6 text-left cursor-pointer"
                                    onClick={() =>
                                        setOpenItemIds((prev) =>
                                            prev.includes(faqItem.id)
                                                ? prev.filter(
                                                      (id) => id !== faqItem.id,
                                                  )
                                                : [...prev, faqItem.id],
                                        )
                                    }
                                >
                                    <h3 className="text-[18px] leading-tight font-bold text-[#000000]">
                                        {faqItem.question}
                                    </h3>
                                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-[#ED3C6A] text-[#ED3C6A] text-[20px] leading-none">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>

                                {isOpen ? (
                                    <p className="mt-3 max-w-228 text-[16px] leading-[1.45] text-[#606060] font-normal">
                                        {faqItem.answer}
                                    </p>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="mt-5 bg-[#F9FAFB] rounded-[16px] py-8">
                <div className="relative flex items-center justify-center  max-w-30 mx-auto mt-8">
                    <div className="absolute left-0">
                        <Image
                            src="/avatar/Avatar.svg"
                            alt="avatar-1"
                            width={48}
                            height={48}
                            className="mx-auto"
                        />
                    </div>
                    <div className="absolute z-20">
                        <Image
                            src="/avatar/Avatar1.svg"
                            alt="avatar-2"
                            width={56}
                            height={56}
                            className="mx-auto"
                        />
                    </div>
                    <div className="absolute right-0">
                        <Image
                            src="/avatar/Avatar2.svg"
                            alt="avatar-3"
                            width={48}
                            height={48}
                            className="mx-auto"
                        />
                    </div>
                </div>
                <h3 className="text-[#101828] text-[20px] font-bold mt-13 text-center">
                    Still have Questions?
                </h3>
                <p className="mt-1 text-[#9C9C9C] text-[18px] font-normal text-center px-6">
                    Can&apos;t find the answer you&apos;re looking for? Please
                    chat to our friendly team.
                </p>
                <div className="mt-8 flex items-center justify-center">
                    <Button className="flex items-center gap-2.5">
                        <span className="font-medium text-[16px]">
                            Get in touch
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
