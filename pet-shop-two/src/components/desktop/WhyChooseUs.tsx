'use client';
import { useEffect, useRef } from 'react';

const features = [
    { icon: '🏥', title: 'Vet Certified', desc: 'All pets come with health certificates from registered veterinarians' },
    { icon: '💉', title: 'Fully Vaccinated', desc: 'Complete vaccination courses administered before delivery' },
    { icon: '🚚', title: 'Safe Delivery', desc: 'Temperature-controlled delivery to your doorstep with care' },
    { icon: '🔄', title: '7-Day Health Guarantee', desc: 'Full support if any health issues arise within the first week' },
    { icon: '📋', title: 'Breed Certification', desc: 'Authentic breed documentation and pedigree papers' },
    { icon: '💬', title: 'Lifetime Support', desc: 'Free consultations on diet, training, and care for life' },
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal')?.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section bg-cream" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14 reveal">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                        Why Us
                    </span>
                    <h2 className="section-title">
                        Why <span className="gradient-text">Happy Pets</span>?
                    </h2>
                    <p className="section-subtitle mx-auto" style={{ lineHeight: 1.7 }}>
                        We go the extra mile to ensure every pet and pet parent is happy
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="reveal bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group cursor-default"
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                                style={{ position: 'relative', left: '2px', top: '4px' }}>
                                {f.icon}
                            </div>
                            <h3 className="font-heading text-lg font-bold text-charcoal mb-2"
                                style={{ transform: 'translate(11.2px, 0px)', position: 'relative', left: '-6px', top: '1px' }}>{f.title}</h3>
                            <p className="text-muted text-sm leading-relaxed"
                                style={{ transform: 'translate(12px, 0px)', position: 'relative', left: '-7px', top: '-1px' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
