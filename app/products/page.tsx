import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {Check, MessageSquare, Phone, ShieldCheck, ArrowRight, Layers, Sparkles} from 'lucide-react';
import StickyNav from '@/components/StickyNav';
import FinalCTAAndFooter from '@/components/FinalCTAAndFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LenisSmoothScroll from '@/components/LenisSmoothScroll';
import {IMAGES} from '@/lib/images';

export const metadata: Metadata = {
  title: 'Red Clay Bricks Product Lineup | PVC, RBS, VBS Bricks ₹9 | VS Bricks Supply',
  description:
    'Explore our complete brick catalog: PVC Red Bricks, RBS Bricks, and VBS Bricks at Just ₹9 per brick. Kiln-fired for maximum compressive durability. Delivered across Telangana.',
};

export default function ProductsPage() {
  const products = [
    {
      id: 'pvc',
      name: 'PVC Red Bricks',
      stamp: 'PVC',
      badge: 'Premium Flagship Quality',
      tagline: 'Strong · Durable · Cost Effective',
      image: IMAGES.productPvc,
      description:
        'Our highest-demand red brick formulation with the crisp "PVC" frog stamp. Fired in controlled high-heat chambers using dense Telangana red clay for unmatched load-bearing endurance.',
      specifications: [
        {label: 'Stamp Mark', value: 'PVC (Embossed)'},
        {label: 'Material', value: '100% Iron-Rich Red Clay'},
        {label: 'Rate', value: 'Just ₹9.00 / Brick'},
        {label: 'Breakage Rate', value: '0% Guaranteed'},
        {label: 'Dimensions', value: 'Standard 9" × 4.25" × 2.75" [CONFIRM]'},
        {label: 'Usage', value: 'Load-bearing walls, multi-floor residential, exterior masonry'},
      ],
      highlights: [
        'Premium Quality PVC Red Bricks',
        'First Quality Kiln Fired',
        'Maximum compressive strength',
        'Even texture & mortar bond',
      ],
    },
    {
      id: 'rbs',
      name: 'RBS Red Bricks',
      stamp: 'RBS',
      badge: 'First Quality Standard',
      tagline: 'Precision Formed & Sharp Edges',
      image: IMAGES.productRbs,
      description:
        'Engineered for structural consistency, the "RBS" stamped red brick is ideal for clean vertical alignments, minimal plaster thickness, and long-term durability.',
      specifications: [
        {label: 'Stamp Mark', value: 'RBS (Embossed)'},
        {label: 'Material', value: 'Dense Kiln-Fired Red Soil'},
        {label: 'Rate', value: 'Just ₹9.00 / Brick'},
        {label: 'Breakage Rate', value: '0% Guaranteed'},
        {label: 'Dimensions', value: 'Standard Construction Size'},
        {label: 'Usage', value: 'Commercial complexes, structural partition walls, boundary walls'},
      ],
      highlights: [
        'Sharp square edges',
        'High thermal insulation',
        'Consistent weight & count',
        'Direct factory supply at ₹9',
      ],
    },
    {
      id: 'vbs',
      name: 'VBS Red Bricks',
      stamp: 'VBS',
      badge: 'Heavy Construction Grade',
      tagline: 'Heavy-Duty & High Durability',
      image: IMAGES.productVbs,
      description:
        'Built for heavy-duty construction applications, the "VBS" red brick withstands high moisture, ground pressure, and extreme weather without efflorescence.',
      specifications: [
        {label: 'Stamp Mark', value: 'VBS (Embossed)'},
        {label: 'Material', value: 'Deep Kiln-Cured Red Clay'},
        {label: 'Rate', value: 'Just ₹9.00 / Brick'},
        {label: 'Breakage Rate', value: '0% Guaranteed'},
        {label: 'Dimensions', value: 'Standard Heavy-Duty Size'},
        {label: 'Usage', value: 'Basement structures, foundations, compound walls, industrial sheds'},
      ],
      highlights: [
        'Heavy-duty composition',
        'Superior water resistance',
        'High shear resistance',
        'Verified full count dispatch',
      ],
    },
  ];

  return (
    <LenisSmoothScroll>
      <div className="relative min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#B83824] selection:text-white">
        <StickyNav />

        {/* Page Hero Header */}
        <section className="pt-36 pb-16 bg-[#181614] text-white border-b border-neutral-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-3 font-semibold">
                <span>VS Bricks Supply</span>
                <span aria-hidden="true">·</span>
                <span>Product Catalog</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
                Our red brick varieties. <span className="text-[#B83824] italic font-normal">Just ₹9</span> only.
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans mb-8">
                Explore our full lineup of kiln-fired construction bricks — <strong>PVC Bricks</strong>, <strong>RBS Bricks</strong>, and <strong>VBS Bricks</strong>. Supplied with zero breakage and uncompromised count across Telangana.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white">
                  Flat Rate: ₹9.00 / Brick
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white">
                  Delivery: All Over Telangana
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white">
                  Breakage: 0% Guaranteed
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Cards In-Depth */}
        <main className="flex-1 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
            {products.map((product, idx) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Column */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-md">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#181614]/90 px-3 py-1 rounded-md text-xs font-mono font-bold text-white uppercase tracking-wider border border-white/10">
                      Stamp: {product.stamp}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#B83824] text-white px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold shadow-md">
                      Just ₹9 Only
                    </div>
                  </div>

                  {/* Highlights Pill Array */}
                  <div className="grid grid-cols-2 gap-2">
                    {product.highlights.map((h) => (
                      <div
                        key={h}
                        className="p-2.5 rounded-xl bg-[#FAF8F5] border border-neutral-200/80 text-xs font-medium text-neutral-700 flex items-center gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#B83824] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#B83824] font-bold">
                        {product.badge}
                      </span>
                      <span className="text-neutral-300">·</span>
                      <span className="text-xs font-mono text-neutral-500">
                        Variant 0{idx + 1}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#1A1816] mb-1">
                      {product.name}
                    </h2>
                    <p className="text-sm font-semibold text-neutral-500 mb-4">
                      {product.tagline}
                    </p>

                    <p className="text-sm text-neutral-700 leading-relaxed font-sans mb-6">
                      {product.description}
                    </p>

                    {/* Specification Table */}
                    <div className="border border-neutral-200 rounded-2xl overflow-hidden mb-6">
                      <div className="bg-neutral-50 px-4 py-2.5 border-b border-neutral-200 text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                        Technical Specifications
                      </div>
                      <div className="divide-y divide-neutral-100 text-xs">
                        {product.specifications.map((spec) => (
                          <div
                            key={spec.label}
                            className="px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                          >
                            <span className="font-semibold text-neutral-600">
                              {spec.label}
                            </span>
                            <span className="font-mono text-neutral-900 font-medium text-right">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/919606948371?text=${encodeURIComponent(
                        `Hello VS Bricks Supply, I want to order ${product.name} (Stamp: ${product.stamp}) at ₹9/brick. Please provide quote for Telangana delivery.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#B83824] hover:bg-[#982B1B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Order {product.stamp} on WhatsApp (₹9)</span>
                    </a>

                    <Link
                      href="/calculator"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                    >
                      <span>Calculate Requirement</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Comparison Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="bg-[#181614] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B83824] font-bold">
                  Side-By-Side Comparison
                </span>
                <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-white mt-1">
                  Which brick suits your build?
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-800 font-mono text-neutral-400 uppercase">
                      <th className="py-3 px-4">Feature</th>
                      <th className="py-3 px-4 text-[#B83824]">PVC Red Bricks</th>
                      <th className="py-3 px-4">RBS Red Bricks</th>
                      <th className="py-3 px-4">VBS Red Bricks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/80 font-sans text-neutral-300">
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">Price</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-white">₹9 / brick</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-white">₹9 / brick</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-white">₹9 / brick</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">Frog Stamp Mark</td>
                      <td className="py-3.5 px-4 font-mono">PVC</td>
                      <td className="py-3.5 px-4 font-mono">RBS</td>
                      <td className="py-3.5 px-4 font-mono">VBS</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">Primary Best Use</td>
                      <td className="py-3.5 px-4">Residential Homes & Framing</td>
                      <td className="py-3.5 px-4">Commercial Masonry & Partitions</td>
                      <td className="py-3.5 px-4">Heavy Foundations & Basements</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">Breakage Guarantee</td>
                      <td className="py-3.5 px-4 text-emerald-400">Zero Breakage</td>
                      <td className="py-3.5 px-4 text-emerald-400">Zero Breakage</td>
                      <td className="py-3.5 px-4 text-emerald-400">Zero Breakage</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">Delivery Coverage</td>
                      <td className="py-3.5 px-4">All Telangana Districts</td>
                      <td className="py-3.5 px-4">All Telangana Districts</td>
                      <td className="py-3.5 px-4">All Telangana Districts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-400 font-sans">
                  Not sure which brick to select? Call us for expert recommendation.
                </span>
                <a
                  href="tel:9606948371"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B83824]" />
                  <span>Call 9606948371</span>
                </a>
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
