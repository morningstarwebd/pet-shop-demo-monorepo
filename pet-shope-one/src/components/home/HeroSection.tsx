"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MarqueeTicker from "@/components/layout/MarqueeTicker";

const heroSlides = [
    {
        image: "/images/heroes/hero-1.png",
        breed: "Golden Retriever",
    },
    {
        image: "/images/heroes/hero-2.png",
        breed: "Siberian Husky",
    },
    {
        image: "/images/heroes/hero-3.png",
        breed: "French Bulldog",
    },
];

export default function HeroSection({ siteData }: { siteData: any }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            setIsTransitioning(false);
        }, 600);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <>
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.breed}
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{
                            opacity: currentSlide === index ? 1 : 0,
                            zIndex: currentSlide === index ? 1 : 0,
                        }}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.breed}
                            fill
                            priority={index === 0}
                            className="object-cover object-center"
                            style={{
                                transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
                                transition: "transform 8s ease-out",
                            }}
                        />
                    </div>
                ))}

                {/* Dark Overlay */}
                <div
                    className="absolute inset-0 z-[2]"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(12,10,8,0.95) 0%, rgba(12,10,8,0.5) 40%, rgba(12,10,8,0.3) 100%)",
                    }}
                />

                {/* Floating Breed Tag */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isTransitioning ? 0 : 1, y: isTransitioning ? -20 : 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute right-8 top-24 z-[3] hidden md:block"
                >
                    <div
                        className="rounded-lg px-5 py-2.5"
                        style={{
                            background: "rgba(255,255,255,0.08)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        <span
                            className="text-sm"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                fontWeight: 500,
                                color: "var(--gold-400)",
                            }}
                        >
                            {heroSlides[currentSlide].breed}
                        </span>
                    </div>
                </motion.div>

                {/* Hero Content — Bottom Left */}
                <div className="absolute mx-auto bottom-16 left-0 right-0 z-[3] w-full max-w-7xl px-6 md:bottom-20 md:px-12 lg:px-16">
                    <div>
                        <h1
                            className="leading-[0.95] whitespace-pre-line"
                            style={{
                                fontFamily: "var(--nk-font-display)",
                                fontWeight: 800,
                                color: "var(--cream-100)",
                                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                            }}
                        >
                            {siteData?.hero_title || "WHERE EVERY PET\nFINDS THEIR\nFOREVER HOME."}
                        </h1>

                        <p
                            className="mt-6 max-w-md text-base md:text-lg whitespace-pre-line"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                fontWeight: 300,
                                color: "var(--cream-400)",
                                lineHeight: 1.7,
                            }}
                        >
                            {siteData?.hero_subtitle || "The most curated pet experience in India.\nCertified. Kool. Yours."}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/pets"
                                className="rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    fontFamily: "var(--nk-font-body)",
                                    background: "var(--terra-500)",
                                    boxShadow: "var(--shadow-terra)",
                                }}
                            >
                                Explore Pets →
                            </Link>
                            <Link
                                href="/grooming"
                                className="rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    fontFamily: "var(--nk-font-body)",
                                    background: "rgba(250,246,240,0.08)",
                                    color: "var(--cream-100)",
                                    border: "1px solid rgba(250,246,240,0.15)",
                                }}
                            >
                                Book Grooming
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 z-[3] flex -translate-x-1/2 gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className="h-1.5 rounded-full transition-all duration-300"
                            style={{
                                width: currentSlide === index ? "32px" : "12px",
                                background:
                                    currentSlide === index
                                        ? "var(--terra-500)"
                                        : "rgba(255,255,255,0.3)",
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 right-8 z-[3] hidden md:block">
                    <div className="animate-scroll-bounce flex flex-col items-center gap-2">
                        <span
                            className="text-xs uppercase tracking-widest"
                            style={{
                                fontFamily: "var(--nk-font-body)",
                                color: "var(--cream-600)",
                                writingMode: "vertical-rl",
                            }}
                        >
                            Scroll
                        </span>
                        <div
                            className="h-8 w-px"
                            style={{ background: "var(--cream-600)" }}
                        />
                    </div>
                </div>
            </section>

            {/* Marquee Ticker — directly below hero */}
            <MarqueeTicker />
        </>
    );
}
