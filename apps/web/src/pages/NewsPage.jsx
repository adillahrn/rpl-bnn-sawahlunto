import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['Semua', 'Sosialisasi', 'Rehabilitasi', 'Operasi'];

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('Semua');

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
                onClick={() => setActiveFilter(cat)}
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
              className="w-full sm:w-72 md:w-80 bg-surface-container-lowest border border-outline-variant rounded-full py-2.5 sm:py-3 pl-11 sm:pl-12 pr-5 sm:pr-6 text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm"
            />
            <span className="material-symbols-outlined absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] sm:text-[24px]">search</span>
          </div>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <article key={item} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.04)] border border-surface-container group flex flex-col">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="kegiatan bnn" src={item % 3 === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuD4rc60plW0EROPCpMePB2almB00wxtWif6IeVR1JIZE2C5JhGwzNUirn49HYODiBqCL1RB31kpRt17HttiS5M5Wc8wwEteJ-zXWekYJ8O-CTKLm8SbNDRMhSl1pHJoA0BqPlsJFkdWMIm1UZnqbZv5Zw2hcfg1xwplz0qInnLU9hcsCf6v4DIvOJ0eY1yPcwpd8nTHCshpabtTVvYe-o1Vj0ubDg81ZV4aerXhRqIxN7yUV298el-YvEH5eHyxOjD6jsUgFNgwGRFh" : item % 3 === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAUMteiVj9eedky3IfCe6gvVz5djWqVA1N2oPqvMG0sWuUcS_84oq-stx3hgqroeh_nASxWKPB0UGicd0N8lMyeHRUIXKROJ1t7ppXhSA3kMQVzdqbQdKMCLzBCV3SGbV4XG6hgsy1g8BlDNzr9KYJsiR-2gBS43QBi0qDdp7QeCyklFghmnRBCHN1qEbSPt-BeKAcerz7rFtSzlI3rPLB4GEiKxhQIlGRiPbBAvh9Ie1Sy0mriJOIYK2jYpyp4BPN2O-Ki4LcHKJt7" : "https://lh3.googleusercontent.com/aida-public/AB6AXuBHrGxOJBmfFBI2Ws1B8T3231pxzebK10AjuItp0CMUcKMyt51zLbWbjFZIftQqqZ0_jErzAopJWixPsOqLeKzih5JxDyn0L5q8B5Bidb0Lx4iBLHZAOvujLvOqSJWDSfVvb-7unAuOYG50ZFdBpZvgoJYgDZu170KmjVYRVmdrgVZ8DfeeLMPpP2U1NsznZu04cFkJRxKDRhE0SXGkbu4PUvgVLpNoKK4aERdiDGiVXoPnZ8Q_2nCszoLF5vWsJox8nXuc1_qx0Wt4"}/>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className={`font-label-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full ${item % 3 === 1 ? 'bg-primary-container/10 text-primary' : item % 3 === 2 ? 'bg-secondary-container/20 text-on-secondary-fixed-variant' : 'bg-surface-tint/10 text-surface-tint'}`}>
                    {item % 3 === 1 ? 'Sosialisasi' : item % 3 === 2 ? 'Operasi' : 'Rehabilitasi'}
                  </span>
                  <span className="font-body-small text-body-small text-on-surface-variant text-xs">12 Okt 2023</span>
                </div>
                <h3 className="font-headline-card text-[16px] sm:text-headline-card text-on-surface mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug">
                  {item % 3 === 1 ? 'BNN Sawahlunto Gelar Penyuluhan P4GN di SMAN 1' : item % 3 === 2 ? 'Sidak Tes Urine Pegawai Pemerintah Daerah' : 'Program Pemulihan Berbasis Masyarakat Diresmikan'}
                </h3>
                <p className="font-body-small text-body-small text-on-surface-variant line-clamp-2 mb-3 sm:mb-4">
                  Kegiatan ini bertujuan untuk memberikan pemahaman bahaya narkotika sejak dini kepada generasi muda di lingkungan sekolah menengah.
                </p>
                <Link to="/berita/detail" className="font-label-bold text-label-bold text-primary flex items-center gap-base mt-auto hover:text-primary-fixed-variant transition-colors">
                  Baca Selengkapnya <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 md:mt-lg gap-1 sm:gap-base flex-wrap">
          <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-40" disabled>
            <span className="material-symbols-outlined text-[20px] sm:text-[24px]">chevron_left</span>
          </button>
          <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-bold text-label-bold shadow-md transition-transform active:scale-95 text-sm">
            1
          </button>
          <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors font-label-bold text-label-bold active:scale-95 text-sm">
            2
          </button>
          <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors font-label-bold text-label-bold active:scale-95 text-sm">
            3
          </button>
          <span className="text-on-surface-variant px-1 sm:px-xs">...</span>
          <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors font-label-bold text-label-bold active:scale-95 text-sm">
            8
          </button>
          <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors active:scale-95">
            <span className="material-symbols-outlined text-[20px] sm:text-[24px]">chevron_right</span>
          </button>
        </div>
      </div>
    </main>
  );
}
