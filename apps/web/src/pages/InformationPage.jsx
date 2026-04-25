import { useState } from 'react';
import { Link } from 'react-router-dom';

const filters = ['Semua', 'Video', 'Artikel'];

const items = [
  { id: 1, type: 'Video', tag: 'Edukasi', title: 'Bahaya Narkoba Bagi Generasi Muda', desc: 'Penjelasan lengkap mengenai dampak narkoba terhadap kesehatan fisik dan mental generasi muda Indonesia.', date: '15 Okt 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 2, type: 'Artikel', tag: 'Edukasi', title: 'Mengenal Jenis-jenis Narkotika dan Dampaknya', desc: 'Panduan lengkap mengenai klasifikasi narkotika golongan I, II, III serta dampak jangka pendek dan panjang bagi kesehatan.', date: '12 Okt 2023' },
  { id: 3, type: 'Video', tag: 'Rehabilitasi', title: 'Proses Rehabilitasi di BNN Sawahlunto', desc: 'Dokumentasi proses rehabilitasi medis dan sosial yang tersedia di fasilitas BNN Kota Sawahlunto.', date: '10 Okt 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 4, type: 'Artikel', tag: 'Hukum', title: 'Regulasi Terbaru UU Narkotika di Indonesia', desc: 'Rangkuman perubahan penting dalam regulasi narkotika terbaru dan implikasinya bagi masyarakat.', date: '08 Okt 2023' },
  { id: 5, type: 'Video', tag: 'Pencegahan', title: 'Sosialisasi P4GN di Lingkungan Sekolah', desc: 'Rekaman kegiatan sosialisasi pencegahan narkoba di berbagai sekolah menengah Kota Sawahlunto.', date: '05 Okt 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 6, type: 'Artikel', tag: 'Kesehatan', title: 'Dampak Penyalahgunaan Narkoba pada Otak Remaja', desc: 'Studi ilmiah menunjukkan kerusakan permanen yang terjadi pada otak remaja akibat penyalahgunaan zat adiktif.', date: '01 Okt 2023' },
  { id: 7, type: 'Artikel', tag: 'Pencegahan', title: 'Tips Orang Tua Melindungi Anak dari Narkoba', desc: 'Langkah-langkah praktis yang bisa dilakukan orang tua untuk menghindarkan anak dari bahaya narkoba.', date: '28 Sep 2023' },
  { id: 8, type: 'Video', tag: 'Operasi', title: 'Tanda-tanda Penyalahgunaan Narkoba', desc: 'Video edukasi mengenali perubahan perilaku seseorang yang terindikasi penyalahgunaan narkoba.', date: '25 Sep 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 9, type: 'Artikel', tag: 'Rehabilitasi', title: 'Kisah Sukses Pemulihan Mantan Pecandu', desc: 'Cerita inspiratif dari mereka yang berhasil pulih dan kembali menjalani kehidupan produktif.', date: '20 Sep 2023' },
];

const faqData = [
  { q: 'Apa itu Narkotika?', a: 'Narkotika adalah zat atau obat yang berasal dari tanaman atau bukan tanaman, baik sintetis maupun semisintetis, yang dapat menyebabkan penurunan atau perubahan kesadaran, hilangnya rasa nyeri, dan dapat menimbulkan ketergantungan. Contoh: ganja, kokain, heroin, dan morfin.' },
  { q: 'Apa perbedaan Narkotika Golongan I, II, dan III?', a: 'Golongan I: Berpotensi sangat tinggi menyebabkan ketergantungan dan tidak digunakan dalam terapi medis (contoh: heroin, kokain, ganja). Golongan II: Berpotensi tinggi tetapi bisa digunakan untuk pengobatan dengan resep dokter (contoh: morfin, petidin). Golongan III: Berpotensi ringan dan banyak digunakan dalam terapi medis (contoh: kodein).' },
  { q: 'Apa saja tanda-tanda penyalahgunaan narkoba?', a: 'Perubahan perilaku drastis, penurunan prestasi belajar/kerja, menarik diri dari lingkungan sosial, perubahan pola tidur dan makan, mata merah dan pupil membesar/mengecil, sering berbohong, dan perubahan emosi yang tidak stabil.' },
  { q: 'Apa itu Psikotropika?', a: 'Psikotropika adalah zat atau obat yang bukan narkotika, yang bekerja pada sistem saraf pusat dan mempengaruhi aktivitas mental serta perilaku. Contoh: amfetamin, ekstasi, diazepam (valium), dan fenobarbital.' },
  { q: 'Bagaimana cara pencegahan penyalahgunaan narkoba?', a: 'Meningkatkan pengetahuan tentang bahaya narkoba, memperkuat hubungan keluarga, menghindari pergaulan yang berisiko, mengisi waktu dengan kegiatan positif, tidak menerima pemberian dari orang yang tidak dikenal, dan segera melapor jika menemukan indikasi peredaran narkoba.' },
  { q: 'Apa itu Rehabilitasi Narkotika?', a: 'Rehabilitasi adalah proses pemulihan bagi pengguna narkoba agar dapat kembali ke fungsi sosialnya. Terdiri dari rehabilitasi medis (detoksifikasi dan pengobatan) serta rehabilitasi sosial (bimbingan mental, spiritual, dan keterampilan hidup). BNN menyediakan layanan ini secara gratis.' },
];

export default function InformationPage() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [openFaq, setOpenFaq] = useState(null);

  const filtered = activeFilter === 'Semua' ? items : items.filter(i => i.type === activeFilter);

  return (
    <main className="pt-20 md:pt-32 pb-12 md:pb-xl">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-headline-section text-headline-section text-primary">Informasi</h1>
          <p className="font-body-main text-body-main text-on-surface-variant mt-1 sm:mt-2">Edukasi dan informasi seputar narkotika untuk masyarakat</p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 md:mb-10 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full font-label-bold text-label-bold whitespace-nowrap transition-all active:scale-95 flex items-center gap-1.5 ${
                activeFilter === f
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
            >
              {f === 'Video' && <span className="material-symbols-outlined text-[16px]">play_circle</span>}
              {f === 'Artikel' && <span className="material-symbols-outlined text-[16px]">article</span>}
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {filtered.map((item) => (
            <article key={item.id} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.04)] border border-surface-container group flex flex-col">
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className={`font-label-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full ${
                    item.type === 'Video'
                      ? 'bg-surface-tint/10 text-surface-tint'
                      : 'bg-primary-container/10 text-primary'
                  }`}>
                    {item.type === 'Video' ? '▶ Video' : item.tag}
                  </span>
                  <span className="font-body-small text-body-small text-on-surface-variant text-xs">{item.date}</span>
                </div>
                <h3 className="font-headline-card text-[16px] sm:text-headline-card text-on-surface mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                <p className="font-body-small text-body-small text-on-surface-variant line-clamp-2 mb-3 sm:mb-4">{item.desc}</p>
                <Link
                  to={`/informasi/${item.id}`}
                  className="font-label-bold text-label-bold text-primary flex items-center gap-base mt-auto hover:text-primary-fixed-variant transition-colors"
                >
                  {item.type === 'Video' ? 'Tonton Video' : 'Baca Selengkapnya'}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Ensiklopedia Narkotika (FAQ) */}
        <section className="mt-16 md:mt-24">
          <div className="mb-8">
            <h2 className="font-headline-section text-headline-section text-primary">Ensiklopedia Narkotika</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mt-1 sm:mt-2">Informasi penting seputar narkotika yang perlu Anda ketahui</p>
          </div>
          <div className="space-y-3">
            {faqData.map((item, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-xl sm:rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4"
                >
                  <span className="font-headline-card text-[15px] sm:text-[17px] text-on-surface leading-snug">{item.q}</span>
                  <span className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 pb-5 sm:pb-6' : 'max-h-0'}`}>
                  <p className="px-5 sm:px-6 font-body-main text-body-main text-on-surface-variant leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
