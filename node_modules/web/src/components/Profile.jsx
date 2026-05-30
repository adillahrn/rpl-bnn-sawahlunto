import foto from "../assets/visi.png";

export default function Profile() {
  return (
    <section className="py-10 sm:py-16 md:py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline-section text-[24px] sm:text-headline-section text-primary">Profil Institusi</h2>
          <p className="font-body-main text-body-main text-on-surface-variant mt-2 max-w-2xl mx-auto">
            BNN Kota Sawahlunto merupakan instansi vertikal yang bertugas melaksanakan kebijakan nasional di bidang Pencegahan dan Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika (P4GN).
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Image Card */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.08)] border border-surface-container min-h-[300px] sm:min-h-[400px] relative group">
            <img
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              alt="BNN Kota Sawahlunto"
              src={foto}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary font-label-bold text-label-bold px-4 py-2 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                Kota Sawahlunto, Sumatera Barat
              </span>
            </div>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Visi */}
            <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl shadow-[0px_10px_25px_rgba(13,38,194,0.03)] border border-surface-container hover:-translate-y-0.5 transition-transform duration-300 flex items-start gap-4">
              <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-on-primary-container text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-headline-card text-headline-card text-on-surface mb-1.5">Visi</h3>
                <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                  Mewujudkan Kota Sawahlunto yang bersih dari penyalahgunaan dan peredaran gelap narkoba untuk mendukung masyarakat yang sehat, cerdas, dan produktif.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl shadow-[0px_10px_25px_rgba(13,38,194,0.03)] border border-surface-container hover:-translate-y-0.5 transition-transform duration-300 flex items-start gap-4">
              <div className="w-11 h-11 bg-secondary-container rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-on-secondary-container text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-headline-card text-headline-card text-on-surface mb-1.5">Misi</h3>
                <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                  Mencegah peredaran gelap narkoba, memberdayakan masyarakat, dan memberikan layanan rehabilitasi medis dan sosial yang komprehensif bagi pecandu.
                </p>
              </div>
            </div>

            {/* Tugas & Fungsi */}
            <div className="bg-primary text-on-primary p-5 sm:p-6 rounded-2xl shadow-[0px_10px_25px_rgba(13,38,194,0.15)] relative overflow-hidden hover:-translate-y-0.5 transition-transform duration-300 flex items-start gap-4 flex-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0 mt-0.5 relative z-10">
                <span className="material-symbols-outlined text-white text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>gavel</span>
              </div>
              <div className="flex-1 min-w-0 relative z-10">
                <h3 className="font-headline-card text-headline-card mb-1.5">Tugas & Fungsi</h3>
                <p className="font-body-small text-body-small text-inverse-primary leading-relaxed">
                  Melaksanakan tugas pemerintahan di bidang pencegahan, pemberantasan penyalahgunaan dan peredaran gelap psikotropika, prekursor, dan bahan adiktif lainnya kecuali bahan adiktif untuk tembakau dan alkohol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
