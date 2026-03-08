"use client";

import { Shield, Truck, Star, Headphones } from "lucide-react";
import { promiseCards } from "@/lib/mockData";

const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield size={36} />,
    Truck: <Truck size={36} />,
    Star: <Star size={36} />,
    HeadphonesIcon: <Headphones size={36} />,
};

export default function NaazKoolPromise() {
    return (
        <section
            className="py-20 md:py-28"
            style={{ background: "var(--ink-900)" }}
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Title */}
                <div
                    className="mb-12 md:mb-16"
                >
                    <h2
                        className="leading-tight"
                        style={{
                            fontFamily: "var(--nk-font-display)",
                            fontWeight: 800,
                            color: "var(--cream-100)",
                            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                        }}
                    >
                        THE NAAZ COOL
                        <br />
                        PROMISE<span style={{ color: "var(--terra-500)" }}>.</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {promiseCards.map((card) => (
                        <div
                            key={card.title}
                            className="group cursor-default rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: "var(--ink-800)",
                                borderLeft: "3px solid var(--terra-500)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "var(--shadow-glow)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div
                                className="mb-4"
                                style={{ color: "var(--terra-400)" }}
                            >
                                {iconMap[card.icon]}
                            </div>
                            <h3
                                className="mb-3 text-sm tracking-wider"
                                style={{
                                    fontFamily: "var(--nk-font-display)",
                                    fontWeight: 700,
                                    color: "var(--cream-100)",
                                }}
                            >
                                {card.title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed"
                                style={{
                                    fontFamily: "var(--nk-font-body)",
                                    fontWeight: 400,
                                    color: "var(--cream-400)",
                                }}
                            >
                                {card.description}
                            </p>
                            <div
                                className="mt-5 h-px w-full"
                                style={{ background: "var(--terra-700)" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
