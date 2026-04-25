import { useParams, Link } from 'react-router-dom';

const items = [
  { id: 1, type: 'Video', tag: 'Edukasi', title: 'Bahaya Narkoba Bagi Generasi Muda', body: 'Video edukasi ini menjelaskan secara lengkap mengenai dampak narkoba terhadap kesehatan fisik dan mental generasi muda Indonesia. Melalui penjelasan para ahli dan data statistik terkini, kita dapat memahami betapa berbahayanya penyalahgunaan narkotika bagi masa depan bangsa.', date: '15 Okt 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 2, type: 'Artikel', tag: 'Edukasi', title: 'Mengenal Jenis-jenis Narkotika dan Dampaknya', body: 'Narkotika diklasifikasikan menjadi tiga golongan berdasarkan tingkat potensi ketergantungannya. Golongan I memiliki potensi paling tinggi dan tidak digunakan dalam terapi medis, contohnya heroin, kokain, dan ganja. Golongan II berpotensi tinggi tetapi dapat digunakan untuk pengobatan dengan resep dokter, seperti morfin dan petidin. Golongan III memiliki potensi ringan dan banyak digunakan dalam terapi medis, seperti kodein.\n\nDampak penyalahgunaan narkotika sangat luas, mulai dari gangguan sistem saraf pusat, kerusakan organ hati dan ginjal, hingga gangguan kejiwaan. Pada remaja, dampaknya lebih parah karena otak masih dalam tahap perkembangan.', date: '12 Okt 2023' },
  { id: 3, type: 'Video', tag: 'Rehabilitasi', title: 'Proses Rehabilitasi di BNN Sawahlunto', body: 'Dokumentasi lengkap proses rehabilitasi medis dan sosial yang tersedia di fasilitas BNN Kota Sawahlunto. Video ini menampilkan tahapan-tahapan pemulihan mulai dari asesmen awal, detoksifikasi, terapi psikologis, hingga reintegrasi sosial.', date: '10 Okt 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 4, type: 'Artikel', tag: 'Hukum', title: 'Regulasi Terbaru UU Narkotika di Indonesia', body: 'Undang-Undang Nomor 35 Tahun 2009 tentang Narkotika merupakan landasan hukum utama dalam penanganan masalah narkotika di Indonesia. UU ini mengatur tentang klasifikasi narkotika, sanksi pidana bagi pelaku penyalahgunaan dan peredaran gelap, serta ketentuan mengenai rehabilitasi.\n\nBeberapa perubahan penting dalam regulasi terbaru mencakup penguatan aspek rehabilitasi bagi pengguna, peningkatan sanksi bagi pengedar, dan perluasan definisi prekursor narkotika.', date: '08 Okt 2023' },
  { id: 5, type: 'Video', tag: 'Pencegahan', title: 'Sosialisasi P4GN di Lingkungan Sekolah', body: 'Rekaman kegiatan sosialisasi pencegahan narkoba di berbagai sekolah menengah Kota Sawahlunto. Kegiatan ini melibatkan narasumber dari BNN dan praktisi kesehatan untuk memberikan pemahaman komprehensif kepada para pelajar.', date: '05 Okt 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 6, type: 'Artikel', tag: 'Kesehatan', title: 'Dampak Penyalahgunaan Narkoba pada Otak Remaja', body: 'Penelitian neurosains menunjukkan bahwa otak remaja sangat rentan terhadap efek merusak narkoba. Bagian prefrontal cortex yang bertanggung jawab atas pengambilan keputusan dan pengendalian impuls masih berkembang hingga usia 25 tahun.\n\nPaparan narkoba pada masa ini dapat menyebabkan kerusakan permanen pada jalur neural, mengganggu perkembangan kognitif, dan meningkatkan risiko gangguan mental jangka panjang.', date: '01 Okt 2023' },
  { id: 7, type: 'Artikel', tag: 'Pencegahan', title: 'Tips Orang Tua Melindungi Anak dari Narkoba', body: 'Peran orang tua sangat krusial dalam mencegah anak dari bahaya narkoba. Komunikasi terbuka menjadi kunci utama—ciptakan suasana di mana anak merasa nyaman untuk bercerita. Kenali teman-teman dan lingkungan pergaulan anak, serta berikan edukasi tentang bahaya narkoba sejak dini.\n\nSelain itu, libatkan anak dalam kegiatan positif seperti olahraga, seni, atau kegiatan komunitas untuk mengisi waktu luang mereka dengan hal-hal yang bermanfaat.', date: '28 Sep 2023' },
  { id: 8, type: 'Video', tag: 'Operasi', title: 'Tanda-tanda Penyalahgunaan Narkoba', body: 'Video edukasi mengenali perubahan perilaku seseorang yang terindikasi penyalahgunaan narkoba. Materi ini penting untuk orang tua, guru, dan masyarakat agar dapat melakukan deteksi dini.', date: '25 Sep 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 9, type: 'Artikel', tag: 'Rehabilitasi', title: 'Kisah Sukses Pemulihan Mantan Pecandu', body: 'Cerita inspiratif dari mereka yang berhasil pulih dari kecanduan narkoba dan kembali menjalani kehidupan produktif. Program rehabilitasi BNN telah membantu ratusan orang untuk mendapatkan kesempatan kedua dalam hidup.\n\nMelalui pendekatan holistik yang mencakup rehabilitasi medis, psikologis, dan sosial, para mantan pecandu berhasil membangun kembali hubungan keluarga dan karier mereka.', date: '20 Sep 2023' },
];

export default function InformationDetail() {
  const { id } = useParams();
  const item = items.find(i => i.id === Number(id));

  if (!item) {
    return (
      <main className="pt-20 md:pt-32 pb-xl px-4 sm:px-6 md:px-8 max-w-container-max mx-auto text-center">
        <h1 className="font-headline-section text-headline-section text-on-surface">Konten tidak ditemukan</h1>
        <Link to="/informasi" className="text-primary font-label-bold mt-4 inline-block">← Kembali ke Informasi</Link>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-[100px] pb-xl px-4 sm:px-6 md:px-8 max-w-container-max mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 sm:gap-2 text-body-small font-body-small text-on-surface-variant mb-6 md:mb-lg overflow-x-auto whitespace-nowrap">
        <Link className="hover:text-primary transition-colors shrink-0" to="/">Beranda</Link>
        <span className="material-symbols-outlined text-[16px] shrink-0">chevron_right</span>
        <Link className="hover:text-primary transition-colors shrink-0" to="/informasi">Informasi</Link>
        <span className="material-symbols-outlined text-[16px] shrink-0">chevron_right</span>
        <span className="text-on-surface truncate max-w-[180px] sm:max-w-none">{item.title}</span>
      </div>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-lg">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full font-label-bold text-label-bold text-[12px] ${item.type === 'Video' ? 'bg-surface-tint/10 text-surface-tint' : 'bg-primary-container/10 text-primary'}`}>
              {item.type === 'Video' ? '▶ Video' : item.tag}
            </span>
            <span className="text-body-small font-body-small text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              {item.date}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface mb-4 sm:mb-6 leading-snug">{item.title}</h1>
        </div>

        {/* YouTube Embed for Video */}
        {item.type === 'Video' && item.youtubeId && (
          <div className="w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-6 md:mb-lg shadow-[0px_10px_25px_rgba(13,38,194,0.05)]">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Body */}
        <div className="prose prose-sm sm:prose-lg max-w-none text-on-surface font-body-main text-body-main">
          {item.body.split('\n\n').map((para, idx) => (
            <p key={idx} className="text-[14px] sm:text-[15px] leading-relaxed text-on-surface-variant mb-4 sm:mb-6">{para}</p>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-outline-variant/30">
          <Link to="/informasi" className="font-label-bold text-label-bold text-primary flex items-center gap-2 hover:text-primary-fixed-variant transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Kembali ke Informasi
          </Link>
        </div>
      </article>
    </main>
  );
}
