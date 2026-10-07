'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Maximize2, X, Eye} from 'lucide-react';
import {IMAGES} from '@/lib/images';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: IMAGES.hero,
      title: 'Precision Clay Masonry & Mortar Joints',
      category: 'Masonry Texture',
      description: 'Solid clay structure with even color dispersion and high load-bearing strength.',
    },
    {
      id: 2,
      image: IMAGES.kilnStack,
      title: 'Direct Yard Stacking & Kiln Curing',
      category: 'Kiln Yard',
      description: 'Systematic batch drying and firing ensuring consistent dimension across every batch.',
    },
    {
      id: 3,
      image: IMAGES.productPvc,
      title: 'Premium PVC Stamped Red Bricks',
      category: 'PVC Stamp Quality',
      description: 'Dense terracotta matrix with sharp edges, smooth face, and zero structural cracks.',
    },
    {
      id: 4,
      image: IMAGES.dispatchLoading,
      title: 'Commercial Truck Dispatch & Loading',
      category: 'Telangana Dispatch',
      description: 'Carefully loaded onto transport vehicles to protect edges and maintain full count.',
    },
    {
      id: 5,
      image: IMAGES.constructionSite,
      title: 'On-Site Construction Masonry in Action',
      category: 'Site Masonry',
      description: 'Superior mortar bonding and clean vertical alignment for residential & commercial walls.',
    },
    {
      id: 6,
      image: IMAGES.productVbs,
      title: 'VBS & RBS Heavy Duty Stamped Stock',
      category: 'Heavy-Duty Stock',
      description: 'Authentic iron-rich red soil baked at high temperatures for long-lasting durability.',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1816] overflow-hidden border-b border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 border-b border-neutral-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-2 font-semibold">
              <span>Visual Inventory</span>
              <span aria-hidden="true">·</span>
              <span>Kiln & Site Gallery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#1A1816] leading-none">
              Brick craftsmanship in detail.
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 text-xs sm:text-sm text-neutral-500 max-w-sm">
            Inspect our PVC, RBS, and VBS red bricks, yard batches, and construction site applications.
          </p>
        </div>

        {/* 6 Grid Items with Hover Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-300 shadow-md cursor-pointer will-change-transform"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Top-right zoom icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end transform transition-transform duration-300">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 font-sans line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#FAF8F5]/80 pt-2 border-t border-white/15">
                  <span>Price: ₹9 / brick</span>
                  <span className="text-[#B83824] font-bold group-hover:text-white transition-colors">
                    Click to enlarge →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged Brick Image"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center hover:bg-[#B83824] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center bg-[#181614] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[16/10] max-h-[65vh]">
                <Image
                  src={galleryItems[selectedImage].image}
                  alt={galleryItems[selectedImage].title}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full p-6 bg-[#181614] border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#B83824] mb-1">
                    {galleryItems[selectedImage].category}
                  </div>
                  <h4 className="font-display text-xl font-bold uppercase">
                    {galleryItems[selectedImage].title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 max-w-2xl font-sans">
                    {galleryItems[selectedImage].description}
                  </p>
                </div>

                <a
                  href="https://wa.me/919606948371?text=Hello%20Karimnagar%20Red%20Bricks,%20I%20saw%20your%20gallery%20and%20want%20to%20order%20red%20bricks%20at%20₹9/brick."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B83824] hover:bg-[#982B1B] rounded-lg transition-colors whitespace-nowrap self-stretch sm:self-auto text-center"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
