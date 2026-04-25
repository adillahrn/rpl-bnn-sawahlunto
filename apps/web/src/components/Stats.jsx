export default function Stats() {
  return (
    <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg py-10 sm:py-16 md:py-xl">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-headline-section text-[24px] sm:text-headline-section text-primary">Capaian Kami</h2>
        <p className="font-body-main text-body-main text-on-surface-variant mt-2">Data statistik penanganan dan pencegahan di Kota Sawahlunto</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-primary text-on-primary p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-4xl sm:text-5xl mb-3 sm:mb-4 opacity-80" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
          <span className="font-display-hero text-[40px] sm:text-display-hero">142</span>
          <span className="font-label-bold text-label-bold mt-2 text-inverse-primary">Kasus Terungkap</span>
        </div>
        <div className="bg-surface-container text-on-surface p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-4xl sm:text-5xl mb-3 sm:mb-4 text-primary opacity-80" style={{fontVariationSettings: "'FILL' 1"}}>campaign</span>
          <span className="font-display-hero text-[40px] sm:text-display-hero text-primary">850+</span>
          <span className="font-label-bold text-label-bold mt-2 text-primary">Kegiatan Sosialisasi</span>
        </div>
        <div className="bg-secondary-container text-on-secondary-container p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-4xl sm:text-5xl mb-3 sm:mb-4 opacity-80" style={{fontVariationSettings: "'FILL' 1"}}>healing</span>
          <span className="font-display-hero text-[40px] sm:text-display-hero">56</span>
          <span className="font-label-bold text-label-bold mt-2 text-on-secondary-container">Klien Rehabilitasi</span>
        </div>
      </div>
    </section>
  );
}
