import type {Metadata} from 'next';
import StickyNav from '@/components/StickyNav';
import GallerySection from '@/components/GallerySection';
import FinalCTAAndFooter from '@/components/FinalCTAAndFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LenisSmoothScroll from '@/components/LenisSmoothScroll';
import {Eye} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brickyard & Masonry Photo Gallery | VS Bricks Supply',
  description:
    'Browse macro photographs of PVC, RBS, and VBS red clay bricks, kiln yards, transport dispatch, and active construction masonry walls.',
};

export default function GalleryPage() {
  return (
    <LenisSmoothScroll>
      <div className="relative min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#B83824] selection:text-white">
        <StickyNav />

        {/* Hero Header */}
        <section className="pt-36 pb-16 bg-[#181614] text-white border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-3 font-semibold">
                <Eye className="w-3.5 h-3.5" />
                <span>Visual Inventory</span>
                <span aria-hidden="true">·</span>
                <span>Kiln & Site Gallery</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
                Brick craftsmanship in detail.
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                Explore macro details of our red clay bricks, kiln curing stacks, commercial transport trucks, and completed wall masonry across Telangana.
              </p>
            </div>
          </div>
        </section>

        <main className="flex-1">
          <GallerySection />
        </main>

        <FinalCTAAndFooter />
        <FloatingWhatsApp />
      </div>
    </LenisSmoothScroll>
  );
}
