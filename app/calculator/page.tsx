import type {Metadata} from 'next';
import StickyNav from '@/components/StickyNav';
import PriceCalculator from '@/components/PriceCalculator';
import FinalCTAAndFooter from '@/components/FinalCTAAndFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LenisSmoothScroll from '@/components/LenisSmoothScroll';
import {Calculator, ShieldAlert, CheckCircle, IndianRupee} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brick Price & Quantity Calculator (₹9 / Brick) | VS Bricks Supply',
  description:
    'Calculate total brick requirements and costs at ₹9 per brick for PVC, RBS, and VBS red clay bricks. Instant WhatsApp quotation across all districts of Telangana.',
};

export default function CalculatorPage() {
  return (
    <LenisSmoothScroll>
      <div className="relative min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#B83824] selection:text-white">
        <StickyNav />

        {/* Hero Header */}
        <section className="pt-36 pb-14 bg-[#181614] text-white border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-3 font-semibold">
                <Calculator className="w-3.5 h-3.5" />
                <span>Estimator Tool</span>
                <span aria-hidden="true">·</span>
                <span>Just ₹9 / Brick</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
                Calculate your brick budget.
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                Get an instant estimate for your residential or commercial project. Select your brick variety (PVC / RBS / VBS) and order directly via WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Main Calculator */}
        <main className="flex-1">
          <PriceCalculator />

          {/* Construction Guidance Section */}
          <section className="py-16 bg-[#181614] text-white border-b border-neutral-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-6 text-center">
                Brick Estimation Guidelines for Builders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="p-6 rounded-2xl bg-[#221F1D] border border-neutral-800">
                  <span className="font-mono text-[#B83824] font-bold block mb-1">
                    9-inch Thick Walls
                  </span>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    Double Brick Masonry
                  </h3>
                  <p className="text-neutral-400 leading-relaxed font-sans">
                    Requires approximately <strong>10 to 11 bricks</strong> per square foot of wall surface area (including mortar joints).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#221F1D] border border-neutral-800">
                  <span className="font-mono text-[#B83824] font-bold block mb-1">
                    4.5-inch Partition Walls
                  </span>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    Single Brick Partition
                  </h3>
                  <p className="text-neutral-400 leading-relaxed font-sans">
                    Requires approximately <strong>5 to 5.5 bricks</strong> per square foot of wall surface area.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#221F1D] border border-neutral-800">
                  <span className="font-mono text-[#B83824] font-bold block mb-1">
                    0% Wastage Standard
                  </span>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    Zero Breakage Guarantee
                  </h3>
                  <p className="text-neutral-400 leading-relaxed font-sans">
                    Unlike ordinary suppliers where 5–10% breaks during transit, <strong>VS Bricks Supply</strong> guarantees intact, full-count delivery.
                  </p>
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
