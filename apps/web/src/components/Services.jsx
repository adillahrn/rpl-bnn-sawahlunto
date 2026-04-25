import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg py-10 sm:py-16 md:py-xl">
      <h2 className="font-headline-section text-[24px] sm:text-headline-section text-primary text-center mb-8 sm:mb-12">Layanan Kami</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl sm:rounded-[2rem] border border-surface-container hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 sm:mb-6 text-primary">
            <span className="material-symbols-outlined" style={{fontSize: "28px", fontVariationSettings: "'FILL' 1"}}>science</span>
          </div>
          <h3 className="font-headline-card text-headline-card text-on-surface mb-2 sm:mb-3">Layanan Tes Urine</h3>
          <p className="font-body-small text-body-small text-on-surface-variant mb-4 sm:mb-6">Pemeriksaan laboratorium untuk mendeteksi penyalahgunaan narkotika secara akurat dan rahasia.</p>
          <Link className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary hover:underline" to="/layanan">Info Detail <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
        </div>
        <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl sm:rounded-[2rem] border border-surface-container hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 sm:mb-6 text-primary">
            <span className="material-symbols-outlined" style={{fontSize: "28px", fontVariationSettings: "'FILL' 1"}}>volunteer_activism</span>
          </div>
          <h3 className="font-headline-card text-headline-card text-on-surface mb-2 sm:mb-3">Rehabilitasi</h3>
          <p className="font-body-small text-body-small text-on-surface-variant mb-4 sm:mb-6">Fasilitas pemulihan medis dan sosial bagi korban penyalahgunaan narkoba agar kembali produktif.</p>
          <Link className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary hover:underline" to="/layanan">Info Detail <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
        </div>
        <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl sm:rounded-[2rem] border border-surface-container hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 sm:mb-6 text-primary">
            <span className="material-symbols-outlined" style={{fontSize: "28px", fontVariationSettings: "'FILL' 1"}}>groups</span>
          </div>
          <h3 className="font-headline-card text-headline-card text-on-surface mb-2 sm:mb-3">Sosialisasi P4GN</h3>
          <p className="font-body-small text-body-small text-on-surface-variant mb-4 sm:mb-6">Permintaan narasumber untuk penyuluhan bahaya narkoba di instansi, sekolah, maupun masyarakat.</p>
          <Link className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary hover:underline" to="/layanan">Info Detail <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
        </div>
      </div>
    </section>
  );
}
