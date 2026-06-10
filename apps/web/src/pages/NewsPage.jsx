import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchNewsPaginated } from '../lib/sanity';

const categories = ['Semua', 'Sosialisasi', 'Rehabilitasi', 'Operasi', 'Kegiatan', 'Pengumuman'];
const PAGE_SIZE = 12;

export default function NewsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get('page')) || 1;

  const [activeFilter, setActiveFilter] = useState('Semua');
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchNewsPaginated(currentPage, PAGE_SIZE, activeFilter);
        setNews(data.items || []);
        setTotalItems(data.total || 0);
        setTotalPages(Math.max(1, Math.ceil((data.total || 0) / PAGE_SIZE)));
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadNews();
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
  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    setCurrentPage(1);
    setSearchQuery('');
  };

  // Client-side search within current page results
  const filteredNews = news.filter(item => {
    if (!searchQuery) return true;
    return item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const cat = (category || '').toLowerCase();
    if (cat === 'sosialisasi') return 'bg-primary-container/10 text-primary';
    if (cat === 'operasi') return 'bg-secondary-container/20 text-on-secondary-fixed-variant';
    return 'bg-surface-tint/10 text-surface-tint';
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
          <h1 className="font-headline-section text-headline-section text-primary">Berita Terbaru</h1>
          <p className="font-body-main text-body-main text-on-surface-variant mt-1 sm:mt-2">Informasi terkini kegiatan BNN Kota Sawahlunto</p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-10">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-4 py-2 rounded-full font-label-bold text-label-bold whitespace-nowrap transition-all active:scale-95 ${
                  activeFilter === cat
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full sm:w-auto relative shrink-0">
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-72 md:w-80 bg-surface-container-lowest border border-outline-variant rounded-full py-2.5 sm:py-3 pl-11 sm:pl-12 pr-5 sm:pr-6 text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm"
            />
            <span className="material-symbols-outlined absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] sm:text-[24px]">search</span>
          </div>
        </div>

        {/* 3x4 Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {filteredNews.map((item) => (
              <Link to={`/berita/${item.slug?.current}`} key={item._id} className="block group">
                <article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.04)] border border-surface-container flex flex-col h-full hover:shadow-lg transition-all duration-300">
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-surface-container-high">
                    {item.imageUrl ? (
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} src={item.imageUrl}/>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-4xl">image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className={`font-label-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full capitalize ${getCategoryColor(item.category)}`}>
                        {item.category || 'Umum'}
                      </span>
                      <span className="font-body-small text-body-small text-on-surface-variant text-xs">{formatDate(item.publishedAt)}</span>
                    </div>
                    <h3 className="font-headline-card text-[16px] sm:text-headline-card text-on-surface mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-3">
                      {item.title}
                    </h3>
                    <p className="font-body-small text-body-small text-on-surface-variant line-clamp-2 mb-3 sm:mb-4">
                      {item.excerpt}
                    </p>
                    <div className="font-label-bold text-label-bold text-primary flex items-center gap-base mt-auto group-hover:text-primary-fixed-variant transition-colors">
                      Baca Selengkapnya <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface-container-lowest rounded-2xl border border-outline-variant">
            <span className="material-symbols-outlined text-6xl text-outline mb-4">article</span>
            <h3 className="font-headline-card text-xl text-on-surface mb-2">Belum ada berita</h3>
            <p className="text-on-surface-variant">Belum ada berita yang diterbitkan untuk kategori ini.</p>
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
            Menampilkan {((currentPage - 1) * PAGE_SIZE) + 1}–{Math.min(currentPage * PAGE_SIZE, totalItems)} dari {totalItems} berita
          </p>
        )}

      </div>
    </main>
  );
}
