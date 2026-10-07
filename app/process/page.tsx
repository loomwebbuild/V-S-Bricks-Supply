import type {Metadata} from 'next';
import Link from 'next/link';
import {Truck, PhoneCall, CheckSquare, Building2, MapPin, MessageSquare, Phone, ArrowRight} from 'lucide-react';
import StickyNav from '@/components/StickyNav';
import ProcessSection from '@/components/ProcessSection';
import FinalCTAAndFooter from '@/components/FinalCTAAndFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LenisSmoothScroll from '@/components/LenisSmoothScroll';

export const metadata: Metadata = {
  title: 'Ordering & Dispatch Process | Fast Delivery in All Over Telangana | VS Bricks Supply',
  description:
    'Step-by-step supply workflow: From initial inquiry and quantity confirmation to kiln dispatch and verified site delivery across Telangana at ₹9 per brick.',
};

export default function ProcessPage() {
  const telanganaDistricts = [
    'Karimnagar',
    'Hyderabad',
    'Warangal',
    'Nizamabad',
    'Khammam',
    'Mahbubnagar',
    'Nalgonda',
    'Medak',
    'Rangareddy',
    'Siddipet',
    'Peddapalli',
    'Jagtial',
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
                <Truck className="w-3.5 h-3.5" />
                <span>Logistics & Ordering</span>
                <span aria-hidden="true">·</span>
                <span>All Over Telangana</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
                How we supply your build.
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                From your initial message on WhatsApp to the final verified brick stack on your site, experience hassle-free dispatch with <strong>VS Bricks Supply</strong>.
              </p>
            </div>
          </div>
        </section>

        <main className="flex-1">
          {/* Interactive Process Section */}
          <ProcessSection />

          {/* Telangana Coverage Grid */}
          <section className="py-20 bg-white border-b border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-2 font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>Statewide Logistics</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1A1816]">
                  Delivering to all districts in Telangana
                </h2>
                <p className="text-neutral-600 text-sm mt-3 font-sans">
                  We coordinate direct kiln-to-site flatbed transport for residential layouts, commercial developments, and private farmhouses.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
                {telanganaDistricts.map((district) => (
                  <div
                    key={district}
                    className="p-3.5 rounded-xl bg-[#FAF8F5] border border-neutral-200 text-center font-display text-sm font-bold uppercase tracking-tight text-neutral-800 hover:border-[#B83824] hover:text-[#B83824] transition-colors"
                  >
                    {district}
                  </div>
                ))}
              </div>

              {/* Callout box */}
              <div className="p-8 rounded-3xl bg-[#181614] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-neutral-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B83824] font-bold">
                    Need Delivery Time Estimate?
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                    Check transport slots for your location
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 font-sans">
                    Share your site location pin via WhatsApp for instant truckload scheduling.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/919606948371?text=Hello%20VS%20Bricks%20Supply,%20I%20want%20to%20check%20delivery%20schedule%20for%20my%20site%20in%20Telangana."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-[#B83824] hover:bg-[#982B1B] text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
                  >
                    Check Delivery on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <FinalCTAAndFooter />
        <FloatingWhatsApp />
      </div>
    </LenisSmoothScroll>
  );
}
