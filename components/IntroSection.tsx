'use client';

import {useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ShieldCheck, Sparkles, Scale} from 'lucide-react';
import {IMAGES} from '@/lib/images';

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Parallax for image 1 (slower scrub, ~10% travel)
      if (img1Ref.current && !prefersReducedMotion) {
        gsap.fromTo(
          img1Ref.current,
          {yPercent: -8},
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );
      }

      // Parallax for image 2 (faster scrub, ~14% travel)
      if (img2Ref.current && !prefersReducedMotion) {
        gsap.fromTo(
          img2Ref.current,
          {yPercent: -14},
          {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }

      // Staggered text fade-up
      if (textRef.current) {
        const items = textRef.current.querySelectorAll('.intro-fade');
        gsap.fromTo(
          items,
          {y: 40, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1816] overflow-hidden border-b border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Two Parallax Images */}
          <div className="lg:col-span-6 relative flex flex-col sm:flex-row gap-6 items-center justify-center">
            {/* Primary Stack Image */}
            <div
              ref={img1Ref}
              className="relative w-full sm:w-[58%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-neutral-300/80 bg-neutral-200 will-change-transform"
            >
              <Image
                src={IMAGES.kilnStack}
                alt="Neat stacks of authentic Karimnagar red bricks"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Direct Kiln Stacks
                </span>
                <p className="text-sm font-semibold font-display">
                  Evenly Fired · Uniform Density
                </p>
              </div>
            </div>

            {/* Secondary Macro Quality Image with offset & different parallax */}
            <div
              ref={img2Ref}
              className="relative w-full sm:w-[48%] aspect-[4/5] sm:-mt-12 rounded-2xl overflow-hidden shadow-2xl border border-neutral-300/80 bg-neutral-200 will-change-transform"
            >
              <Image
                src={IMAGES.qualityMacro}
                alt="Karimnagar red brick macro composition showing zero cracks"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Solid Composition
                </span>
                <p className="text-sm font-semibold font-display">
                  No Breakage · Pure Red Clay
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Details */}
          <div ref={textRef} className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed Section Tag */}
            <div className="intro-fade flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-4">
              <span>VS Bricks Supply</span>
              <span aria-hidden="true">·</span>
              <span>All Over Telangana</span>
            </div>

            {/* Heavy Display Headline with Accented Word */}
            <h2 className="intro-fade font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#1A1816] leading-[1.05] mb-6 text-balance">
              No compromise in <span className="text-[#B83824] italic font-normal">quality</span> and quantity.
            </h2>

            {/* Prose Body */}
            <p className="intro-fade text-base sm:text-lg text-neutral-700 leading-relaxed font-sans mb-8">
              At <strong>VS Bricks Supply</strong>, our promise is absolute. Every consignment of our PVC, RBS, and VBS red clay bricks is kiln-baked to deliver maximum compressive strength, clean edges, and weather resilience. You receive full verified counts with zero breakage across Telangana.
            </p>

            {/* Key Pillars */}
            <div className="intro-fade grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-neutral-200/80 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#B83824] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold uppercase font-display text-[#1A1816]">
                    Zero Breakage
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-normal">
                    Careful handling from kiln loading to on-site unloading.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-neutral-200/80 shadow-sm">
                <Scale className="w-6 h-6 text-[#B83824] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold uppercase font-display text-[#1A1816]">
                    Full Quantity Count
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-normal">
                    Exact bricks dispatched and accounted for at ₹9 each.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
