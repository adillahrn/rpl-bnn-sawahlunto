import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchNews } from '../lib/sanity';

export default function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchNews(3);
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadNews();
  }, []);

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

  return (
    <section className="bg-surface py-xl">
      <div className="max-w-container-max mx-auto px-6 md:px-lg">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-headline-section text-headline-section text-primary">Berita Terbaru</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mt-2">Informasi terkini kegiatan BNN Kota Sawahlunto</p>
          </div>
          <Link className="hidden sm:flex items-center gap-2 font-label-bold text-label-bold text-primary hover:text-primary-fixed-variant transition-colors" to="/berita">
            Lihat Semua <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link to={`/berita/${item.slug?.current}`} key={item._id} className="block group">
                <article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.04)] border border-surface-container flex flex-col h-full hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden bg-surface-container-high">
                    {item.imageUrl ? (
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} src={item.imageUrl}/>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-4xl">image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`font-label-bold text-[12px] px-3 py-1 rounded-full capitalize ${getCategoryColor(item.category)}`}>
                        {item.category || 'Umum'}
                      </span>
                      <span className="font-body-small text-body-small text-on-surface-variant text-xs">{formatDate(item.publishedAt)}</span>
                    </div>
                    <h3 className="font-headline-card text-headline-card text-on-surface mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="font-body-small text-body-small text-on-surface-variant line-clamp-2 mb-4">{item.excerpt}</p>
                    <div className="font-label-bold text-label-bold text-primary flex items-center gap-base mt-auto group-hover:text-primary-fixed-variant transition-colors">
                      Baca Selengkapnya <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-surface-container-lowest rounded-2xl border border-outline-variant">
            <p className="text-on-surface-variant">Belum ada berita yang diterbitkan.</p>
          </div>
        )}
      </div>
    </section>
  );
}
