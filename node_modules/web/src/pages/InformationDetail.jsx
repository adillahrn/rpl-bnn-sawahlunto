import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchInformationBySlug } from '../lib/sanity';
import { PortableText } from '@portabletext/react';

export default function InformationDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadItem = async () => {
      setIsLoading(true);
      try {
        const data = await fetchInformationBySlug(slug);
        setItem(data);
      } catch (error) {
        console.error('Error fetching information detail:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (slug) {
      loadItem();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <main className="pt-20 md:pt-[100px] pb-xl flex justify-center items-center min-h-[50vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="pt-20 md:pt-32 pb-xl px-4 sm:px-6 md:px-8 max-w-container-max mx-auto text-center min-h-[50vh] flex flex-col justify-center items-center">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">error</span>
        <h1 className="font-headline-section text-headline-section text-on-surface">Konten tidak ditemukan</h1>
        <p className="text-on-surface-variant mb-6">Maaf, informasi yang Anda cari tidak tersedia.</p>
        <Link to="/informasi" className="text-primary font-label-bold mt-4 inline-block bg-primary-container/20 px-6 py-2 rounded-lg">← Kembali ke Informasi</Link>
      </main>
    );
  }

  const isVideo = item.mediaType === 'youtube' || item.mediaType === 'video';
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  // Extract YouTube ID if it's a youtube link
  const getYoutubeId = (url) => {
    if (!url) return null;
    const match = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
    return match ? match[1] : null;
  };
  const youtubeId = item.mediaType === 'youtube' ? getYoutubeId(item.mediaUrl) : null;

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
            <span className={`px-3 py-1 rounded-full font-label-bold text-label-bold text-[12px] capitalize ${isVideo ? 'bg-surface-tint/10 text-surface-tint' : 'bg-primary-container/10 text-primary'}`}>
              {isVideo ? '▶ Video' : (item.category || 'Artikel')}
            </span>
            <span className="text-body-small font-body-small text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              {formatDate(item.publishedAt)}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface mb-4 sm:mb-6 leading-snug">{item.title}</h1>
        </div>

        {/* YouTube Embed for Video */}
        {item.mediaType === 'youtube' && youtubeId && (
          <div className="w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-6 md:mb-lg shadow-[0px_10px_25px_rgba(13,38,194,0.05)]">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Fallback image if article has one and no video is present */}
        {!isVideo && item.imageUrl && (
          <div className="w-full aspect-video sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-6 md:mb-lg shadow-[0px_10px_25px_rgba(13,38,194,0.05)] bg-surface-container-high">
            <img alt={item.title} className="w-full h-full object-cover" src={item.imageUrl}/>
          </div>
        )}

        {/* Body */}
        <div className="prose prose-sm sm:prose-lg max-w-none text-on-surface font-body-main text-body-main">
          {item.body ? (
            <PortableText value={item.body} />
          ) : (
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-on-surface-variant mb-4 sm:mb-6">{item.excerpt}</p>
          )}
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
