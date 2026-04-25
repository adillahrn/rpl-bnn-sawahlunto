import { useRef } from 'react';

const members = [
  { role: 'Kepala BNN Kota Sawahlunto', name: 'Drs. Ahmad Fauzi, M.Si', icon: 'shield_person' },
  { role: 'Kepala Subbagian Umum', name: 'Siti Nurhaliza, S.E.', icon: 'admin_panel_settings' },
  { role: 'Kepala Seksi P2M', name: 'Budi Santoso, S.H.', icon: 'campaign' },
  { role: 'Kepala Seksi Rehabilitasi', name: 'Dr. Ratna Dewi, M.Kes', icon: 'healing' },
  { role: 'Kepala Seksi Pemberantasan', name: 'Irfan Hakim, S.H., M.H.', icon: 'security' },
];

export default function OrgStructure() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 sm:py-16 md:py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="font-headline-section text-[24px] sm:text-headline-section text-primary">Struktur Organisasi</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mt-1 sm:mt-2">Pejabat struktural BNN Kota Sawahlunto</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors shadow-sm">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors shadow-sm">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:-mx-0 sm:px-0">
          {members.map((m, idx) => (
            <div key={idx} className={`shrink-0 w-[260px] sm:w-[280px] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center snap-start transition-transform duration-300 hover:-translate-y-1 border ${idx === 0 ? 'bg-primary text-on-primary border-primary shadow-[0px_10px_25px_rgba(13,38,194,0.2)]' : 'bg-surface-container-lowest border-outline-variant/30 shadow-[0px_10px_25px_rgba(13,38,194,0.04)]'}`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${idx === 0 ? 'bg-white/15' : 'bg-primary-fixed'}`}>
                <span className={`material-symbols-outlined text-[32px] ${idx === 0 ? 'text-white' : 'text-primary'}`} style={{fontVariationSettings: "'FILL' 1"}}>{m.icon}</span>
              </div>
              <h3 className={`font-headline-card text-headline-card mb-2 ${idx === 0 ? '' : 'text-on-surface'}`}>{m.name}</h3>
              <p className={`font-body-small text-body-small ${idx === 0 ? 'text-inverse-primary' : 'text-on-surface-variant'}`}>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
