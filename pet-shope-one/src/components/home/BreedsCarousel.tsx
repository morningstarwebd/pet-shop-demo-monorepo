"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { breeds } from "@/lib/mockData";

export default function BreedsCarousel() {
    return (
        <section
            className="py-20 md:py-28"
            style={{ background: "var(--ink-950)" }}
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header — Asymmetric staggered title */}
                <div
                    className="mb-12 md:mb-16"
                >
                    <h2
                        style={{
                            fontFamily: "var(--nk-font-display)",
                            fontWeight: 800,
                            color: "var(--cream-100)",
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            lineHeight: 1.05,
                        }}
                    >
                        FIND YOUR
                        <br />
                        <span className="ml-8 md:ml-16">
                            BREED MATCH<span style={{ color: "var(--terra-500)" }}>.</span>
                        </span>
                    </h2>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div
                    className="scrollbar-hide flex gap-5 overflow-x-auto pb-4"
                >
                    {breeds.map((breed) => (
                        <div
                            key={breed.id}
                            className="group relative flex-none cursor-pointer overflow-hidden rounded-2xl"
                            style={{ width: "280px", height: "380px" }}
                        >
                            {/* Image */}
                            <Image
                                src={breed.image}
                                alt={breed.name}
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Dark Overlay */}
                            <div
                                className="absolute inset-0 transition-opacity duration-300"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(12,10,8,0.9) 0%, rgba(12,10,8,0.2) 50%, transparent 100%)",
                                }}
                            />

                            {/* Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3
                                    className="text-lg"
                                    style={{
                                        fontFamily: "var(--nk-font-display)",
                                        fontWeight: 700,
                                        color: "var(--cream-100)",
                                    }}
                                >
                                    {breed.name}
                                </h3>
                                <p
                                    className="mt-1 text-sm"
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        fontWeight: 400,
                                        color: "var(--terra-400)",
                                    }}
                                >
                                    {breed.price_range}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div
                                className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                                style={{
                                    background: "var(--terra-500)",
                                    color: "white",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "var(--gold-500)";
                                    e.currentTarget.style.color = "var(--ink-950)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "var(--terra-500)";
                                    e.currentTarget.style.color = "white";
                                }}
                            >
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
