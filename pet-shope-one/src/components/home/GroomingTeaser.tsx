"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { groomingServices } from "@/lib/mockData";

export default function GroomingTeaser() {
    return (
        <section
            className="relative overflow-hidden py-20 md:py-28"
            style={{ background: "var(--terra-500)" }}
        >
            {/* Dark left panel — visible on md+ */}
            <div
                className="absolute bottom-0 left-0 top-0 hidden w-1/2 md:block"
                style={{ background: "var(--ink-950)" }}
            />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
                {/* Left — Grooming Photo */}
                <div
                    className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl md:mx-0"
                >
                    <Image
                        src="/images/grooming/grooming-main.png"
                        alt="Professional pet grooming"
                        fill
                        className="object-cover object-center"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(12,10,8,0.4) 0%, transparent 50%)",
                        }}
                    />
                </div>

                {/* Right — Content (on the terracotta side) */}
                <div
                    className="text-white"
                >
                    <h2
                        className="leading-[1.05]"
                        style={{
                            fontFamily: "var(--nk-font-display)",
                            fontWeight: 800,
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                        }}
                    >
                        GLOW UP
                        <br />
                        YOUR PET<span style={{ color: "var(--gold-400)" }}>.</span>
                    </h2>

                    <p
                        className="mt-5 max-w-sm text-base leading-relaxed"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            fontWeight: 300,
                            color: "rgba(255,255,255,0.85)",
                        }}
                    >
                        Professional grooming at your doorstep or at our premium salon.
                    </p>

                    {/* Service Checklist */}
                    <div className="mt-6 flex flex-col gap-3">
                        {groomingServices.map((service) => (
                            <div key={service} className="flex items-center gap-3">
                                <div
                                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                    style={{ background: "rgba(255,255,255,0.2)" }}
                                >
                                    <Check size={12} color="white" strokeWidth={3} />
                                </div>
                                <span
                                    className="text-sm"
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        fontWeight: 400,
                                        color: "rgba(255,255,255,0.9)",
                                    }}
                                >
                                    {service}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="mt-8">
                        <p
                            className="text-lg"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                fontWeight: 600,
                            }}
                        >
                            Starting{" "}
                            <span style={{ color: "var(--gold-400)", fontSize: "1.5rem" }}>
                                ₹499
                            </span>
                        </p>
                        <Link
                            href="/grooming"
                            className="mt-4 inline-block rounded-lg px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                background: "var(--cream-100)",
                                color: "var(--ink-950)",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                            }}
                        >
                            Book Grooming →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
