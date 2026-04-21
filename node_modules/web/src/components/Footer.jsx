export default function Footer() {
  return (
    <footer className="w-full rounded-t-none border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 py-20">
        <div>
          <div className="text-lg font-bold text-[#0D26C2] dark:text-white mb-6">BNN Kota Sawahlunto</div>
          <p className="font-['Inter'] text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Badan Narkotika Nasional Kota Sawahlunto berkomitmen untuk mewujudkan lingkungan yang bersih dari penyalahgunaan dan peredaran gelap narkotika.
          </p>
          <div className="mt-8 font-['Inter'] text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            © 2024 BNN Kota Sawahlunto. Lembaga Negara Non-Kementerian.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <a className="font-['Inter'] text-sm leading-relaxed text-[#0D26C2] font-bold" href="#">Beranda</a>
          <a className="font-['Inter'] text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" href="#">Berita</a>
          <a className="font-['Inter'] text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" href="#">Informasi</a>
        </div>
        <div className="flex flex-col gap-4">
          <a className="font-['Inter'] text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" href="#">Layanan</a>
          <a className="font-['Inter'] text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" href="#">Pusat Bantuan</a>
          <a className="font-['Inter'] text-sm leading-relaxed text-gray-500 dark:text-gray-400 hover:text-[#0D26C2] dark:hover:text-blue-400 underline decoration-[#FFC936] decoration-2 underline-offset-4" href="#">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}
