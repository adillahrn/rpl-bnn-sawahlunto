export default function Stats() {
  return (
    <section className="max-w-container-max mx-auto px-6 md:px-lg py-xl">
      <div className="text-center mb-12">
        <h2 className="font-headline-section text-headline-section text-primary">Capaian Kami</h2>
        <p className="font-body-main text-body-main text-on-surface-variant mt-2">Data statistik penanganan dan pencegahan di Kota Sawahlunto</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-primary text-on-primary p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-5xl mb-4 opacity-80" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
          <span className="font-display-hero text-display-hero">142</span>
          <span className="font-label-bold text-label-bold mt-2 text-inverse-primary">Kasus Terungkap</span>
        </div>
        <div className="bg-surface-container text-on-surface p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-5xl mb-4 text-primary opacity-80" style={{fontVariationSettings: "'FILL' 1"}}>campaign</span>
          <span className="font-display-hero text-display-hero text-primary">850+</span>
          <span className="font-label-bold text-label-bold mt-2 text-primary">Kegiatan Sosialisasi</span>
        </div>
        <div className="bg-secondary-container text-on-secondary-container p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-5xl mb-4 opacity-80" style={{fontVariationSettings: "'FILL' 1"}}>healing</span>
          <span className="font-display-hero text-display-hero">56</span>
          <span className="font-label-bold text-label-bold mt-2 text-on-secondary-container">Klien Rehabilitasi</span>
        </div>
      </div>
    </section>
  );
}
