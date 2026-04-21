export default function Report() {
  return (
    <section className="bg-primary text-on-primary py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <span className="material-symbols-outlined text-secondary-fixed text-6xl mb-6" style={{fontVariationSettings: "'FILL' 1"}}>report</span>
        <h2 className="font-display-hero text-headline-section md:text-[48px] font-bold leading-tight mb-6">Melihat Tindak Pidana Narkotika?</h2>
        <p className="font-body-main text-body-main text-inverse-primary mb-10 max-w-2xl mx-auto">
          Jangan ragu untuk melapor. Identitas Anda dijamin kerahasiaannya. Bersama kita ciptakan lingkungan yang aman dan bersih dari narkoba.
        </p>
        <div className="bg-surface-container-lowest/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-xl mx-auto">
          <form className="flex flex-col gap-4 text-left">
            <div>
              <label className="block font-label-bold text-label-bold text-white mb-2">Jenis Laporan</label>
              <input className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed outline-none transition-all" placeholder="Contoh: Indikasi peredaran..." type="text"/>
            </div>
            <div>
              <label className="block font-label-bold text-label-bold text-white mb-2">Lokasi Kejadian</label>
              <input className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed outline-none transition-all" placeholder="Alamat atau nama tempat..." type="text"/>
            </div>
            <button className="mt-4 bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-8 py-4 rounded-lg hover:bg-secondary-fixed transition-colors w-full flex items-center justify-center gap-2" type="button">
              Lanjut ke Form Resmi <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
