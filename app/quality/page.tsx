import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {ShieldCheck, Scale, CheckCircle2, Flame, Award, Truck, MessageSquare, Phone} from 'lucide-react';
import StickyNav from '@/components/StickyNav';
import IntroSection from '@/components/IntroSection';
import WhyUsSection from '@/components/WhyUsSection';
import FinalCTAAndFooter from '@/components/FinalCTAAndFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LenisSmoothScroll from '@/components/LenisSmoothScroll';
import {IMAGES} from '@/lib/images';

export const metadata: Metadata = {
  title: 'Uncompromised Quality & Zero Breakage Promise | VS Bricks Supply',
  description:
    'Learn how VS Bricks Supply guarantees zero breakage, full quantity delivery, and high compressive strength with kiln-fired red clay bricks at ₹9 each.',
};

export default function QualityPage() {
  const qualityPillars = [
    {
      icon: Flame,
      title: 'High-Temperature Kiln Firing',
      description:
        'Every brick is cured in continuous kilns with controlled heat circulation, turning high-iron red soil into vitrified ceramic masonry blocks that do not crack under weather swings.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Transit Breakage Claim',
      description:
        'We enforce strict stacking protocols at the kiln yard and during transport, ensuring you do not lose 5–10% of your materials to crumbling or corner chipping.',
    },
    {
      icon: Scale,
      title: '100% Quantity Count Verification',
      description:
        'We believe in absolute honesty. What is billed on the manifest is physically verified upon unloading at your site. Zero short-shipments.',
    },
    {
      icon: Award,
      title: 'Sharp Edges & High Mortar Adhesion',
      description:
        'Crisp rectangular geometry and textured surfaces provide mechanical interlock with cement mortar, reducing plaster coat thicknesses and construction time.',
    },
  ];

  return (
    <LenisSmoothScroll>
      <div className="relative min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#B83824] selection:text-white">
        <StickyNav />

        {/* Hero Header */}
        <section className="pt-36 pb-16 bg-[#181614] text-white border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-3 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Quality Guarantee</span>
                <span aria-hidden="true">·</span>
                <span>No Compromise</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
                Strong bricks. <span className="text-[#B83824] italic font-normal">Zero</span> compromise.
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                Discover the rigorous production, inspection, and delivery standards that make <strong>VS Bricks Supply</strong> the trusted choice for contractors across Telangana.
              </p>
            </div>
          </div>
        </section>

        <main className="flex-1">
          {/* Detailed Intro & Parallax */}
          <IntroSection />

          {/* 4 Pillars of Quality */}
          <section className="py-20 bg-white border-b border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B83824] font-bold">
                  Quality Assurance
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1A1816] mt-1">
                  How we maintain first-grade standards
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {qualityPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-8 rounded-3xl bg-[#FAF8F5] border border-neutral-200/90 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#B83824]/10 flex items-center justify-center text-[#B83824] mb-6">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#1A1816] mb-3">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-neutral-700 leading-relaxed font-sans">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us 4 Cards */}
          <WhyUsSection />
        </main>

        <FinalCTAAndFooter />
        <FloatingWhatsApp />
      </div>
    </LenisSmoothScroll>
  );
}
