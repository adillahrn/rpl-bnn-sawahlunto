import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="text-lg font-bold text-[#0D26C2] dark:text-white mb-4 sm:mb-6">BNN Kota Sawahlunto</div>
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Badan Narkotika Nasional Kota Sawahlunto berkomitmen untuk mewujudkan lingkungan yang bersih dari penyalahgunaan dan peredaran gelap narkotika.
          </p>
          <div className="mt-6 sm:mt-8 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            © 2026 BNN Kota Sawahlunto. Lembaga Negara Non-Kementerian.
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          <Link className="text-sm leading-relaxed text-[#0D26C2] font-bold" to="/">Beranda</Link>
          <Link className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" to="/berita">Berita</Link>
          <a className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" href="#">Informasi</a>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          <Link className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" to="/layanan">Layanan</Link>
          <a className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" href="#">Pusat Bantuan</a>
          <a className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" href="#">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}
