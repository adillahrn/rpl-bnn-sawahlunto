export default function Services() {
  return (
    <section className="max-w-container-max mx-auto px-6 md:px-lg py-xl">
      <h2 className="font-headline-section text-headline-section text-primary text-center mb-12">Layanan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-8 rounded-[2rem] border border-surface-container hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
            <span className="material-symbols-outlined" style={{fontSize: "32px", fontVariationSettings: "'FILL' 1"}}>science</span>
          </div>
          <h3 className="font-headline-card text-headline-card text-on-surface mb-3">Layanan Tes Urine</h3>
          <p className="font-body-small text-body-small text-on-surface-variant mb-6">Pemeriksaan laboratorium untuk mendeteksi penyalahgunaan narkotika secara akurat dan rahasia.</p>
          <a className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary hover:underline" href="#">Info Detail <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="bg-surface-container-low p-8 rounded-[2rem] border border-surface-container hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
            <span className="material-symbols-outlined" style={{fontSize: "32px", fontVariationSettings: "'FILL' 1"}}>volunteer_activism</span>
          </div>
          <h3 className="font-headline-card text-headline-card text-on-surface mb-3">Rehabilitasi</h3>
          <p className="font-body-small text-body-small text-on-surface-variant mb-6">Fasilitas pemulihan medis dan sosial bagi korban penyalahgunaan narkoba agar kembali produktif.</p>
          <a className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary hover:underline" href="#">Info Detail <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="bg-surface-container-low p-8 rounded-[2rem] border border-surface-container hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
            <span className="material-symbols-outlined" style={{fontSize: "32px", fontVariationSettings: "'FILL' 1"}}>groups</span>
          </div>
          <h3 className="font-headline-card text-headline-card text-on-surface mb-3">Sosialisasi P4GN</h3>
          <p className="font-body-small text-body-small text-on-surface-variant mb-6">Permintaan narasumber untuk penyuluhan bahaya narkoba di instansi, sekolah, maupun masyarakat.</p>
          <a className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary hover:underline" href="#">Info Detail <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
      </div>
    </section>
  );
}
