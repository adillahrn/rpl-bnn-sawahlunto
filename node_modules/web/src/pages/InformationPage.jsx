import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchInformation } from '../lib/sanity';

const filters = ['Semua', 'Video', 'Artikel'];

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
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchInformation(20);
        setItems(data);
      } catch (error) {
        console.error('Error fetching information:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const filtered = activeFilter === 'Semua' 
    ? items 
    : items.filter(i => {
        const type = i.mediaType === 'youtube' || i.mediaType === 'video' ? 'Video' : 'Artikel';
        return type === activeFilter;
      });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

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
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {filtered.map((item) => {
              const isVideo = item.mediaType === 'youtube' || item.mediaType === 'video';
              return (
                <article key={item._id} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.04)] border border-surface-container group flex flex-col">
                  {item.imageUrl && (
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-surface-container-high">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} src={item.imageUrl}/>
                    </div>
                  )}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className={`font-label-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full ${
                        isVideo
                          ? 'bg-surface-tint/10 text-surface-tint'
                          : 'bg-primary-container/10 text-primary'
                      }`}>
                        {isVideo ? '▶ Video' : (item.category || 'Artikel')}
                      </span>
                      <span className="font-body-small text-body-small text-on-surface-variant text-xs">{formatDate(item.publishedAt)}</span>
                    </div>
                    <h3 className="font-headline-card text-[16px] sm:text-headline-card text-on-surface mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                    <p className="font-body-small text-body-small text-on-surface-variant line-clamp-2 mb-3 sm:mb-4">{item.excerpt}</p>
                    <Link
                      to={`/informasi/${item.slug?.current}`}
                      className="font-label-bold text-label-bold text-primary flex items-center gap-base mt-auto hover:text-primary-fixed-variant transition-colors"
                    >
                      {isVideo ? 'Tonton Video' : 'Baca Selengkapnya'}
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface-container-lowest rounded-2xl border border-outline-variant">
            <span className="material-symbols-outlined text-6xl text-outline mb-4">info</span>
            <h3 className="font-headline-card text-xl text-on-surface mb-2">Belum ada informasi</h3>
            <p className="text-on-surface-variant">Belum ada informasi atau edukasi untuk kategori ini.</p>
          </div>
        )}

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
