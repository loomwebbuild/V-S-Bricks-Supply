'use client';

import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ShieldAlert, Layers, CheckCircle, IndianRupee} from 'lucide-react';

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.why-card');
        gsap.fromTo(
          cards,
          {y: 40, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: ShieldAlert,
      title: 'No Breakage',
      tagline: 'Tough & Transit-Proof',
      description:
        'High compressive density prevents crumbling, edge cracking, or corner breakage during transit, loading, and on-site stacking.',
    },
    {
      icon: Layers,
      title: 'Consistent Quality',
      tagline: 'Even Firing & Sharp Edges',
      description:
        'Uniform dimensioning, deep iron-red clay coloration, and consistent mortar grip for faster, straighter masonry wall construction.',
    },
    {
      icon: CheckCircle,
      title: 'Full Quantity Delivered',
      tagline: 'Zero Shortage Guarantee',
      description:
        'Complete transparency in billing and delivery. What you order is exactly what arrives at your construction site, count-verified.',
    },
    {
      icon: IndianRupee,
      title: 'Fair Price at ₹9',
      tagline: 'Direct Supplier Rate',
      description:
        'Direct factory pricing of ₹9 per brick without middleman markup or inflated commission fees. Unbeatable value for projects.',
    },
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#181614] text-[#FAF8F5] overflow-hidden dark-brick-pattern border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-3">
            <span>VS Bricks Supply Standard</span>
            <span aria-hidden="true">·</span>
            <span>Why Builders Choose Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#FAF8F5] leading-none mb-6 text-balance">
            Engineered for <span className="text-[#B83824] italic font-normal">strength</span>. Priced for scale.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Reliable brick supply tailored for residential, commercial, and infrastructure contractors across Telangana.
          </p>
        </div>

        {/* 4 Column Feature Cards with Staggered Fade Up */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="why-card flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#221F1D] border border-neutral-800 hover:border-[#B83824]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#B83824]/10 border border-[#B83824]/30 flex items-center justify-center text-[#B83824] group-hover:bg-[#B83824] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-medium text-[#B83824] mb-4">
                    {item.tagline}
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
                  <span>Guaranteed</span>
                  <span className="font-mono text-neutral-400">₹9 / brick</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="mt-16 p-6 rounded-2xl bg-[#12100E] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col">
            <span className="font-display text-base font-bold uppercase text-white">
              Ready to verify brick quality in person?
            </span>
            <span className="text-xs text-neutral-400">
              Direct yard dispatch & prompt WhatsApp coordination available daily.
            </span>
          </div>
          <a
            href="https://wa.me/919606948371?text=Hello%20Karimnagar%20Red%20Bricks,%20I%20would%20like%20to%20know%20more%20about%20your%20quality%20and%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#B83824] hover:bg-[#982B1B] rounded-lg transition-colors whitespace-nowrap"
          >
            Chat with Supplier
          </a>
        </div>
      </div>
    </section>
  );
}
