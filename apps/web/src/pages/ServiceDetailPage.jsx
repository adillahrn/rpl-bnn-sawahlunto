import { useParams, Link } from 'react-router-dom';

const WA_NUMBER = '6281364645537';

const servicesData = {
  'tes-urine': {
    icon: 'science',
    title: 'Tes Urine',
    subtitle: 'Layanan Deteksi Dini Narkotika',
    heroDesc: 'Layanan deteksi dini penyalahgunaan narkotika melalui pengujian sampel urine secara akurat, profesional, dan rahasia.',
    sections: [
      {
        title: 'Tentang Layanan',
        content: 'Tes urine merupakan salah satu metode pemeriksaan laboratorium yang digunakan untuk mendeteksi adanya zat narkotika dalam tubuh seseorang. BNN Kota Sawahlunto menyediakan layanan ini secara profesional dengan peralatan yang terstandarisasi dan ditangani oleh tenaga medis yang berkompeten.',
      },
      {
        title: 'Siapa yang Membutuhkan?',
        items: [
          'Instansi pemerintah dan swasta yang memerlukan pemeriksaan rutin karyawan.',
          'Lembaga pendidikan untuk program pencegahan narkoba di kalangan pelajar.',
          'Individu yang ingin memastikan kondisi kesehatannya secara sukarela.',
          'Pihak yang memerlukan bukti pemeriksaan untuk keperluan hukum atau administrasi.',
        ],
      },
      {
        title: 'Prosedur Layanan',
        items: [
          'Menghubungi BNN Kota Sawahlunto untuk pendaftaran dan penjadwalan.',
          'Mengisi formulir permohonan tes urine.',
          'Pengambilan sampel urine di fasilitas BNN Kota Sawahlunto.',
          'Pemeriksaan sampel oleh tenaga laboratorium bersertifikat.',
          'Hasil pemeriksaan disampaikan secara rahasia kepada pihak yang berwenang.',
        ],
      },
    ],
  },
  'rehabilitasi': {
    icon: 'healing',
    title: 'Rehabilitasi',
    subtitle: 'Program Pemulihan Medis & Sosial',
    heroDesc: 'Program pemulihan medis dan sosial terpadu bagi pecandu dan korban penyalahgunaan narkotika untuk kembali hidup sehat dan produktif di masyarakat.',
    sections: [
      {
        title: 'Tentang Program',
        content: 'Program rehabilitasi BNN Kota Sawahlunto dirancang untuk membantu individu yang terjerat dalam penyalahgunaan narkotika agar dapat pulih secara fisik, mental, dan sosial. Program ini mencakup rehabilitasi medis (detoksifikasi) dan rehabilitasi sosial (reintegrasi ke masyarakat).',
      },
      {
        title: 'Jenis Rehabilitasi',
        items: [
          'Rehabilitasi Medis — Proses detoksifikasi dan perawatan kesehatan untuk mengatasi ketergantungan fisik.',
          'Rehabilitasi Sosial — Pendampingan psikologis, pelatihan keterampilan, dan reintegrasi sosial.',
          'Rawat Jalan — Program pemulihan bagi pasien yang tidak memerlukan rawat inap.',
          'Pasca Rehabilitasi — Pendampingan lanjutan untuk mencegah kekambuhan (relapse).',
        ],
      },
      {
        title: 'Syarat & Prosedur',
        items: [
          'Melakukan pendaftaran di BNN Kota Sawahlunto (mandiri atau rujukan).',
          'Menjalani asesmen awal oleh tim medis dan psikolog.',
          'Mengikuti program rehabilitasi sesuai rencana terapi yang ditentukan.',
          'Evaluasi berkala dan pendampingan pasca rehabilitasi.',
        ],
      },
    ],
  },
  'sosialisasi-p4gn': {
    icon: 'campaign',
    title: 'Sosialisasi P4GN',
    subtitle: 'Pencegahan, Pemberantasan Penyalahgunaan & Peredaran Gelap Narkoba',
    heroDesc: 'Penyuluhan dan edukasi komprehensif mengenai bahaya narkoba (P4GN) yang ditujukan untuk sekolah, instansi pemerintah, swasta, dan masyarakat umum.',
    sections: [
      {
        title: 'Tentang Program',
        content: 'Program Pencegahan dan Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkoba (P4GN) merupakan upaya sistematis BNN Kota Sawahlunto untuk meningkatkan kesadaran masyarakat tentang bahaya narkoba melalui kegiatan penyuluhan, seminar, workshop, dan kampanye publik.',
      },
      {
        title: 'Bentuk Kegiatan',
        items: [
          'Penyuluhan di sekolah (SD, SMP, SMA/SMK) dan perguruan tinggi.',
          'Sosialisasi di lingkungan kerja pemerintah dan perusahaan swasta.',
          'Kampanye publik dan kegiatan sosial anti-narkoba di masyarakat.',
          'Pelatihan kader anti-narkoba dan pembentukan Desa Bersinar.',
          'Pameran dan distribusi materi edukasi pencegahan narkoba.',
        ],
      },
      {
        title: 'Cara Mengundang',
        items: [
          'Kirimkan surat permohonan resmi ke BNN Kota Sawahlunto.',
          'Atau hubungi langsung via WhatsApp untuk koordinasi jadwal.',
          'Tentukan jenis kegiatan, lokasi, jumlah peserta, dan waktu pelaksanaan.',
          'Tim P4GN BNN Kota Sawahlunto akan hadir sesuai jadwal yang disepakati.',
        ],
      },
    ],
  },
  'penerbitan-skhpn': {
    icon: 'description',
    title: 'Penerbitan SKHPN',
    subtitle: 'Surat Keterangan Hasil Pemeriksaan Narkotika',
    heroDesc: 'Layanan resmi penerbitan Surat Keterangan Hasil Pemeriksaan Narkotika sebagai persyaratan administrasi pendidikan, melamar pekerjaan, dan keperluan legal lainnya.',
    sections: [
      {
        title: 'Tentang SKHPN',
        content: 'SKHPN (Surat Keterangan Hasil Pemeriksaan Narkotika) adalah dokumen resmi yang diterbitkan oleh BNN Kota Sawahlunto sebagai bukti bahwa seseorang telah menjalani pemeriksaan narkotika dan dinyatakan bebas dari zat narkotika. Surat ini sering dibutuhkan untuk keperluan administrasi.',
      },
      {
        title: 'Kegunaan SKHPN',
        items: [
          'Persyaratan melamar pekerjaan di instansi pemerintah dan perusahaan.',
          'Pendaftaran dan penerimaan mahasiswa baru di perguruan tinggi.',
          'Persyaratan pencalonan dalam pemilihan pejabat publik.',
          'Kelengkapan dokumen perizinan usaha tertentu.',
          'Keperluan hukum dan administrasi lainnya.',
        ],
      },
      {
        title: 'Persyaratan & Prosedur',
        items: [
          'Membawa KTP/identitas diri yang masih berlaku.',
          'Mengisi formulir permohonan di kantor BNN Kota Sawahlunto.',
          'Menjalani proses pengambilan sampel urine.',
          'Menunggu hasil pemeriksaan laboratorium.',
          'SKHPN diterbitkan dan diserahkan kepada pemohon.',
        ],
      },
    ],
  },
  'pengaduan-masyarakat': {
    icon: 'report_problem',
    title: 'Pengaduan Masyarakat',
    subtitle: 'Saluran Pelaporan Aman & Terpercaya',
    heroDesc: 'Saluran aman dan terpercaya untuk melaporkan indikasi penyalahgunaan atau peredaran gelap narkotika di lingkungan Anda. Identitas pelapor dilindungi.',
    sections: [
      {
        title: 'Tentang Layanan',
        content: 'BNN Kota Sawahlunto membuka saluran pengaduan masyarakat sebagai wadah bagi warga untuk melaporkan dugaan penyalahgunaan dan peredaran gelap narkotika. Setiap laporan akan ditangani secara profesional dan kerahasiaan pelapor dijamin sepenuhnya oleh undang-undang.',
      },
      {
        title: 'Yang Dapat Dilaporkan',
        items: [
          'Dugaan transaksi jual beli narkotika di lingkungan Anda.',
          'Aktivitas mencurigakan yang berkaitan dengan peredaran gelap narkoba.',
          'Informasi mengenai lokasi penyimpanan atau produksi narkotika.',
          'Perilaku mencurigakan yang mengindikasikan penyalahgunaan narkoba.',
        ],
      },
      {
        title: 'Cara Melapor',
        items: [
          'Melalui formulir pengaduan online di website BNN Kota Sawahlunto.',
          'Menghubungi langsung via WhatsApp untuk laporan mendesak.',
          'Datang langsung ke kantor BNN Kota Sawahlunto.',
          'Identitas pelapor akan dilindungi dan dijaga kerahasiaannya.',
        ],
      },
    ],
  },
  'konseling-adiksi': {
    icon: 'psychology',
    title: 'Konseling Adiksi',
    subtitle: 'Layanan Konsultasi Psikologis Gratis',
    heroDesc: 'Layanan konsultasi psikologis gratis bagi individu maupun keluarga yang membutuhkan pendampingan terkait masalah adiksi dan pencegahan kekambuhan.',
    sections: [
      {
        title: 'Tentang Layanan',
        content: 'Konseling adiksi adalah layanan konsultasi psikologis yang diberikan oleh konselor profesional BNN Kota Sawahlunto untuk membantu individu yang mengalami masalah ketergantungan narkotika serta keluarganya. Layanan ini bersifat gratis, rahasia, dan dapat diakses oleh seluruh masyarakat Kota Sawahlunto.',
      },
      {
        title: 'Jenis Konseling',
        items: [
          'Konseling Individual — Sesi tatap muka pribadi dengan konselor profesional.',
          'Konseling Keluarga — Pendampingan bagi keluarga yang memiliki anggota dengan masalah adiksi.',
          'Konseling Kelompok — Sesi diskusi terpandu bersama sesama penyintas.',
          'Konseling Online — Sesi konsultasi jarak jauh via telepon atau video call.',
        ],
      },
      {
        title: 'Cara Mengakses',
        items: [
          'Menghubungi BNN Kota Sawahlunto melalui telepon atau WhatsApp.',
          'Mendaftar untuk sesi konseling sesuai jadwal yang tersedia.',
          'Datang ke kantor BNN Kota Sawahlunto pada hari dan jam kerja.',
          'Layanan ini sepenuhnya GRATIS dan bersifat rahasia.',
        ],
      },
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <main className="flex-grow pt-20 md:pt-32 pb-12 md:pb-xl px-4 sm:px-6 md:px-lg w-full max-w-[1280px] mx-auto text-center">
        <span className="material-symbols-outlined text-6xl text-outline mb-4 block">search_off</span>
        <h1 className="font-headline-section text-2xl text-on-surface mb-2">Layanan Tidak Ditemukan</h1>
        <p className="text-on-surface-variant mb-6">Halaman layanan yang Anda cari tidak tersedia.</p>
        <Link to="/layanan" className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Kembali ke Layanan
        </Link>
      </main>
    );
  }

  const waMessage = encodeURIComponent(`Halo BNN Kota Sawahlunto, saya ingin bertanya tentang layanan ${service.title}.`);

  return (
    <main className="flex-grow pt-20 md:pt-32 pb-12 md:pb-xl px-4 sm:px-6 md:px-lg w-full max-w-[1280px] mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-on-surface-variant">
        <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <Link to="/layanan" className="hover:text-primary transition-colors">Layanan</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-on-surface font-label-bold">{service.title}</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 mb-8 md:mb-12 relative overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.2)]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/15 rounded-2xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-[32px] sm:text-[40px]" style={{fontVariationSettings: "'FILL' 1"}}>{service.icon}</span>
          </div>
          <div>
            <p className="text-inverse-primary font-label-bold text-sm mb-1">{service.subtitle}</p>
            <h1 className="font-headline-section text-[28px] sm:text-[36px] text-white mb-3">{service.title}</h1>
            <p className="text-primary-fixed font-body-main text-body-main max-w-2xl">{service.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {service.sections.map((section, idx) => (
            <section key={idx} className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-[0px_10px_25px_rgba(13,38,194,0.05)] border border-outline-variant/20">
              <h2 className="font-headline-card text-headline-card text-on-surface mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                {section.title}
              </h2>
              {section.content && (
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">{section.content}</p>
              )}
              {section.items && (
                <ul className="space-y-3 mt-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      <span className="font-body-main text-body-main text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* WhatsApp CTA Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-[0px_10px_25px_rgba(13,38,194,0.05)] border border-outline-variant/20">
            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-headline-card text-lg text-on-surface mb-1">Ada Pertanyaan?</h3>
              <p className="font-body-small text-body-small text-on-surface-variant">Hubungi kami langsung via WhatsApp untuk informasi lebih lanjut</p>
            </div>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-label-bold py-3.5 px-6 rounded-xl hover:bg-[#1da851] transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Info Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_10px_25px_rgba(13,38,194,0.05)] border border-outline-variant/20">
            <h3 className="font-headline-card text-lg text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>info</span>
              Informasi Penting
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">schedule</span>
                <div>
                  <p className="font-label-bold text-sm text-on-surface">Jam Operasional</p>
                  <p className="text-on-surface-variant text-sm">Senin - Jumat, 08.00 - 16.00 WIB</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">location_on</span>
                <div>
                  <p className="font-label-bold text-sm text-on-surface">Lokasi</p>
                  <p className="text-on-surface-variant text-sm">Lubang Panjang, Kec. Barangin, Kota Sawahlunto, Sumatera Barat 27422</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">payments</span>
                <div>
                  <p className="font-label-bold text-sm text-on-surface">Biaya</p>
                  <p className="text-on-surface-variant text-sm">Gratis (tidak dipungut biaya)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Back to Services */}
          <Link
            to="/layanan"
            className="flex items-center justify-center gap-2 w-full bg-surface-container-low text-on-surface font-label-bold py-3 px-6 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Semua Layanan
          </Link>
        </div>
      </div>
    </main>
  );
}
