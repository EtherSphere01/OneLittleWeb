import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope-alt",
});

export const metadata: Metadata = {
    title: "Airbnb Assistant - Your Ultimate Airbnb Management Solution",
    description:
        "Modern landing page for Airbnb assistant and property management workflows.",
    icons: {
        icon: "/airbnb-favicon.svg",
        shortcut: "/airbnb-favicon.svg",
        apple: "/airbnb-favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                "scroll-smooth",
                dmSans.variable,
                manrope.variable,
            )}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
