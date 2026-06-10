import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchInformationPaginated } from '../lib/sanity';

const filters = ['Semua', 'Video', 'Artikel'];
const PAGE_SIZE = 12;

const faqData = [
  { q: 'Apa itu Narkotika?', a: 'Narkotika adalah zat atau obat yang berasal dari tanaman atau bukan tanaman, baik sintetis maupun semisintetis, yang dapat menyebabkan penurunan atau perubahan kesadaran, hilangnya rasa nyeri, dan dapat menimbulkan ketergantungan. Contoh: ganja, kokain, heroin, dan morfin.' },
  { q: 'Apa perbedaan Narkotika Golongan I, II, dan III?', a: 'Golongan I: Berpotensi sangat tinggi menyebabkan ketergantungan dan tidak digunakan dalam terapi medis (contoh: heroin, kokain, ganja). Golongan II: Berpotensi tinggi tetapi bisa digunakan untuk pengobatan dengan resep dokter (contoh: morfin, petidin). Golongan III: Berpotensi ringan dan banyak digunakan dalam terapi medis (contoh: kodein).' },
  { q: 'Apa saja tanda-tanda penyalahgunaan narkoba?', a: 'Perubahan perilaku drastis, penurunan prestasi belajar/kerja, menarik diri dari lingkungan sosial, perubahan pola tidur dan makan, mata merah dan pupil membesar/mengecil, sering berbohong, dan perubahan emosi yang tidak stabil.' },
  { q: 'Apa itu Psikotropika?', a: 'Psikotropika adalah zat atau obat yang bukan narkotika, yang bekerja pada sistem saraf pusat dan mempengaruhi aktivitas mental serta perilaku. Contoh: amfetamin, ekstasi, diazepam (valium), dan fenobarbital.' },
  { q: 'Bagaimana cara pencegahan penyalahgunaan narkoba?', a: 'Meningkatkan pengetahuan tentang bahaya narkoba, memperkuat hubungan keluarga, menghindari pergaulan yang berisiko, mengisi waktu dengan kegiatan positif, tidak menerima pemberian dari orang yang tidak dikenal, dan segera melapor jika menemukan indikasi peredaran narkoba.' },
  { q: 'Apa itu Rehabilitasi Narkotika?', a: 'Rehabilitasi adalah proses pemulihan bagi pengguna narkoba agar dapat kembali ke fungsi sosialnya. Terdiri dari rehabilitasi medis (detoksifikasi dan pengobatan) serta rehabilitasi sosial (bimbingan mental, spiritual, dan keterampilan hidup). BNN menyediakan layanan ini secara gratis.' },
];

export default function InformationPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get('page')) || 1;

  const [activeFilter, setActiveFilter] = useState('Semua');
  const [openFaq, setOpenFaq] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchInformationPaginated(currentPage, PAGE_SIZE, activeFilter);
        setItems(data.items || []);
        setTotalItems(data.total || 0);
        setTotalPages(Math.max(1, Math.ceil((data.total || 0) / PAGE_SIZE)));
      } catch (error) {
        console.error('Error fetching information:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [currentPage, activeFilter]);

  // Sync page to URL
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (currentPage > 1) {
      params.set('page', currentPage.toString());
    } else {
      params.delete('page');
    }
    setSearchParams(params, { replace: true });
  }, [currentPage]);

  // Reset to page 1 when filter changes
  const handleFilterChange = (f) => {
    setActiveFilter(f);
    setCurrentPage(1);
    setSearchQuery('');
  };

  // Client-side search within current page results
  const filtered = items.filter(i => {
    if (!searchQuery) return true;
    return i.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           i.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <main className="pt-20 md:pt-32 pb-12 md:pb-xl">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-headline-section text-headline-section text-primary">Edukasi</h1>
          <p className="font-body-main text-body-main text-on-surface-variant mt-1 sm:mt-2">Edukasi dan informasi seputar narkotika untuk masyarakat</p>
        </div>

        {/* Filter + Search Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-10">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => handleFilterChange(f)}
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

          {/* Search */}
          <div className="w-full sm:w-auto relative shrink-0">
            <input
              type="text"
              placeholder="Cari informasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-72 md:w-80 bg-surface-container-lowest border border-outline-variant rounded-full py-2.5 sm:py-3 pl-11 sm:pl-12 pr-5 sm:pr-6 text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm"
            />
            <span className="material-symbols-outlined absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] sm:text-[24px]">search</span>
          </div>
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
                        {isVideo ? '▶ Video' :    (item.category
                                  ? item.category.charAt(0).toUpperCase() + item.category.slice(1)
                                  : 'Artikel')}
                      </span>
                      <span className="font-body-small text-body-small text-on-surface-variant text-xs">{formatDate(item.publishedAt)}</span>
                    </div>
                    <h3 className="font-headline-card text-[16px] sm:text-headline-card text-on-surface mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-3">{item.title}</h3>
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

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <nav className="flex items-center justify-center gap-1.5 sm:gap-2 mt-10 md:mt-14" aria-label="Pagination">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full font-label-bold text-label-bold transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary disabled:hover:border-outline-variant disabled:hover:text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              <span className="hidden sm:inline">Sebelumnya</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, idx) =>
                page === '...' ? (
                  <span key={`ellipsis-${idx}`} className="px-2 py-2 text-on-surface-variant select-none">…</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[36px] sm:min-w-[40px] h-9 sm:h-10 rounded-full font-label-bold text-label-bold transition-all active:scale-95 ${
                      currentPage === page
                        ? 'bg-primary text-on-primary shadow-md'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* Next */}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full font-label-bold text-label-bold transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary disabled:hover:border-outline-variant disabled:hover:text-on-surface-variant"
            >
              <span className="hidden sm:inline">Selanjutnya</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </nav>
        )}

        {/* Results info */}
        {!isLoading && totalItems > 0 && (
          <p className="text-center text-on-surface-variant text-sm mt-4">
            Menampilkan {((currentPage - 1) * PAGE_SIZE) + 1}–{Math.min(currentPage * PAGE_SIZE, totalItems)} dari {totalItems} informasi
          </p>
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
