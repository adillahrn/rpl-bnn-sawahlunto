export default function News() {
  return (
    <section className="bg-surface py-xl">
      <div className="max-w-container-max mx-auto px-6 md:px-lg">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-headline-section text-headline-section text-primary">Berita Terbaru</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mt-2">Informasi terkini kegiatan BNN Kota Sawahlunto</p>
          </div>
          <a className="hidden sm:flex items-center gap-2 font-label-bold text-label-bold text-primary hover:text-primary-fixed-variant transition-colors" href="#">
            Lihat Semua <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.04)] border border-surface-container group">
            <div className="relative h-48 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="speaker at a podium delivering a presentation to an audience in a bright conference hall with blue banners" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4rc60plW0EROPCpMePB2almB00wxtWif6IeVR1JIZE2C5JhGwzNUirn49HYODiBqCL1RB31kpRt17HttiS5M5Wc8wwEteJ-zXWekYJ8O-CTKLm8SbNDRMhSl1pHJoA0BqPlsJFkdWMIm1UZnqbZv5Zw2hcfg1xwplz0qInnLU9hcsCf6v4DIvOJ0eY1yPcwpd8nTHCshpabtTVvYe-o1Vj0ubDg81ZV4aerXhRqIxN7yUV298el-YvEH5eHyxOjD6jsUgFNgwGRFh"/>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary-container/10 text-primary font-label-bold text-[12px] px-3 py-1 rounded-full">Sosialisasi</span>
                <span className="font-body-small text-body-small text-on-surface-variant text-xs">12 Okt 2023</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-3 group-hover:text-primary transition-colors">BNN Sawahlunto Gelar Penyuluhan P4GN di SMAN 1</h3>
              <p className="font-body-small text-body-small text-on-surface-variant line-clamp-2">Kegiatan ini bertujuan untuk memberikan pemahaman bahaya narkotika sejak dini kepada generasi muda di lingkungan sekolah menengah.</p>
            </div>
          </article>
          <article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.04)] border border-surface-container group">
            <div className="relative h-48 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="medical professional holding a small plastic cup for testing in a bright clean clinical environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUMteiVj9eedky3IfCe6gvVz5djWqVA1N2oPqvMG0sWuUcS_84oq-stx3hgqroeh_nASxWKPB0UGicd0N8lMyeHRUIXKROJ1t7ppXhSA3kMQVzdqbQdKMCLzBCV3SGbV4XG6hgsy1g8BlDNzr9KYJsiR-2gBS43QBi0qDdp7QeCyklFghmnRBCHN1qEbSPt-BeKAcerz7rFtSzlI3rPLB4GEiKxhQIlGRiPbBAvh9Ie1Sy0mriJOIYK2jYpyp4BPN2O-Ki4LcHKJt7"/>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-secondary-container/20 text-on-secondary-fixed-variant font-label-bold text-[12px] px-3 py-1 rounded-full">Operasi</span>
                <span className="font-body-small text-body-small text-on-surface-variant text-xs">08 Okt 2023</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-3 group-hover:text-primary transition-colors">Sidak Tes Urine Pegawai Pemerintah Daerah</h3>
              <p className="font-body-small text-body-small text-on-surface-variant line-clamp-2">Langkah preventif dilakukan melalui tes urine mendadak untuk memastikan lingkungan kerja pemerintahan bebas dari pengaruh narkoba.</p>
            </div>
          </article>
          <article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.04)] border border-surface-container group">
            <div className="relative h-48 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="group of people sitting in a circle in a supportive therapy session focusing on mental health and recovery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrGxOJBmfFBI2Ws1B8T3231pxzebK10AjuItp0CMUcKMyt51zLbWbjFZIftQqqZ0_jErzAopJWixPsOqLeKzih5JxDyn0L5q8B5Bidb0Lx4iBLHZAOvujLvOqSJWDSfVvb-7unAuOYG50ZFdBpZvgoJYgDZu170KmjVYRVmdrgVZ8DfeeLMPpP2U1NsznZu04cFkJRxKDRhE0SXGkbu4PUvgVLpNoKK4aERdiDGiVXoPnZ8Q_2nCszoLF5vWsJox8nXuc1_qx0Wt4"/>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-surface-tint/10 text-surface-tint font-label-bold text-[12px] px-3 py-1 rounded-full">Rehabilitasi</span>
                <span className="font-body-small text-body-small text-on-surface-variant text-xs">01 Okt 2023</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-3 group-hover:text-primary transition-colors">Program Pemulihan Berbasis Masyarakat Diresmikan</h3>
              <p className="font-body-small text-body-small text-on-surface-variant line-clamp-2">Fasilitas baru untuk mendukung rehabilitasi jalan bagi pecandu tingkat ringan dengan pendekatan komunitas lokal.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
