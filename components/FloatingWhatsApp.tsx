'use client';

import {MessageSquare} from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/919606948371?text=Hello%20VS%20Bricks%20Supply,%20I%20would%20like%20to%20enquire%20about%20ordering%20PVC/RBS/VBS%20red%20bricks%20at%20₹9/brick.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on desktop */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 text-xs font-medium text-white bg-[#181614] rounded-lg shadow-lg border border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-sans">
        VS Bricks Supply · 9606948371 · Just ₹9
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VS Bricks Supply on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}

