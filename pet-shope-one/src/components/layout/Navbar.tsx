"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import SideDrawer from "./SideDrawer";

const navLinks = [
    { label: "Pets", href: "/pets" },
    { label: "Shop", href: "/products" },
    { label: "Grooming", href: "/grooming" },
    { label: "Community", href: "/community" },
    { label: "Blog", href: "/blog" },
];

export default function Navbar({ siteData }: { siteData: any }) {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    height: "68px",
                    background: scrolled
                        ? "rgba(12,10,8,0.95)"
                        : "rgba(12,10,8,0.85)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(255,255,255,0.04)",
                }}
            >
                <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl">🐾</span>
                        <span
                            className="text-xl tracking-wide uppercase"
                            style={{
                                fontFamily: "var(--nk-font-display)",
                                fontWeight: 800,
                                color: "var(--cream-100)",
                            }}
                        >
                            {siteData?.site_name || "NAAZ COOL"}
                        </span>
                    </Link>

                    {/* Center Nav — Desktop */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm tracking-wide transition-colors duration-200 hover:opacity-100"
                                style={{
                                    fontFamily: "var(--nk-font-body)",
                                    fontWeight: 400,
                                    color: "var(--cream-400)",
                                    opacity: 0.7,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--cream-100)";
                                    e.currentTarget.style.opacity = "1";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--cream-400)";
                                    e.currentTarget.style.opacity = "0.7";
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right — Icons + CTA */}
                    <div className="flex items-center gap-4">
                        <button
                            className="hidden text-cream-400 transition-colors hover:text-cream-100 sm:block"
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>
                        <button
                            className="hidden text-cream-400 transition-colors hover:text-cream-100 sm:block"
                            aria-label="Wishlist"
                        >
                            <Heart size={20} />
                        </button>
                        <button
                            className="relative text-cream-400 transition-colors hover:text-cream-100"
                            aria-label="Cart"
                        >
                            <ShoppingBag size={20} />
                            <span
                                className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold text-white"
                                style={{ background: "var(--terra-500)" }}
                            >
                                3
                            </span>
                        </button>

                        {/* Book Now CTA — Desktop */}
                        <Link
                            href="/booking"
                            className="ml-2 hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 lg:block"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                background: "var(--terra-500)",
                                boxShadow: "var(--shadow-terra)",
                            }}
                        >
                            Book Now →
                        </Link>

                        {/* Hamburger — Mobile */}
                        <button
                            className="text-cream-100 lg:hidden"
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </>
    );
}
