import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchNewsBySlug } from '../lib/sanity';
import { PortableText } from '@portabletext/react';

export default function NewsDetail() {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchNewsBySlug(slug);
        setNews(data);
      } catch (error) {
        console.error('Error fetching news detail:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (slug) {
      loadNews();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <main className="pt-20 md:pt-[100px] pb-xl flex justify-center items-center min-h-[50vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  if (!news) {
    return (
      <main className="pt-20 md:pt-[100px] pb-xl px-4 text-center min-h-[50vh] flex flex-col justify-center items-center">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">error</span>
        <h1 className="font-headline-section text-2xl text-on-surface mb-2">Berita tidak ditemukan</h1>
        <p className="text-on-surface-variant mb-6">Maaf, berita yang Anda cari tidak tersedia.</p>
        <Link to="/berita" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-bold">
          Kembali ke Berita
        </Link>
      </main>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const cat = (category || '').toLowerCase();
    if (cat === 'sosialisasi') return 'bg-primary-container text-on-primary-container';
    if (cat === 'operasi') return 'bg-secondary-container text-on-secondary-container';
    return 'bg-surface-tint/20 text-surface-tint';
  };

  return (
    <main className="pt-20 md:pt-[100px] pb-xl px-4 sm:px-6 md:px-8 max-w-container-max mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 sm:gap-2 text-body-small font-body-small text-on-surface-variant mb-6 md:mb-lg overflow-x-auto whitespace-nowrap">
        <Link className="hover:text-primary transition-colors shrink-0" to="/">Beranda</Link>
        <span className="material-symbols-outlined text-[16px] shrink-0">chevron_right</span>
        <Link className="hover:text-primary transition-colors shrink-0" to="/berita">Berita</Link>
        <span className="material-symbols-outlined text-[16px] shrink-0">chevron_right</span>
        <span className="text-on-surface truncate max-w-[180px] sm:max-w-none">{news.title}</span>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        <div className="mb-6 md:mb-lg">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full font-label-bold text-label-bold text-[12px] capitalize ${getCategoryColor(news.category)}`}>
              {news.category || 'Umum'}
            </span>
            <span className="text-body-small font-body-small text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              {formatDate(news.publishedAt)}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface mb-4 sm:mb-6 leading-snug">
            {news.title}
          </h1>

          {/* Author & Share */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-outline-variant/30 pb-4 sm:pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden shrink-0 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">BNN Kota Sawahlunto</p>
                <p className="font-body-small text-body-small text-on-surface-variant">Admin</p>
              </div>
            </div>
            {/* Social Share */}
            <div className="flex items-center gap-2">
              <span className="font-body-small text-body-small text-on-surface-variant mr-1 sm:mr-2">Bagikan:</span>
              <button aria-label="Share" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {news.imageUrl && (
          <div className="w-full aspect-video sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-6 md:mb-lg shadow-[0px_10px_25px_rgba(13,38,194,0.05)] bg-surface-container-high">
            <img alt={news.title} className="w-full h-full object-cover" src={news.imageUrl}/>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-sm sm:prose-lg max-w-none text-on-surface font-body-main text-body-main">
          {news.body ? (
            <PortableText value={news.body} />
          ) : (
            <p className="lead text-[14px] sm:text-[15px] leading-relaxed text-on-surface-variant mb-6 font-medium">
              {news.excerpt || 'Tidak ada konten.'}
            </p>
          )}
        </div>
      </article>
    </main>
  );
}
