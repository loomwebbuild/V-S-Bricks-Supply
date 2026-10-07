'use client';

import {Phone, MessageSquare, Instagram, MapPin, Package, Clock, ShieldCheck, ArrowUpRight} from 'lucide-react';

export default function FinalCTAAndFooter() {
  const whatsappUrl =
    'https://wa.me/919606948371?text=Hello%20VS%20Bricks%20Supply,%20I%20need%20bricks%20for%20my%20build%20in%20Telangana.%20Please%20provide%20quote%20at%20₹9/brick.';

  return (
    <footer id="contact" className="relative w-full bg-[#12100E] text-[#FAF8F5] overflow-hidden">
      
      {/* Huge CTA Section */}
      <div className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-neutral-800/80 bg-gradient-to-b from-[#181614] to-[#12100E]">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-4 font-semibold">
            <span>VS Bricks Supply</span>
            <span aria-hidden="true">·</span>
            <span>Just ₹9 Per Brick</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-8 text-balance">
            Need bricks for your <span className="text-[#B83824] italic font-normal">build</span>?
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl font-sans mb-10 leading-relaxed">
            Get premium quality <strong>PVC, RBS, and VBS</strong> red clay bricks with zero breakage and uncompromised quantity delivered anywhere in Telangana.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-[#B83824] hover:bg-[#982B1B] rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Us (Just ₹9)</span>
            </a>

            <a
              href="tel:9606948371"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5 text-[#B83824]" />
              <span>Call 9606948371</span>
            </a>
          </div>

          {/* Core Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B83824]" />
              <span>No breakage claim</span>
            </div>
            <span className="text-neutral-700">·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B83824]" />
              <span>No compromise in quality and quantity</span>
            </div>
            <span className="text-neutral-700">·</span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-neutral-300">Just ₹9 Only / Brick</span>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Business Details & Specification Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-neutral-800/80">
          
          {/* Column 1: Brand & Contact */}
          <div>
            <div className="font-display text-xl font-bold uppercase tracking-tight text-white mb-2">
              VS Bricks Supply
            </div>
            <p className="text-xs font-semibold text-[#B83824] mb-3">
              Stronger Walls | Brighter Futures
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Direct supplier of premium kiln-fired red clay bricks for construction projects across Telangana.
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono">
              <a
                href="tel:9606948371"
                className="text-neutral-300 hover:text-[#B83824] transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B83824]" />
                <span>+91 9606948371</span>
              </a>
              <a
                href="https://instagram.com/karimnagar_red_bricks__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-[#B83824] transition-colors flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5 text-[#B83824]" />
                <span>@karimnagar_red_bricks__</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Column 2: Delivery & Service Area */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B83824]" />
              <span>Service Area & Logistics</span>
            </div>
            <ul className="text-xs text-neutral-400 space-y-2">
              <li>
                <span className="text-neutral-300 block font-medium">Delivery Coverage:</span>
                <span className="text-white font-medium">Supply in all over Telangana</span>
              </li>
              <li>
                <span className="text-neutral-300 block font-medium">Dispatch:</span>
                <span>Direct from Kiln Yard Depot</span>
              </li>
              <li>
                <a
                  href="/process"
                  className="text-[#B83824] hover:underline font-medium inline-flex items-center gap-1 mt-1"
                >
                  View 4-Step Dispatch Process →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specifications & Orders */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Package className="w-4 h-4 text-[#B83824]" />
              <span>Quick Links</span>
            </div>
            <ul className="text-xs text-neutral-400 space-y-2 font-sans">
              <li>
                <a href="/products" className="hover:text-white transition-colors">
                  PVC / RBS / VBS Products
                </a>
              </li>
              <li>
                <a href="/calculator" className="hover:text-white transition-colors">
                  Interactive Price Calculator
                </a>
              </li>
              <li>
                <a href="/quality" className="hover:text-white transition-colors">
                  Quality Standards & Firing
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-white transition-colors">
                  Brickyard Photo Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact & Telangana Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Profile & Verification */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B83824]" />
              <span>Customer Promise</span>
            </div>
            <ul className="text-xs text-neutral-400 space-y-2">
              <li>
                <span className="text-neutral-300 block font-medium">Motto:</span>
                <span>Build Today | Last for Tomorrow</span>
              </li>
              <li>
                <span className="text-neutral-300 block font-medium">Core Guarantees:</span>
                <span>No Breakage · Zero Shortage Guarantee</span>
              </li>
              <li>
                <span className="text-neutral-300 block font-medium">Instant Booking:</span>
                <span>Call or WhatsApp: 9606948371</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} VS Bricks Supply. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Just ₹9 Only / brick</span>
            <span>·</span>
            <span>Supply in All Over Telangana</span>
            <span>·</span>
            <a
              href="https://instagram.com/karimnagar_red_bricks__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Instagram @karimnagar_red_bricks__
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

