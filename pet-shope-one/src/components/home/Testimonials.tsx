"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/lib/mockData";

export default function Testimonials() {
    return (
        <section
            className="py-20 md:py-28"
            style={{ background: "var(--ink-900)" }}
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header — Staggered */}
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
                        THE NAAZ COOL
                        <br />
                        <span className="ml-4 md:ml-12">
                            FAMILY<span style={{ color: "var(--terra-500)" }}>.</span>
                        </span>
                    </h2>
                </div>

                {/* Testimonial Cards */}
                <div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: "var(--ink-800)",
                                borderLeft: "2px solid var(--gold-500)",
                            }}
                        >
                            {/* Quote Mark */}
                            <span
                                className="text-4xl leading-none"
                                style={{
                                    fontFamily: "var(--nk-font-accent)",
                                    color: "var(--terra-500)",
                                }}
                            >
                                ❝
                            </span>

                            {/* Quote */}
                            <p
                                className="mt-3 leading-relaxed"
                                style={{
                                    fontFamily: "var(--nk-font-accent)",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                    color: "var(--cream-200)",
                                    fontSize: "var(--text-base)",
                                }}
                            >
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Divider */}
                            <div
                                className="my-5 h-px w-full"
                                style={{ background: "rgba(255,255,255,0.08)" }}
                            />

                            {/* Reviewer */}
                            <div className="flex items-center gap-3">
                                {/* Avatar placeholder */}
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
                                    style={{
                                        background: "var(--terra-700)",
                                        color: "var(--cream-100)",
                                        fontFamily: "var(--nk-font-body)",
                                    }}
                                >
                                    {t.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>
                                <div>
                                    <p
                                        className="text-sm font-medium"
                                        style={{
                                            fontFamily: "var(--nk-font-body)",
                                            color: "var(--cream-100)",
                                        }}
                                    >
                                        {t.name}
                                    </p>
                                    <p
                                        className="text-xs"
                                        style={{
                                            fontFamily: "var(--nk-font-body)",
                                            color: "var(--cream-600)",
                                        }}
                                    >
                                        {t.location} • Bought: {t.pet}
                                    </p>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={13}
                                            fill="var(--gold-500)"
                                            color="var(--gold-500)"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
