"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Plus } from "lucide-react";
import { featuredProducts, formatPrice } from "@/lib/mockData";

export default function ProductShop() {
    return (
        <section
            className="py-20 md:py-28"
            style={{ background: "var(--bg-light)" }}
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mb-12 flex items-end justify-between md:mb-16">
                    <div
                    >
                        <h2
                            className="leading-tight"
                            style={{
                                fontFamily: "var(--nk-font-display)",
                                fontWeight: 800,
                                color: "var(--ink-950)",
                                fontSize: "clamp(2rem, 5vw, 3rem)",
                            }}
                        >
                            Shop for your
                            <br />
                            best friend<span style={{ color: "var(--terra-500)" }}>.</span>
                        </h2>
                        <p
                            className="mt-3"
                            style={{
                                fontFamily: "var(--nk-font-accent)",
                                fontStyle: "italic",
                                color: "var(--terra-600)",
                                fontSize: "var(--text-lg)",
                            }}
                        >
                            Everything they need, nothing they don&apos;t.
                        </p>
                    </div>
                    <Link
                        href="/products"
                        className="hidden text-sm font-medium transition-colors duration-200 md:block"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            color: "var(--terra-500)",
                        }}
                    >
                        View All Products →
                    </Link>
                </div>

                {/* Product Grid */}
                <div
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            style={{
                                background: "white",
                                border: "1px solid rgba(0,0,0,0.06)",
                            }}
                        >
                            {/* Image */}
                            <div className="relative aspect-square overflow-hidden" style={{ background: "#F5F3EF" }}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain object-center p-6 transition-transform duration-500 group-hover:scale-105"
                                />
                                {product.discount_price && (
                                    <span
                                        className="absolute left-3 top-3 rounded-md px-2 py-0.5 text-[11px] font-semibold text-white"
                                        style={{ background: "var(--terra-500)" }}
                                    >
                                        🏷️ {Math.round(((product.price - product.discount_price) / product.price) * 100)}% OFF
                                    </span>
                                )}
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <p
                                    className="text-[11px] uppercase tracking-wider"
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        fontWeight: 600,
                                        color: "var(--cream-600)",
                                    }}
                                >
                                    {product.brand}
                                </p>
                                <h3
                                    className="mt-1 text-sm leading-snug"
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        fontWeight: 500,
                                        color: "var(--ink-950)",
                                    }}
                                >
                                    {product.name}
                                </h3>

                                {/* Rating */}
                                <div className="mt-2 flex items-center gap-1">
                                    <Star
                                        size={13}
                                        fill="var(--gold-500)"
                                        color="var(--gold-500)"
                                    />
                                    <span
                                        className="text-xs"
                                        style={{
                                            fontFamily: "var(--nk-font-body)",
                                            color: "var(--ink-700)",
                                        }}
                                    >
                                        {product.rating}{" "}
                                        <span style={{ color: "var(--cream-600)" }}>
                                            ({product.review_count} reviews)
                                        </span>
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="mt-2 flex items-center gap-2">
                                    <span
                                        className="text-base font-semibold"
                                        style={{
                                            fontFamily: "var(--nk-font-body)",
                                            color: "var(--ink-950)",
                                        }}
                                    >
                                        {formatPrice(product.discount_price || product.price)}
                                    </span>
                                    {product.discount_price && (
                                        <span
                                            className="text-sm line-through"
                                            style={{
                                                fontFamily: "var(--nk-font-body)",
                                                color: "var(--cream-600)",
                                            }}
                                        >
                                            {formatPrice(product.price)}
                                        </span>
                                    )}
                                </div>

                                {/* Add to Bag */}
                                <button
                                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        background: "var(--ink-950)",
                                        color: "var(--cream-100)",
                                    }}
                                >
                                    <Plus size={16} />
                                    Add to Bag
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/products"
                        className="text-sm font-medium"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            color: "var(--terra-500)",
                        }}
                    >
                        View All Products →
                    </Link>
                </div>
            </div>
        </section>
    );
}
