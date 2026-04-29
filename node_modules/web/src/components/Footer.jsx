import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/berita', label: 'Berita' },
    { to: '/informasi', label: 'Informasi' },
    { to: '/layanan', label: 'Layanan' },
    { to: '/lapor', label: 'Lapor' },
  ];

  const services = [
    'Tes Urine',
    'Rehabilitasi',
    'Sosialisasi P4GN',
    'Penerbitan SKHPN',
    'Konseling Adiksi',
  ];

  return (
    <footer className="relative bg-[#0b1c30] text-white overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 md:px-lg pt-14 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/bnn-logo.png" alt="Logo BNN" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-black uppercase tracking-tighter leading-none">
                  BNN Kota Sawahlunto
                </span>
                <span className="text-[11px] font-medium text-white/60 uppercase tracking-wide mt-0.5">
                  Badan Narkotika Nasional
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-6 max-w-xs">
              Berkomitmen mewujudkan lingkungan yang bersih dari penyalahgunaan dan peredaran gelap narkotika di Kota Sawahlunto.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors duration-300" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors duration-300" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.124-5.864 10.124-11.854z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors duration-300" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors duration-300" aria-label="Twitter / X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">Navigasi</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/50 hover:text-secondary-container transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-secondary-container transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">Layanan</h3>
            <ul className="flex flex-col gap-3">
              {services.map((svc) => (
                <li key={svc}>
                  <Link to="/layanan" className="text-sm text-white/50 hover:text-secondary-container transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-secondary-container transition-colors"></span>
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">Kontak</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                <span className="text-sm text-white/50 leading-relaxed">
                  Jl. Soekarno Hatta No. 1, Kota Sawahlunto, Sumatera Barat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
                <a href="tel:+62751xxxxxxx" className="text-sm text-white/50 hover:text-secondary-container transition-colors">(0751) XXX-XXXX</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>mail</span>
                <a href="mailto:bnn.sawahlunto@bnn.go.id" className="text-sm text-white/50 hover:text-secondary-container transition-colors">bnn.sawahlunto@bnn.go.id</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>schedule</span>
                <span className="text-sm text-white/50">Senin – Jumat, 08.00 – 16.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {currentYear} BNN Kota Sawahlunto. Lembaga Negara Non-Kementerian Republik Indonesia.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Kebijakan Privasi</a>
            <span className="text-white/10">|</span>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
