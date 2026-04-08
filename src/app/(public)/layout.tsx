import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-dvh flex flex-col">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
