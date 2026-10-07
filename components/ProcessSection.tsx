'use client';

import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {PhoneCall, CheckSquare, Truck, Building2, ArrowRight} from 'lucide-react';
import {IMAGES} from '@/lib/images';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Enquire',
      subtitle: 'Instant Consultation',
      icon: PhoneCall,
      description:
        'Connect directly via WhatsApp or call 9606948371. Share your project site address in Telangana and estimated brick count for an immediate quotation.',
      highlight: 'Direct call or WhatsApp response',
      image: IMAGES.qualityMacro,
    },
    {
      id: 2,
      number: '02',
      title: 'Confirm Quantity',
      subtitle: 'Transparent Pricing at ₹9',
      icon: CheckSquare,
      description:
        'Lock in your requirement for PVC, RBS, or VBS bricks at a flat ₹9 per brick. We verify count requirements and provide a clear delivery schedule across Telangana.',
      highlight: 'Full quantity promised · Just ₹9 Only',
      image: IMAGES.kilnStack,
    },
    {
      id: 3,
      number: '03',
      title: 'Dispatch',
      subtitle: 'Careful Kiln Loading',
      icon: Truck,
      description:
        'Bricks are systematically loaded onto transport trucks directly from our kiln yards. Strict handling protocols ensure no transit fractures or edge chipping.',
      highlight: 'Zero breakage loading policy',
      image: IMAGES.dispatchLoading,
    },
    {
      id: 4,
      number: '04',
      title: 'Delivery',
      subtitle: 'On-Site Verification',
      icon: Building2,
      description:
        'Trucks arrive promptly at your construction site in Telangana. Safe unloading and on-site count inspection ensure you receive 100% of the ordered bricks.',
      highlight: '100% count verified upon arrival',
      image: IMAGES.constructionSite,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Pinning the process section for step-by-step scroll progression
      if (containerRef.current && pinTargetRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2000',
          pin: pinTargetRef.current,
          scrub: 0.5,
          onUpdate: (self) => {
            const stepIndex = Math.min(
              steps.length - 1,
              Math.floor(self.progress * steps.length)
            );
            setActiveStep(stepIndex);
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full bg-[#181614] text-[#FAF8F5] border-b border-neutral-800"
    >
      <div
        ref={pinTargetRef}
        className="w-full min-h-screen py-16 sm:py-24 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 border-b border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-2 font-semibold">
              <span>Ordering Workflow</span>
              <span aria-hidden="true">·</span>
              <span>4 Simple Steps</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
              How we supply your build.
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 font-mono text-xs text-neutral-400">
            Step <span className="text-[#B83824] font-bold text-base">0{activeStep + 1}</span> of 04
          </div>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#221F1D] border-[#B83824] shadow-md'
                    : 'bg-[#12100E] border-neutral-800 text-neutral-500 hover:text-neutral-300 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#B83824]' : 'text-neutral-500'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#B83824]' : 'bg-neutral-800'
                    }`}
                  />
                </div>
                <div
                  className={`font-display text-sm sm:text-base font-bold uppercase tracking-tight ${
                    isActive ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#221F1D] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Left Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B83824]/20 border border-[#B83824]/40 text-[#B83824] text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
                <span>Step {steps[activeStep].number}</span>
                <span>·</span>
                <span>{steps[activeStep].subtitle}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans mb-6">
                {steps[activeStep].description}
              </p>

              <div className="p-4 rounded-xl bg-[#181614] border border-neutral-800 flex items-center gap-3 text-xs sm:text-sm font-medium text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-[#B83824]" />
                <span>{steps[activeStep].highlight}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919606948371?text=Hello%20Karimnagar%20Red%20Bricks,%20I%20would%20like%20to%20start%20an%20order%20at%20₹9/brick."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#B83824] hover:bg-[#982B1B] rounded-lg transition-colors shadow-sm"
              >
                <span>Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:9606948371"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 rounded-lg transition-colors"
              >
                <span>Call 9606948371</span>
              </a>
            </div>
          </div>

          {/* Right Visual Frame */}
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-xl">
            <Image
              src={steps[activeStep].image}
              alt={`Step ${steps[activeStep].number} - ${steps[activeStep].title}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 font-mono">
              <span className="uppercase tracking-wider">Karimnagar Kiln Dispatch</span>
              <span className="text-[#B83824] font-bold">₹9 / Brick</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
