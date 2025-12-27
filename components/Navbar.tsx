import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b-4 border-black bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo Section - Text Based (Matches Footer) */}
        <div className="flex items-center">
          <a href="#home" className="brand-font text-2xl md:text-3xl font-black text-[#ff6600] uppercase tracking-tighter leading-none hover:opacity-80 transition-opacity">
            K-MEAN<br/>STUDIO
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-bold text-black uppercase tracking-wider text-sm transition-colors hover:bg-[#ff6600] hover:text-white px-3 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-12 w-12 items-center justify-center border-2 border-black md:hidden hover:bg-[#ff6600] hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-24 w-full border-b-4 border-black bg-white px-6 py-8 md:hidden shadow-xl z-50">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xl font-black uppercase tracking-wide text-black hover:text-[#ff6600]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;