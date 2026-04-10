import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/content/landingPage/services";

export default function ServiceSection() {
    return (
        <div className="px-3 lg:px-6 mt-13.75">
            <h1 className="font-bold text-[32px] text-center">
                Our <span className="text-[#ED3C6A]">Service</span>
            </h1>
            <p className="text-[14px] font-medium text-center max-w-184.5 mx-auto mt-3.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-13.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
                {services.map((service) => (
                    <ServiceCard key={service.id} serviceCardItems={service} />
                ))}
            </div>
        </div>
    );
}
