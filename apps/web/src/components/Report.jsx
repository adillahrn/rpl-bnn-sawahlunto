export default function Report() {
  return (
    <section className="py-10 sm:py-16 md:py-xl max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter mb-6 sm:mb-12">
      <div className="bg-primary-container rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 shadow-[0px_20px_40px_rgba(13,38,194,0.2)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 md:w-2/3 text-center md:text-left">
          <h2 className="font-headline-section text-[22px] sm:text-headline-section text-on-primary mb-3 sm:mb-4">Laporkan Tindak Pidana Narkotika</h2>
          <p className="font-body-main text-body-main text-surface-container-highest mb-0">
            Kerahasiaan identitas pelapor dijamin oleh undang-undang. Bersama kita ciptakan lingkungan yang aman dan bersih dari narkoba.
          </p>
        </div>
        <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <button className="bg-secondary-container text-on-secondary-container px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label-bold text-label-bold hover:bg-secondary-fixed transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined">warning</span>
            Lapor Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
