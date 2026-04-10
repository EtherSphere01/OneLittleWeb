import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative isolate overflow-hidden">
            <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#ED3C6A]/12 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-[#FAC4D2]/35 blur-3xl" />

            <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-3 lg:px-6 py-20">
                <section className="w-full max-w-3xl rounded-[20px] border border-[#F5C8D6] bg-white/90 px-6 py-12 text-center shadow-[0_20px_60px_0_rgba(237,60,106,0.08)] backdrop-blur-sm md:px-10 md:py-14">
                    <p className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#ED3C6A]">
                        Error 404
                    </p>

                    <h1 className="mt-4 text-[68px] font-bold leading-none text-[#191D23] md:text-[98px]">
                        404
                    </h1>

                    <h2 className="mt-4 text-[30px] font-bold leading-tight text-[#191D23] md:text-[40px]">
                        Page Not Found
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.6] text-[#696D73] md:text-[18px]">
                        The page you are looking for does not exist or may have
                        been moved.
                    </p>

                    <div className="mt-9 flex justify-center">
                        <Button asChild>
                            <Link href="/">Back To Home</Link>
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
}
