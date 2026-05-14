import { useState, useEffect, useRef, useCallback } from 'react';

const members = [
  {
    role: 'Kepala BNN Kota Sawahlunto',
    name: 'AKBP. Didit Bagus Wicaksono',
    photo: '/src/assets/KepalaBNN.png.png',
  },
  {
    role: 'Kepala Subbagian Umum',
    name: 'Ilham, S.IP.',
    photo: '/src/assets/KasubbagUmum.png',
  },
  {
    role: 'Kepala Seksi P2M',
    name: 'Hesti Damayanti, S.I.Kom.',
    photo: '/src/assets/KasiP2M.png',
  },
  {
    role: 'Kepala Seksi Rehabilitasi',
    name: 'Lusiana Sari Handayani, S.E., M.Si.',
    photo: '/src/assets/KasiRehabilitasi.png',
  },
  {
    role: 'Kepala Seksi Pemberantasan',
    name: 'Andrico, S.H.',
    photo: '/src/assets/KasiPemberantasan.png',
  },
];

export default function OrgStructure() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const totalSlides = members.length;

  const goTo = useCallback((idx) => {
    setActiveIndex(idx);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, 3500);
    return () => clearInterval(intervalRef.current);
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
    <section className="py-10 sm:py-16 md:py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="font-headline-section text-[24px] sm:text-headline-section text-primary">Struktur Organisasi</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mt-1 sm:mt-2">Pejabat struktural BNN Kota Sawahlunto</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={prev} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors shadow-sm">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={next} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors shadow-sm">
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
          {members.map((m, idx) => (
            <div
              key={idx}
              onClick={() => goTo(idx)}
              className={`shrink-0 w-[240px] sm:w-[260px] rounded-2xl overflow-hidden flex flex-col items-center text-center snap-start transition-all duration-500 cursor-pointer border ${
                idx === activeIndex
                  ? 'bg-primary text-on-primary border-primary shadow-[0px_12px_30px_rgba(13,38,194,0.25)] scale-[1.03]'
                  : 'bg-surface-container-lowest border-outline-variant/30 shadow-[0px_10px_25px_rgba(13,38,194,0.04)] hover:-translate-y-1'
              }`}
            >
              {/* Photo */}
              <div className="w-full h-[200px] sm:h-[220px] overflow-hidden relative">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  idx === activeIndex
                    ? 'bg-gradient-to-t from-primary/40 to-transparent'
                    : 'bg-gradient-to-t from-black/10 to-transparent'
                }`}></div>
              </div>
              {/* Info */}
              <div className="p-5 sm:p-6">
                <h3 className={`font-headline-card text-headline-card mb-1.5 ${idx === activeIndex ? '' : 'text-on-surface'}`}>
                  {m.name}
                </h3>
                <p className={`font-body-small text-body-small ${idx === activeIndex ? 'text-inverse-primary' : 'text-on-surface-variant'}`}>
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {members.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-outline-variant hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
