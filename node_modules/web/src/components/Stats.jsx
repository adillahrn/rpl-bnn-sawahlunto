import useCountUp from '../hooks/useCountUp';

function StatCard({ icon, end, suffix = '', label, variant = 'default' }) {
  const { ref, count } = useCountUp(end, 2200);

  const variants = {
    primary: {
      container: 'bg-primary text-on-primary',
      overlay: 'bg-white/5',
      icon: 'opacity-80',
      number: '',
      label: 'text-inverse-primary',
    },
    default: {
      container: 'bg-surface-container text-on-surface',
      overlay: 'bg-primary/5',
      icon: 'text-primary opacity-80',
      number: 'text-primary',
      label: 'text-primary',
    },
    secondary: {
      container: 'bg-secondary-container text-on-secondary-container',
      overlay: 'bg-black/5',
      icon: 'opacity-80',
      number: '',
      label: 'text-on-secondary-container',
    },
  };

  const v = variants[variant] || variants.default;

  return (
    <div
      ref={ref}
      className={`${v.container} p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group`}
    >
      <div className={`absolute inset-0 ${v.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <span
        className={`material-symbols-outlined text-4xl sm:text-5xl mb-3 sm:mb-4 ${v.icon} relative z-10`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
      <span className={`font-display-hero text-[40px] sm:text-display-hero ${v.number} relative z-10 tabular-nums`}>
        {count}{suffix}
      </span>
      <span className={`font-label-bold text-label-bold mt-2 ${v.label} relative z-10`}>{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg py-10 sm:py-16 md:py-xl">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-headline-section text-[24px] sm:text-headline-section text-primary">Capaian Kami</h2>
        <p className="font-body-main text-body-main text-on-surface-variant mt-2">Data statistik penanganan dan pencegahan di Kota Sawahlunto</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <StatCard icon="security" end={142} label="Kasus Terungkap" variant="primary" />
        <StatCard icon="campaign" end={850} suffix="+" label="Kegiatan Sosialisasi" variant="default" />
        <StatCard icon="healing" end={56} label="Klien Rehabilitasi" variant="secondary" />
      </div>
    </section>
  );
}
