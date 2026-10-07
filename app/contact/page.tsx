'use client';

import {useState} from 'react';
import {Phone, MessageSquare, Instagram, MapPin, Send, CheckCircle2, Clock, ShieldCheck} from 'lucide-react';
import StickyNav from '@/components/StickyNav';
import FinalCTAAndFooter from '@/components/FinalCTAAndFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LenisSmoothScroll from '@/components/LenisSmoothScroll';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brickType: 'PVC Red Bricks',
    quantity: '3000',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate WhatsApp direct lead message
    const msg = `Hello VS Bricks Supply,\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Brick Type:* ${formData.brickType} (₹9/brick)\n*Quantity:* ${formData.quantity} bricks\n*Site Location (Telangana):* ${formData.location || 'Telangana'}\n*Notes:* ${formData.message || 'Please provide delivery quote'}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/919606948371?text=${encodeURIComponent(msg)}`, '_blank');
    }, 600);
  };

  return (
    <LenisSmoothScroll>
      <div className="relative min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#B83824] selection:text-white">
        <StickyNav />

        {/* Hero Header */}
        <section className="pt-36 pb-16 bg-[#181614] text-white border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-3 font-semibold">
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Supplier</span>
                <span aria-hidden="true">·</span>
                <span>Fast Telangana Dispatch</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
                Get your brick quote.
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                Ready to order for your construction project? Reach out directly via WhatsApp, call us at <strong>9606948371</strong>, or fill out the quick inquiry form below.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="flex-1 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Contact Channels */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B83824] font-bold block mb-2">
                    Direct Lines
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#1A1816] mb-6">
                    Connect with VS Bricks Supply
                  </h2>

                  <div className="space-y-4 text-sm font-sans">
                    <a
                      href="https://wa.me/919606948371?text=Hello%20VS%20Bricks%20Supply,%20I%20would%20like%20to%20order%20red%20bricks%20at%20₹9/brick."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                        <MessageSquare className="w-6 h-6 fill-white" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#25D366] uppercase block">
                          Instant WhatsApp Chat
                        </span>
                        <span className="font-mono text-base font-bold text-neutral-900 group-hover:text-[#25D366] transition-colors">
                          +91 9606948371
                        </span>
                      </div>
                    </a>

                    <a
                      href="tel:9606948371"
                      className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#181614] text-white flex items-center justify-center shrink-0 shadow-md">
                        <Phone className="w-6 h-6 text-[#B83824]" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">
                          Direct Phone Call
                        </span>
                        <span className="font-mono text-base font-bold text-neutral-900 group-hover:text-[#B83824] transition-colors">
                          9606948371
                        </span>
                      </div>
                    </a>

                    <a
                      href="https://instagram.com/karimnagar_red_bricks__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Instagram className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">
                          Official Instagram
                        </span>
                        <span className="font-mono text-sm font-bold text-neutral-900 group-hover:text-purple-600 transition-colors">
                          @karimnagar_red_bricks__
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Operational Notes */}
                  <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3 text-xs text-neutral-600 font-sans">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#B83824]" />
                      <span>Supply Coverage: All over Telangana</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#B83824]" />
                      <span>Response Time: Immediate within business hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B83824]" />
                      <span>Zero Breakage & Exact Quantity Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Instant WhatsApp Lead Form */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/90 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B83824] font-bold block mb-2">
                  Quick Quote Request
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#1A1816] mb-2">
                  Send Your Project Details
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mb-8 font-sans">
                  Fill in your requirements to generate a pre-formatted WhatsApp quotation at <strong>Just ₹9 Only</strong> per brick.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
                    <h3 className="font-display text-xl font-bold text-emerald-900 uppercase">
                      Redirecting to WhatsApp...
                    </h3>
                    <p className="text-xs text-emerald-700 mt-2 font-sans max-w-sm">
                      Your quote summary is ready. If WhatsApp does not open automatically, tap below:
                    </p>
                    <a
                      href="https://wa.me/919606948371"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-md"
                    >
                      Open WhatsApp Directly
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold text-neutral-700 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Ramesh Reddy"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:border-[#B83824] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase font-bold text-neutral-700 mb-1.5">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:border-[#B83824] focus:outline-none transition-colors font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold text-neutral-700 mb-1.5">
                          Select Brick Variety (₹9 / brick)
                        </label>
                        <select
                          value={formData.brickType}
                          onChange={(e) => setFormData({...formData, brickType: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:border-[#B83824] focus:outline-none transition-colors"
                        >
                          <option value="PVC Red Bricks">PVC Red Bricks (Stamp: PVC)</option>
                          <option value="RBS Red Bricks">RBS Red Bricks (Stamp: RBS)</option>
                          <option value="VBS Red Bricks">VBS Red Bricks (Stamp: VBS)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase font-bold text-neutral-700 mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          type="number"
                          min={100}
                          step={100}
                          value={formData.quantity}
                          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                          placeholder="e.g. 3000"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:border-[#B83824] focus:outline-none transition-colors font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-neutral-700 mb-1.5">
                        Site Location / District (Telangana)
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="e.g. Karimnagar, Hyderabad, Warangal, etc."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:border-[#B83824] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-neutral-700 mb-1.5">
                        Additional Project Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="e.g. Timeline for delivery, road access for large trucks, etc."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:border-[#B83824] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#B83824] hover:bg-[#982B1B] text-white font-bold uppercase text-xs tracking-wider transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Generate Quote on WhatsApp (Just ₹9)</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </main>

        <FinalCTAAndFooter />
        <FloatingWhatsApp />
      </div>
    </LenisSmoothScroll>
  );
}
