"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { featuredPets, formatPrice } from "@/lib/mockData";

export default function FeaturedPets() {
    return (
        <section
            className="py-20 md:py-28"
            style={{ background: "var(--ink-950)" }}
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mb-12 flex items-end justify-between md:mb-16">
                    <div>
                        <h2
                            className="leading-[1.05]"
                            style={{
                                fontFamily: "var(--nk-font-display)",
                                fontWeight: 800,
                                color: "var(--cream-100)",
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            }}
                        >
                            THE ONES
                            <br />
                            EVERYONE&apos;S
                            <br />
                            TALKING ABOUT<span style={{ color: "var(--terra-500)" }}>.</span>
                        </h2>
                    </div>
                    <Link
                        href="/pets"
                        className="hidden text-sm font-medium transition-colors duration-200 md:block"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            color: "var(--terra-400)",
                        }}
                    >
                        Browse All →
                    </Link>
                </div>

                {/* Editorial Grid: 2 cols on md, 4 cols on lg */}
                <div
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {featuredPets.map((pet, index) => (
                        <div
                            key={pet.id}
                            className={`group relative cursor-pointer overflow-hidden rounded-xl ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                                }`}
                            style={{
                                background: "var(--bg-card)",
                                height: index === 0 ? "480px" : "280px",
                            }}
                        >
                            <Image
                                src={pet.image}
                                alt={pet.name}
                                fill
                                priority={index === 0}
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0 transition-opacity duration-300"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(12,10,8,0.9) 0%, transparent 50%)",
                                }}
                            />
                            {/* Badges */}
                            <div className="absolute left-4 top-4 flex gap-2">
                                {pet.is_certified && (
                                    <span
                                        className="rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white"
                                        style={{ background: "var(--terra-500)" }}
                                    >
                                        Certified
                                    </span>
                                )}
                                {pet.is_new && (
                                    <span
                                        className="rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                                        style={{
                                            background: "var(--gold-500)",
                                            color: "var(--ink-950)",
                                        }}
                                    >
                                        New
                                    </span>
                                )}
                            </div>
                            <button className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white">
                                <Heart size={index === 0 ? 22 : 18} />
                            </button>
                            {/* Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p
                                    className="text-xs uppercase tracking-wider"
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        fontWeight: 500,
                                        color: "var(--cream-400)",
                                    }}
                                >
                                    {pet.breed}
                                </p>
                                <h3
                                    className={index === 0 ? "mt-1 text-2xl" : "mt-0.5 text-lg"}
                                    style={{
                                        fontFamily: "var(--nk-font-display)",
                                        fontWeight: 700,
                                        color: "var(--cream-100)",
                                    }}
                                >
                                    {pet.name}
                                </h3>
                                <p
                                    className={`font-semibold ${index === 0 ? "mt-1 text-lg" : "mt-0.5 text-sm"}`}
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        color: "var(--terra-400)",
                                    }}
                                >
                                    {formatPrice(pet.price)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/pets"
                        className="text-sm font-medium"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            color: "var(--terra-400)",
                        }}
                    >
                        Browse All Pets →
                    </Link>
                </div>
            </div>
        </section >
    );
}
