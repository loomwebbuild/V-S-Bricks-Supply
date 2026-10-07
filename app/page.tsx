import Preloader from '@/components/Preloader';
import LenisSmoothScroll from '@/components/LenisSmoothScroll';
import StickyNav from '@/components/StickyNav';
import HeroSection from '@/components/HeroSection';
import ProductRangeSection from '@/components/ProductRangeSection';
import IntroSection from '@/components/IntroSection';
import WhyUsSection from '@/components/WhyUsSection';
import PriceCalculator from '@/components/PriceCalculator';
import ProcessSection from '@/components/ProcessSection';
import GallerySection from '@/components/GallerySection';
import FinalCTAAndFooter from '@/components/FinalCTAAndFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <Preloader />
      <LenisSmoothScroll>
        <div className="relative min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#B83824] selection:text-white">
          <StickyNav />
          <main className="flex-1">
            <HeroSection />
            <ProductRangeSection />
            <IntroSection />
            <WhyUsSection />
            <PriceCalculator />
            <ProcessSection />
            <GallerySection />
          </main>
          <FinalCTAAndFooter />
          <FloatingWhatsApp />
        </div>
      </LenisSmoothScroll>
    </>
  );
}

