'use client';

import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ShieldCheck, Check, MessageSquare, MapPin, Sparkles, ArrowRight} from 'lucide-react';
import {IMAGES} from '@/lib/images';

export default function ProductRangeSection() {
  const [selectedBrick, setSelectedBrick] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 'pvc',
      name: 'PVC Red Bricks',
      stamp: 'PVC',
      badge: 'Premium Quality',
      tagline: 'Strong · Durable · Cost Effective',
      image: IMAGES.productPvc,
      description:
        'Our flagship high-density red clay bricks stamped with authentic PVC mark. Formulated with iron-rich clay for maximum structural resilience and weather endurance.',
      features: [
        'Premium Quality PVC Red Bricks',
        'First Quality Kiln-Fired Bricks',
        'High Compressive Load Bearing',
        'Zero Transit Breakage Guarantee',
      ],
      price: '₹9 / brick',
      recommendedFor: 'Residential homes, multi-story load-bearing masonry, boundary walls.',
    },
    {
      id: 'rbs',
      name: 'RBS Red Bricks',
      stamp: 'RBS',
      badge: 'First Quality',
      tagline: 'Precision Formed & Kiln Baked',
      image: IMAGES.productRbs,
      description:
        'Standardized RBS stamped construction bricks crafted for consistent mortar adhesion, crisp rectangular edges, and uniform wall plastering efficiency.',
      features: [
        'Authentic RBS Kiln Stamp',
        'Uniform Size & Sharp Edges',
        'Optimal Water Absorption Rate',
        'Uncompromised Full Count Delivery',
      ],
      price: '₹9 / brick',
      recommendedFor: 'Commercial buildings, exterior brickwork, partition & structural walls.',
    },
    {
      id: 'vbs',
      name: 'VBS Red Bricks',
      stamp: 'VBS',
      badge: 'Heavy Construction Grade',
      tagline: 'Heavy-Duty & High Durability',
      image: IMAGES.productVbs,
      description:
        'Heavy-duty VBS stamped red bricks thoroughly baked in high-temperature kilns for high strength and crack-resistant durability.',
      features: [
        'Durable VBS Stamp Mark',
        'Extra Compressive Strength',
        'Even Color & High Density',
        'Direct Factory Supply at ₹9',
      ],
      price: '₹9 / brick',
      recommendedFor: 'Foundations, compound walls, industrial projects, heavy masonry.',
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.product-card');
        gsap.fromTo(
          cards,
          {y: 40, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeProduct = products[selectedBrick];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1816] overflow-hidden border-b border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Verified Delivery Area Banner from Flyer */}
        <div className="mb-12 max-w-2xl mx-auto flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-[#B83824]/10 border border-[#B83824]/30 text-[#B83824] text-xs sm:text-sm font-semibold text-center">
          <MapPin className="w-4 h-4 shrink-0 text-[#B83824]" />
          <span>Verified Supply: Fast Delivery in All Over Telangana</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-3">
            <span>VS Bricks Supply</span>
            <span aria-hidden="true">·</span>
            <span>Product Details & Varieties</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#1A1816] leading-none mb-6 text-balance">
            Premium red bricks. <span className="text-[#B83824] italic font-normal">Just ₹9</span> only.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Choose from our specialized kiln-fired stamped varieties — <strong>PVC Bricks</strong>, <strong>RBS Bricks</strong>, and <strong>VBS Bricks</strong>. All manufactured for high compressive durability with zero breakage.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {products.map((item, idx) => {
            const isSelected = selectedBrick === idx;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedBrick(idx)}
                className={`product-card flex flex-col justify-between rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer shadow-lg group hover:-translate-y-1.5 ${
                  isSelected
                    ? 'bg-white border-[#B83824] ring-2 ring-[#B83824]/20 shadow-2xl'
                    : 'bg-white border-neutral-200/90 hover:border-[#B83824]/50'
                }`}
              >
                <div>
                  {/* Image Container with Stamp Badge */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 mb-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#181614]/85 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono font-bold text-white uppercase tracking-wider border border-white/10">
                      Stamp: {item.stamp}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-[#B83824] text-white px-3 py-1 rounded-lg text-xs font-mono font-bold shadow-md">
                      Just ₹9 Only
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B83824]">
                      {item.badge}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">0{idx + 1}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#1A1816] mb-1">
                    {item.name}
                  </h3>

                  <p className="text-xs font-medium text-neutral-500 mb-4">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-neutral-700 leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 text-xs text-neutral-700 border-t border-neutral-100 pt-4">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B83824] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <span className="font-mono text-base font-bold text-[#1A1816]">
                    ₹9.00 <span className="text-xs font-normal text-neutral-500">/ brick</span>
                  </span>

                  <a
                    href={`https://wa.me/919606948371?text=${encodeURIComponent(
                      `Hello Karimnagar Red Bricks / VS Bricks Supply, I am interested in ordering ${item.name} (Stamp: ${item.stamp}) at ₹9/brick. Please share delivery details for Telangana.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#B83824] hover:bg-[#982B1B] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Tagline Banner from Flyer */}
        <div className="bg-[#181614] text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col text-center md:text-left">
            <span className="font-display text-xs tracking-widest text-[#B83824] uppercase font-bold">
              VS Bricks Supply · Karimnagar Red Bricks
            </span>
            <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-1">
              Stronger Walls · Brighter Futures
            </span>
            <span className="text-xs text-neutral-400 mt-1">
              Build Today | Last for Tomorrow · Prompt Dispatch Across Telangana
            </span>
          </div>

          <a
            href="https://wa.me/919606948371?text=Hello%20VS%20Bricks%20Supply,%20I%20would%20like%20to%20order%20red%20bricks%20in%20Telangana%20at%20₹9/brick."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B83824] hover:bg-[#982B1B] text-white rounded-xl font-bold uppercase text-xs tracking-wider transition-colors shadow-lg whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp (All Telangana)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
