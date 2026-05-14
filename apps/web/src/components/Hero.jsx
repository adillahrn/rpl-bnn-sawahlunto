import { Link } from 'react-router-dom';
import foto from "../assets/bnn.jpg";

export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-lg py-10 sm:py-16 md:py-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
        <div className="flex flex-col gap-5 sm:gap-8 z-10">
          <h1 className="font-display-hero text-[36px] sm:text-[48px] md:text-display-hero text-primary leading-tight">
            Bersama Lawan Narkoba
          </h1>
          <p className="font-headline-card text-[16px] sm:text-headline-card text-on-surface-variant max-w-2xl">
            BNN Kota Sawahlunto hadir untuk pencegahan, rehabilitasi, dan pemberantasan penyalahgunaan narkotika di lingkungan masyarakat Sawahlunto.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
            <Link to="/lapor" className="bg-secondary-container text-[#0b1c30] font-label-bold text-label-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-secondary-fixed transition-all shadow-sm text-center">
              Lapor Sekarang
            </Link>
            <Link to="/layanan" className="bg-surface-container text-on-surface font-label-bold text-label-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-surface-container-high transition-all text-center">
              Lihat Layanan
            </Link>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-[2rem] overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.1)]">
          <img className="w-full h-full object-cover object-center" alt="modern government building" src={foto}/>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
