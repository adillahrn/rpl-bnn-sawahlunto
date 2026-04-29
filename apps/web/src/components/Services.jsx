import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'science',
    title: 'Tes Urine',
    desc: 'Layanan deteksi dini penyalahgunaan narkotika melalui pengujian sampel urine secara akurat, profesional, dan rahasia.',
  },
  {
    icon: 'healing',
    title: 'Rehabilitasi',
    desc: 'Program pemulihan medis dan sosial terpadu bagi pecandu dan korban penyalahgunaan narkotika.',
  },
  {
    icon: 'campaign',
    title: 'Sosialisasi P4GN',
    desc: 'Penyuluhan dan edukasi komprehensif mengenai bahaya narkoba untuk sekolah, instansi, dan masyarakat umum.',
  },
  {
    icon: 'description',
    title: 'Penerbitan SKHPN',
    desc: 'Layanan resmi penerbitan Surat Keterangan Hasil Pemeriksaan Narkotika untuk keperluan administrasi dan legal.',
  },
  {
    icon: 'report_problem',
    title: 'Pengaduan Masyarakat',
    desc: 'Saluran aman dan terpercaya untuk melaporkan indikasi penyalahgunaan atau peredaran gelap narkotika.',
  },
  {
    icon: 'psychology',
    title: 'Konseling Adiksi',
    desc: 'Layanan konsultasi psikologis gratis bagi individu maupun keluarga terkait masalah adiksi.',
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Show 3 cards at once on desktop, 1 on mobile
  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  // Scroll to active card
  useEffect(() => {
    if (trackRef.current) {
      const card = trackRef.current.children[activeIndex];
      if (card) {
        const containerWidth = trackRef.current.offsetWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        trackRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  return (
    <section className="py-10 sm:py-16 md:py-xl">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="font-headline-section text-[24px] sm:text-headline-section text-primary">Layanan Kami</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mt-1 sm:mt-2">Pelayanan prima untuk masyarakat Kota Sawahlunto</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:-mx-0 sm:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className={`shrink-0 w-[280px] sm:w-[320px] p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] flex flex-col snap-start transition-all duration-500 border cursor-pointer ${
                idx === activeIndex
                  ? 'bg-primary text-on-primary border-primary shadow-[0px_12px_30px_rgba(13,38,194,0.2)] scale-[1.02]'
                  : 'bg-surface-container-low border-surface-container hover:-translate-y-1'
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-5 ${
                idx === activeIndex ? 'bg-white/15' : 'bg-white text-primary'
              }`}>
                <span
                  className={`material-symbols-outlined ${idx === activeIndex ? 'text-white' : ''}`}
                  style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1" }}
                >
                  {svc.icon}
                </span>
              </div>
              <h3 className={`font-headline-card text-headline-card mb-2.5 ${
                idx === activeIndex ? '' : 'text-on-surface'
              }`}>
                {svc.title}
              </h3>
              <p className={`font-body-small text-body-small mb-5 flex-grow ${
                idx === activeIndex ? 'text-inverse-primary' : 'text-on-surface-variant'
              }`}>
                {svc.desc}
              </p>
              <Link
                className={`inline-flex items-center gap-2 font-label-bold text-label-bold group ${
                  idx === activeIndex ? 'text-white hover:text-inverse-primary' : 'text-primary hover:underline'
                }`}
                to="/layanan"
              >
                Info Detail
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-outline-variant hover:bg-primary/50'
              }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
