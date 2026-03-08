"use client";

import Link from "next/link";


export default function CommunityBanner() {
    return (
        <section
            className="relative overflow-hidden py-20 md:py-24"
            style={{
                background: "linear-gradient(135deg, var(--terra-500) 0%, var(--gold-500) 100%)",
            }}
        >
            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
                <div>
                    <span className="text-4xl">🐾</span>

                    <h2
                        className="mt-4 leading-tight"
                        style={{
                            fontFamily: "var(--nk-font-display)",
                            fontWeight: 800,
                            color: "white",
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                        }}
                    >
                        JOIN THE NAAZ COOL COMMUNITY
                    </h2>

                    <p
                        className="mt-3"
                        style={{
                            fontFamily: "var(--nk-font-accent)",
                            fontStyle: "italic",
                            fontWeight: 400,
                            color: "var(--gold-200)",
                            fontSize: "var(--text-lg)",
                        }}
                    >
                        10,000+ pet lovers &amp; counting
                    </p>

                    <p
                        className="mx-auto mt-4 max-w-md text-base"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            fontWeight: 300,
                            color: "rgba(255,255,255,0.85)",
                            lineHeight: 1.7,
                        }}
                    >
                        Share your pet stories, get expert advice, exclusive deals, and much more.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/community"
                            className="rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                background: "white",
                                color: "var(--ink-950)",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                            }}
                        >
                            Join Free →
                        </Link>
                        <Link
                            href="/community"
                            className="rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                background: "rgba(255,255,255,0.15)",
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.3)",
                            }}
                        >
                            View Community
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
