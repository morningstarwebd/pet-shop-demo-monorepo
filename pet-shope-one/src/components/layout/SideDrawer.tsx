"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const drawerLinks = [
    { label: "Home", href: "/" },
    { label: "Pets", href: "/pets" },
    { label: "Shop", href: "/products" },
    { label: "Grooming", href: "/grooming" },
    { label: "Community", href: "/community" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

interface SideDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default function SideDrawer({ open, onClose }: SideDrawerProps) {
    // Lock body scroll when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60]"
                        style={{ background: "rgba(0,0,0,0.7)" }}
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 z-[70] flex h-full w-[300px] flex-col"
                        style={{ background: "var(--ink-900)" }}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between px-6"
                            style={{
                                height: "68px",
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <span
                                className="text-lg"
                                style={{
                                    fontFamily: "var(--nk-font-display)",
                                    fontWeight: 800,
                                    color: "var(--cream-100)",
                                }}
                            >
                                🐾 NAAZ <span style={{ color: "var(--terra-500)" }}>COOL</span>
                            </span>
                            <button
                                onClick={onClose}
                                className="text-cream-400 transition-colors hover:text-cream-100"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="flex-1 px-6 py-8">
                            <div className="flex flex-col gap-1">
                                {drawerLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i + 0.15 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="block rounded-lg px-4 py-3.5 text-base transition-all duration-200"
                                            style={{
                                                fontFamily: "var(--nk-font-body)",
                                                fontWeight: 500,
                                                color: "var(--cream-200)",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background =
                                                    "rgba(212,89,63,0.1)";
                                                e.currentTarget.style.color = "var(--terra-400)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "transparent";
                                                e.currentTarget.style.color = "var(--cream-200)";
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </nav>

                        {/* Bottom CTA */}
                        <div className="px-6 pb-8">
                            <Link
                                href="/booking"
                                onClick={onClose}
                                className="block w-full rounded-lg py-3.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    fontFamily: "var(--nk-font-body)",
                                    background: "var(--terra-500)",
                                    boxShadow: "var(--shadow-terra)",
                                }}
                            >
                                Book Now →
                            </Link>
                            <p
                                className="mt-4 text-center text-xs"
                                style={{ color: "var(--cream-600)" }}
                            >
                                Where cool meets care. 🐾
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
