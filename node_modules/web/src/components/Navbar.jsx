export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-[0px_10px_25px_rgba(13,38,194,0.05)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-black text-[#0D26C2] dark:text-white uppercase tracking-tighter">
          BNN Kota Sawahlunto
        </div>
        <div className="hidden md:flex gap-8">
          <a className="font-['Inter'] text-sm font-semibold tracking-tight text-[#0D26C2] dark:text-blue-400 border-b-2 border-[#FFC936] pb-1 hover:text-[#0D26C2] dark:hover:text-blue-300 transition-all duration-300 active:scale-95 transition-transform" href="#">Beranda</a>
          <a className="font-['Inter'] text-sm font-semibold tracking-tight text-gray-600 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-300 transition-all duration-300 active:scale-95 transition-transform" href="#">Berita</a>
          <a className="font-['Inter'] text-sm font-semibold tracking-tight text-gray-600 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-300 transition-all duration-300 active:scale-95 transition-transform" href="#">Informasi</a>
          <a className="font-['Inter'] text-sm font-semibold tracking-tight text-gray-600 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-300 transition-all duration-300 active:scale-95 transition-transform" href="#">Layanan</a>
        </div>
        <button className="bg-[#FFC936] text-[#0b1c30] font-label-bold text-label-bold px-6 py-3 rounded-full hover:bg-secondary-fixed transition-colors">
          Lapor
        </button>
      </div>
    </nav>
  );
}
