"use client";

import Link from "next/link";

const footerLinks = {
    Explore: [
        { label: "All Pets", href: "/pets" },
        { label: "Products", href: "/products" },
        { label: "Breeds", href: "/pets" },
        { label: "Grooming", href: "/grooming" },
    ],
    Services: [
        { label: "Grooming", href: "/grooming" },
        { label: "Pet Delivery", href: "/booking" },
        { label: "Adoption Help", href: "/contact" },
        { label: "Training Tips", href: "/blog" },
    ],
    Company: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/contact" },
        { label: "Contact", href: "/contact" },
    ],
    Social: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "YouTube", href: "#" },
        { label: "Pinterest", href: "#" },
    ],
};

export default function Footer({ siteData }: { siteData: any }) {
    return (
        <footer
            style={{
                background: "var(--ink-950)",
                borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            {/* Top Section */}
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🐾</span>
                            <span
                                className="text-2xl tracking-wide uppercase"
                                style={{
                                    fontFamily: "var(--nk-font-display)",
                                    fontWeight: 800,
                                    color: "var(--cream-100)",
                                }}
                            >
                                {siteData?.site_name || "NAAZ KOOL"}
                            </span>
                        </div>
                        <p
                            className="mt-2 text-sm"
                            style={{
                                fontFamily: "var(--nk-font-accent)",
                                fontStyle: "italic",
                                color: "var(--cream-400)",
                            }}
                        >
                            Where cool meets care.
                        </p>
                    </div>
                    {siteData?.phone && (
                        <a
                            href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                background: "var(--terra-500)",
                                boxShadow: "var(--shadow-terra)",
                            }}
                        >
                            💬 Chat on WhatsApp →
                        </a>
                    )}
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4
                                className="mb-4 text-xs uppercase tracking-widest"
                                style={{
                                    fontFamily: "var(--nk-font-body)",
                                    fontWeight: 600,
                                    color: "var(--cream-400)",
                                }}
                            >
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm transition-colors duration-200"
                                            style={{
                                                fontFamily: "var(--nk-font-body)",
                                                fontWeight: 300,
                                                color: "var(--cream-600)",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.target as HTMLElement).style.color =
                                                    "var(--terra-400)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.target as HTMLElement).style.color =
                                                    "var(--cream-600)";
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                className="border-t px-6 py-5"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
                    <p
                        className="text-xs"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            color: "var(--cream-600)",
                        }}
                    >
                        {siteData?.footer_text || "© 2026 Naaz Cool Pet Shop. All rights reserved."}
                    </p>
                    <div className="flex items-center gap-4">
                        {["Privacy", "Terms", "Refund Policy"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-xs transition-colors duration-200"
                                style={{
                                    fontFamily: "var(--nk-font-body)",
                                    color: "var(--cream-600)",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.color = "var(--cream-200)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.color = "var(--cream-600)";
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <p
                        className="text-xs"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            color: "var(--cream-600)",
                        }}
                    >
                        Made with ❤️ for pet lovers everywhere
                    </p>
                </div>
            </div>
        </footer>
    );
}
