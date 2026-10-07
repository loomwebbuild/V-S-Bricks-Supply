'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Phone, MessageSquare, Menu, X} from 'lucide-react';

export default function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'Products', href: '/products'},
    {name: 'Calculator', href: '/calculator'},
    {name: 'Quality', href: '/quality'},
    {name: 'Process', href: '/process'},
    {name: 'Gallery', href: '/gallery'},
    {name: 'Contact', href: '/contact'},
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#181614]/95 backdrop-blur-md shadow-md border-b border-neutral-800/80 py-3.5'
            : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <Link
            href="/"
            className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#FAF8F5] uppercase hover:text-[#B83824] transition-colors whitespace-nowrap"
          >
            VS Bricks Supply
          </Link>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-neutral-200">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#B83824] after:transition-all after:duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold after:w-full'
                      : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9606948371"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors whitespace-nowrap font-sans"
            >
              <Phone className="w-3.5 h-3.5 text-[#B83824]" />
              <span className="font-mono">9606948371</span>
            </a>

            <a
              href="https://wa.me/919606948371?text=Hello%20VS%20Bricks%20Supply,%20I%20am%20interested%20in%20ordering%20red%20bricks%20at%20₹9/brick."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#B83824] hover:bg-[#982B1B] rounded-lg shadow-sm transition-colors whitespace-nowrap font-sans"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#B83824] rounded-lg cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#181614]/98 backdrop-blur-lg pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden">
          <div className="flex flex-col gap-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 pb-2 border-b border-neutral-800">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display text-2xl font-bold uppercase transition-colors py-2 border-b border-neutral-900 ${
                    isActive ? 'text-[#B83824]' : 'text-neutral-200 hover:text-[#B83824]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-neutral-800">
            <a
              href="tel:9606948371"
              className="flex items-center justify-center gap-3 w-full py-3.5 text-sm font-semibold text-white bg-neutral-900 border border-neutral-700 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#B83824]" />
              <span>Call 9606948371</span>
            </a>
            <a
              href="https://wa.me/919606948371?text=Hello%20VS%20Bricks%20Supply,%20I%20am%20interested%20in%20ordering%20red%20bricks%20at%20₹9/brick."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 text-sm font-semibold text-white bg-[#B83824] rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quote (Just ₹9)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
