export default function ServicesPage() {
  const services = [
    {
      icon: 'science',
      title: 'Tes Urine',
      desc: 'Layanan deteksi dini penyalahgunaan narkotika melalui pengujian sampel urine secara akurat, profesional, dan rahasia bagi instansi maupun individu.',
      iconBg: 'bg-primary-fixed',
      iconColor: 'text-primary',
      linkColor: 'text-primary hover:text-primary-container',
    },
    {
      icon: 'healing',
      title: 'Rehabilitasi',
      desc: 'Program pemulihan medis dan sosial terpadu bagi pecandu dan korban penyalahgunaan narkotika untuk kembali hidup sehat dan produktif di masyarakat.',
      iconBg: 'bg-primary-fixed',
      iconColor: 'text-primary',
      linkColor: 'text-primary hover:text-primary-container',
    },
    {
      icon: 'campaign',
      title: 'Sosialisasi P4GN',
      desc: 'Penyuluhan dan edukasi komprehensif mengenai bahaya narkoba (P4GN) yang ditujukan untuk sekolah, instansi pemerintah, swasta, dan masyarakat umum.',
      iconBg: 'bg-primary-fixed',
      iconColor: 'text-primary',
      linkColor: 'text-primary hover:text-primary-container',
    },
    {
      icon: 'description',
      title: 'Penerbitan SKHPN',
      desc: 'Layanan resmi penerbitan Surat Keterangan Hasil Pemeriksaan Narkotika sebagai persyaratan administrasi pendidikan, melamar pekerjaan, dan keperluan legal lainnya.',
      iconBg: 'bg-primary-fixed',
      iconColor: 'text-primary',
      linkColor: 'text-primary hover:text-primary-container',
    },
    {
      icon: 'report_problem',
      title: 'Pengaduan Masyarakat',
      desc: 'Saluran aman dan terpercaya untuk melaporkan indikasi penyalahgunaan atau peredaran gelap narkotika di lingkungan Anda. Identitas pelapor dilindungi.',
      iconBg: 'bg-secondary-container',
      iconColor: 'text-on-secondary-container',
      linkColor: 'text-secondary hover:text-on-secondary-container',
      hasAccent: true,
    },
    {
      icon: 'psychology',
      title: 'Konseling Adiksi',
      desc: 'Layanan konsultasi psikologis gratis bagi individu maupun keluarga yang membutuhkan pendampingan terkait masalah adiksi dan pencegahan kekambuhan.',
      iconBg: 'bg-primary-fixed',
      iconColor: 'text-primary',
      linkColor: 'text-primary hover:text-primary-container',
    },
  ];

  return (
    <main className="flex-grow pt-20 md:pt-32 pb-12 md:pb-xl px-4 sm:px-6 md:px-lg w-full max-w-[1280px] mx-auto">
      {/* Header - same style as NewsPage */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <h1 className="font-headline-section text-headline-section text-primary">Layanan Publik</h1>
        <p className="font-body-main text-body-main text-on-surface-variant mt-1 sm:mt-2">
          Komitmen BNN Kota Sawahlunto dalam memberikan pelayanan prima untuk mewujudkan masyarakat yang sehat dan bersih dari penyalahgunaan narkoba.
        </p>
      </div>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {services.map((svc) => (
          <article
            key={svc.title}
            className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-[0px_10px_25px_rgba(13,38,194,0.05)] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/30 relative overflow-hidden"
          >
            {svc.hasAccent && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/20 rounded-bl-full -z-10"></div>
            )}
            <div className={`w-12 h-12 sm:w-14 sm:h-14 ${svc.iconBg} rounded-xl flex items-center justify-center mb-5 sm:mb-6`}>
              <span className={`material-symbols-outlined ${svc.iconColor} text-[24px] sm:text-[28px]`}>{svc.icon}</span>
            </div>
            <h2 className="font-headline-card text-headline-card text-on-surface mb-2 sm:mb-3">{svc.title}</h2>
            <p className="font-body-small text-body-small text-on-surface-variant mb-6 sm:mb-8 flex-grow">{svc.desc}</p>
            <a className={`font-label-bold text-label-bold ${svc.linkColor} flex items-center gap-2 mt-auto group`} href="#">
              Selengkapnya
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </article>
        ))}
      </section>

      {/* CTA Banner */}
      <section className="mt-12 md:mt-20 bg-primary rounded-2xl p-6 sm:p-8 md:p-12 text-center text-on-primary flex flex-col items-center justify-center relative overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.2)]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <h2 className="font-headline-section text-[24px] sm:text-headline-section mb-3 md:mb-4 relative z-10">Butuh Informasi Lebih Lanjut?</h2>
        <p className="font-body-main text-body-main mb-6 md:mb-8 max-w-2xl relative z-10 text-primary-fixed">
          Tim pelayanan kami siap membantu menjawab pertanyaan Anda mengenai prosedur, jadwal, dan persyaratan layanan BNN Kota Sawahlunto.
        </p>
        <button className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-secondary-fixed transition-colors shadow-lg relative z-10">
          Hubungi Pusat Bantuan
        </button>
      </section>
    </main>
  );
}
