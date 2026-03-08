"use client";

import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/lib/mockData";

export default function BlogPreview() {
    return (
        <section
            className="py-20 md:py-28"
            style={{ background: "var(--bg-light)" }}
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div
                    className="mb-12 md:mb-16"
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
                        From the
                        <br />
                        Naaz Cool Blog<span style={{ color: "var(--terra-500)" }}>.</span>
                    </h2>
                </div>

                {/* Blog Cards */}
                <div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            style={{
                                background: "white",
                                border: "1px solid rgba(0,0,0,0.06)",
                            }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Category Tag */}
                                <span
                                    className="absolute left-4 top-4 rounded-md px-2.5 py-1 text-[11px] font-semibold text-white"
                                    style={{ background: "var(--terra-500)" }}
                                >
                                    {post.category}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3
                                    className="text-base leading-snug"
                                    style={{
                                        fontFamily: "var(--nk-font-display)",
                                        fontWeight: 700,
                                        color: "var(--ink-950)",
                                    }}
                                >
                                    {post.title}
                                </h3>
                                <p
                                    className="mt-2 text-sm leading-relaxed"
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        fontWeight: 400,
                                        color: "var(--cream-600)",
                                    }}
                                >
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="mt-3 inline-block text-sm font-medium transition-colors duration-200"
                                    style={{
                                        fontFamily: "var(--nk-font-body)",
                                        color: "var(--terra-500)",
                                    }}
                                >
                                    Read more →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
