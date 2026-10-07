'use client';

import {useEffect, useRef} from 'react';
import Image from 'next/image';
import {Phone, MessageSquare, ChevronDown, CheckCircle2} from 'lucide-react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {IMAGES} from '@/lib/images';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Background slow scale down on scroll
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {scale: 1.15},
          {
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      // Staggered reveal for headline, price badge, claims, CTAs
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll('.hero-animate');
        gsap.fromTo(
          elements,
          {y: 40, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            delay: 0.2,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-white overflow-hidden bg-[#181614] pt-28 pb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image with slow scale-down */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform pointer-events-none"
      >
        <Image
          src={IMAGES.hero}
          alt="Karimnagar Red Bricks macro texture and clean masonry"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/70 to-[#181614]/40" />
      </div>

      {/* Main Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl mx-auto my-auto flex flex-col items-center text-center pt-8 sm:pt-14"
      >
        {/* Price Badge */}
        <div className="hero-animate mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#B83824] text-white border border-[#D44A32] shadow-xl">
          <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight">
            Just ₹9 Only
          </span>
          <span className="text-xs uppercase tracking-wider font-semibold text-white/90">
            / Brick · All Over Telangana Supply
          </span>
        </div>

        {/* Heavy Condensed Sans Headline with Accented Word */}
        <h1 className="hero-animate font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-[0.95] max-w-4xl text-balance mb-6">
          Stronger walls.{' '}
          <span className="text-[#B83824] italic font-normal tracking-normal">
            Brighter
          </span>{' '}
          futures.
        </h1>

        {/* Value Proposition Description */}
        <p className="hero-animate text-base sm:text-xl text-neutral-300 max-w-2xl font-sans mb-8 leading-relaxed">
          <strong>VS Bricks Supply</strong> delivers premium kiln-fired red clay construction bricks (PVC, RBS, VBS) across all of Telangana. Build today, last for tomorrow.
        </p>

        {/* Authorized Claims Metadata (Unboxed text with dots) */}
        <div className="hero-animate flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-medium text-neutral-300 mb-10 pb-2 border-b border-neutral-700/50">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B83824]" />
            <span>PVC · RBS · VBS Varieties</span>
          </div>
          <span className="text-neutral-500" aria-hidden="true">
            ·
          </span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B83824]" />
            <span>No breakage</span>
          </div>
          <span className="text-neutral-500" aria-hidden="true">
            ·
          </span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B83824]" />
            <span>Supply all over Telangana</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="hero-animate flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/919606948371?text=Hello%20VS%20Bricks%20Supply,%20I%20would%20like%20to%20order%20red%20bricks%20at%20₹9/brick.%20Please%20provide%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-[#B83824] hover:bg-[#982B1B] rounded-xl shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-4 focus:ring-[#B83824]/40"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Order on WhatsApp (Just ₹9)</span>
          </a>

          <a
            href="tel:9606948371"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-[#B83824]" />
            <span>Call 9606948371</span>
          </a>
        </div>
      </div>

      {/* Bobbing Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center mt-12 mb-2 text-neutral-400">
        <a
          href="#quality"
          className="flex flex-col items-center gap-1 group text-xs uppercase tracking-widest hover:text-white transition-colors"
        >
          <span className="font-mono text-[11px]">Scroll to explore</span>
          <div className="animate-bobbing p-1 rounded-full bg-neutral-900/60 border border-neutral-700 group-hover:border-[#B83824] transition-colors">
            <ChevronDown className="w-4 h-4 text-[#B83824]" />
          </div>
        </a>
      </div>
    </section>
  );
}
