import Link from "next/link";
import { companyItems } from "@/content/footer/companyItems";
import { helpItems } from "@/content/footer/helpItems";
import { resourcesItems } from "@/content/footer/resourcesItems";
import { socialMediaItems } from "@/content/footer/socialMediaItems";
import { footerItem, socialMediaItem } from "@/types/footer";
import { GoogleLogo } from "@/svg/Header/GoogleLogo";

const footerSections: Array<{ title: string; items: footerItem[] }> = [
    { title: "Company", items: companyItems },
    { title: "Help", items: helpItems },
    { title: "Resources", items: resourcesItems },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-auto border-t border-[#D6D6D6]">
            <div className="bg-white py-20.75">
                <div className="mx-auto w-full container px-3 lg:px-6">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-8">
                        <div>
                            <Link
                                href="/"
                                aria-label="Go to home"
                                className="inline-flex"
                            >
                                <GoogleLogo width={106} height={38} />
                            </Link>

                            <p className="mt-3.5 max-w-[320px] text-[14px] leading-5.5 text-[#52525B]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam dictum aliquet accumsan
                                porta lectus ridiculus in mattis. Netus sodales
                                in volutpat ullamcorper amet adipiscing
                                fermentum.
                            </p>

                            <div className="mt-7 flex items-center gap-8">
                                {socialMediaItems.map(
                                    (item: socialMediaItem) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            aria-label={item.name}
                                            className="inline-flex items-center justify-center"
                                        >
                                            {item.icon}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>

                        {footerSections.map((section) => (
                            <nav
                                key={section.title}
                                aria-label={`${section.title} links`}
                            >
                                <h2 className="text-[16px] font-bold leading-6 text-[#18181B]">
                                    {section.title}
                                </h2>

                                <ul className="mt-5 md:space-y-2 font-medium">
                                    {section.items.map((item: footerItem) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-[14px] leading-10 text-[#18181B]"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#2D0946] px-6 py-5 text-center text-[14px] leading-5.5 text-white">
                © Copyright {currentYear}, All Rights Reserved by XYZ
            </div>
        </footer>
    );
}
