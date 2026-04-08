"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/content/header/navItems";
import { cn } from "@/lib/utils";
import { GoogleLogo } from "@/svg/Header/GoogleLogo";
import { Button } from "../ui/button";
import { RightArrow } from "@/svg/Header/RightArrow";
import { navItem } from "@/types/header";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const navLinkClass = (href: string) =>
        cn(
            "inline-flex border-b-[1px] pb-[7px] text-[18px] leading-none transition-colors",
            isActive(href)
                ? "border-[#ED3C6A] text-[#ED3C6A] font-bold"
                : "border-transparent text-[#1E1E1E] font-normal",
        );

    return (
        <header className="relative z-40 bg-white shadow-[0_4px_62px_0_rgba(250,196,210,0.63)]">
            <div className="mx-auto flex h-20 w-full container items-center justify-between px-3 lg:px-6">
                <Link href="/">
                    <GoogleLogo />
                </Link>

                <nav
                    className="hidden items-center gap-6.25 lg:flex"
                    aria-label="Main navigation"
                >
                    {navItems.map((item: navItem, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={navLinkClass(item.href)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex">
                    <Button className="flex items-center gap-2.5">
                        <span className="font-bold text-[14px]">
                            Schedule A Meeting
                        </span>
                        <RightArrow />
                    </Button>
                </div>

                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#EAEAEA] lg:hidden"
                >
                    <span className="sr-only">Menu</span>
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                        >
                            <path d="M6 6L18 18" />
                            <path d="M6 18L18 6" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                        >
                            <path d="M4 7h16" />
                            <path d="M4 12h16" />
                            <path d="M4 17h16" />
                        </svg>
                    )}
                </button>
            </div>

            {isMenuOpen ? (
                <>
                    <button
                        type="button"
                        aria-label="Close menu"
                        className="fixed inset-0 z-40 bg-transparent lg:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    <nav
                        className="absolute inset-x-0 top-full z-50 border-t border-[#EAEAEA] bg-white shadow-sm lg:hidden"
                        aria-label="Mobile navigation"
                    >
                        <div className="mx-auto w-full max-w-7xl px-4 py-4 lg:px-8">
                            <div className="flex flex-col gap-3">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            navLinkClass(item.href),
                                            "w-fit",
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <Button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-2.5"
                                >
                                    <span className="font-bold text-[14px]">
                                        Schedule A Meeting
                                    </span>
                                    <RightArrow />
                                </Button>
                            </div>
                        </div>
                    </nav>
                </>
            ) : null}
        </header>
    );
}
