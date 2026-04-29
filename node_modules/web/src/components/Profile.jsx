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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Image Card */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.08)] border border-surface-container h-[280px] sm:h-[340px] lg:h-full relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Kantor BNN Kota Sawahlunto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxKtovfF-cRzsGYOfUdZtjrajj4NUv5Uo5zZU10m_m83RlkUqNape7rY-F8QG2M0X7mSnpCA6WocscAMKtUUpQjd_CCti4fL2tLb6n3W0WgLL83lcEpTIgw09o1ejT4P1EMZD5IxhIMf2ix7W6tJ4MR_swAVIGsBM0bFGbsHE_dep65FBV8JHLb9rxIW-yO5fe825GTNB406POGVj9iqBo7IMjP-49ccKktZ6iwaBj8-6oh3LzXr57yjBREs5MjMDSEUwmi5CmkrSt"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary font-label-bold text-label-bold px-4 py-2 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                Kota Sawahlunto, Sumatera Barat
              </span>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Visi */}
            <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-[0px_10px_25px_rgba(13,38,194,0.03)] border border-surface-container hover:-translate-y-0.5 transition-transform duration-300">
              <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-on-primary-container text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-2.5">Visi</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Mewujudkan Kota Sawahlunto yang bersih dari penyalahgunaan dan peredaran gelap narkoba untuk mendukung masyarakat yang sehat, cerdas, dan produktif.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-[0px_10px_25px_rgba(13,38,194,0.03)] border border-surface-container hover:-translate-y-0.5 transition-transform duration-300">
              <div className="w-11 h-11 bg-secondary-container rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-on-secondary-container text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-2.5">Misi</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Mencegah peredaran gelap narkoba, memberdayakan masyarakat, dan memberikan layanan rehabilitasi medis dan sosial yang komprehensif bagi pecandu.
              </p>
            </div>

            {/* Tugas Pokok */}
            <div className="sm:col-span-2 bg-primary text-on-primary p-6 sm:p-7 rounded-2xl shadow-[0px_10px_25px_rgba(13,38,194,0.15)] relative overflow-hidden hover:-translate-y-0.5 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-white text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>gavel</span>
                </div>
                <h3 className="font-headline-card text-headline-card mb-2.5">Tugas & Fungsi</h3>
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
