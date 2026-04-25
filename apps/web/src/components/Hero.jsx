import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg py-10 sm:py-16 md:py-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
        <div className="flex flex-col gap-5 sm:gap-8 z-10">
          <h1 className="font-display-hero text-[36px] sm:text-[48px] md:text-display-hero text-primary leading-tight">
            Bersama Lawan Narkoba
          </h1>
          <p className="font-headline-card text-[16px] sm:text-headline-card text-on-surface-variant max-w-2xl">
            Badan Narkotika Nasional Kota Sawahlunto hadir untuk melindungi masyarakat melalui pencegahan, pemberantasan, dan rehabilitasi yang profesional dan humanis.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
            <Link to="/lapor" className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-secondary-fixed transition-all shadow-sm text-center">
              Lapor Sekarang
            </Link>
            <Link to="/layanan" className="bg-surface-container text-on-surface font-label-bold text-label-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-surface-container-high transition-all text-center">
              Lihat Layanan
            </Link>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-[2rem] overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.1)]">
          <img className="w-full h-full object-cover object-center" alt="modern government building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6PagmF_u8U3-9H1SOGy67-nrex0t94ynWFknYDdqHHKssPMnCqXqzCTdgKxdOuzULz9OGSk7A9ZMLELmAuWg9CCEo-j1LdWzyysiDaidCagYXZ6w92Oo-OdFZ6Xylnl-HvA_QpnVbmG9ruGtvlj6_ZJIrS23up1r-zq48sqvvOaHp1qEGpKLlLPA_Maik3XJfBb_jC0BeW0j_4L4BMkqkzdHBpKHbGypt0I-saR05gzFuJkJVmzp0f5be0dqn6D3Al2H7vIEBH8Oe"/>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
