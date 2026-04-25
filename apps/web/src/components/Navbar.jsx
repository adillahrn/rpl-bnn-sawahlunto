import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseLinkClass = "text-sm font-semibold tracking-tight transition-all duration-300 active:scale-95";
  const activeClass = "text-[#0D26C2] dark:text-blue-400 border-b-2 border-[#FFC936] pb-1";
  const inactiveClass = "text-gray-600 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-300";

  const mobileBase = "block w-full text-base font-semibold tracking-tight py-3 px-4 rounded-xl transition-all duration-200";
  const mobileActive = "text-[#0D26C2] bg-[#FFC936]/15 border-l-4 border-[#FFC936]";
  const mobileInactive = "text-gray-600 hover:text-[#0D26C2] hover:bg-surface-container-low";

  const navItems = [
    { to: "/", label: "Beranda", end: true },
    { to: "/berita", label: "Berita" },
    { to: "/informasi", label: "Informasi" },
    { to: "/layanan", label: "Layanan" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-[0px_10px_25px_rgba(13,38,194,0.05)]">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0" onClick={() => setMenuOpen(false)}>
            <img src="/bnn-logo.png" alt="Logo BNN" className="h-8 w-auto md:h-12" />
            <div className="flex flex-col">
              <span className="text-base md:text-xl font-black text-[#0D26C2] dark:text-white uppercase tracking-tighter leading-none">
                BNN Kota Sawahlunto
              </span>
              <span className="text-[10px] md:text-xs font-medium text-[#0D26C2]/80 dark:text-white/80 uppercase tracking-wide mt-0.5">
                Badan Narkotika Nasional
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) =>
              item.isAnchor ? (
                <a key={item.label} className={`${baseLinkClass} ${inactiveClass}`} href={item.to}>
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `${baseLinkClass} ${isActive ? activeClass : inactiveClass}`}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Desktop CTA - links to /lapor */}
          <Link to="/lapor" className="bg-[#FFC936] text-[#0b1c30] font-label-bold text-label-bold px-6 py-3 rounded-full hover:bg-secondary-fixed transition-colors hidden md:block">
            Lapor
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-on-surface hover:bg-surface-container-low transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile Slide-in Menu */}
      <div className={`fixed top-0 right-0 z-40 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col pt-20 px-4 pb-6 h-full">
          <div className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.isAnchor ? (
                <a key={item.label} className={`${mobileBase} ${mobileInactive}`} href={item.to} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `${mobileBase} ${isActive ? mobileActive : mobileInactive}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile CTA - links to /lapor */}
          <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
            <Link
              to="/lapor"
              className="w-full bg-[#FFC936] text-[#0b1c30] font-label-bold text-label-bold px-6 py-4 rounded-xl hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-[20px]">warning</span>
              Lapor Sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
