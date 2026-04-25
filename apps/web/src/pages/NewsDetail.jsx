import { Link } from 'react-router-dom';

export default function NewsDetail() {
  return (
    <main className="pt-20 md:pt-[100px] pb-xl px-4 sm:px-6 md:px-8 max-w-container-max mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 sm:gap-2 text-body-small font-body-small text-on-surface-variant mb-6 md:mb-lg overflow-x-auto whitespace-nowrap">
        <Link className="hover:text-primary transition-colors shrink-0" to="/">Beranda</Link>
        <span className="material-symbols-outlined text-[16px] shrink-0">chevron_right</span>
        <Link className="hover:text-primary transition-colors shrink-0" to="/berita">Berita</Link>
        <span className="material-symbols-outlined text-[16px] shrink-0">chevron_right</span>
        <span className="text-on-surface truncate max-w-[180px] sm:max-w-none">Edukasi Bahaya Narkoba di SMAN 1 Sawahlunto</span>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        <div className="mb-6 md:mb-lg">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full font-label-bold text-label-bold text-[12px]">Pencegahan</span>
            <span className="text-body-small font-body-small text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              12 Oktober 2024
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface mb-4 sm:mb-6 leading-snug">
            Edukasi Bahaya Narkoba di SMAN 1 Sawahlunto Mencetak Generasi Bersinar
          </h1>

          {/* Author & Share - stacks on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-outline-variant/30 pb-4 sm:pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden shrink-0">
                <img alt="Penulis" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHprT-G9jbFuqREZOmBVL6O_ULVmePZjEqRV-o6V2ZnpC4w15go0ELBxscog5sDQ1V5ZoXaEB3InqLZps40ss19oMhn7-AvVTSfQJ-eGg8xJ8_HuYRuumgQXWHuhy_F1oDyaRj1-5qtaDZwjSLF3xQ5vXlM3cuSaHiMpt5BDNz6I9BAoJefIa4-gga1fm16PzG1XEKgIoLsCDlKdT3YBSC61MnKEvVRe96wZb7RZcujpObaKlbaWqo0bveVl3o1uv1DCE7AaOm7G9t"/>
              </div>
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">Budi Santoso</p>
                <p className="font-body-small text-body-small text-on-surface-variant">Humas BNN Kota Sawahlunto</p>
              </div>
            </div>
            {/* Social Share */}
            <div className="flex items-center gap-2">
              <span className="font-body-small text-body-small text-on-surface-variant mr-1 sm:mr-2">Bagikan:</span>
              <button aria-label="Share" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </button>
              <button aria-label="Share on Twitter" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </button>
              <button aria-label="Share on WhatsApp" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full aspect-video sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-6 md:mb-lg shadow-[0px_10px_25px_rgba(13,38,194,0.05)]">
          <img alt="Kegiatan Edukasi" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcpI9k94Al2pk-UCTM5NmyV4WgGkcg61Q0mqXywcD7mmJDiTW5ND6F0mKb14NIKhNzTtdktpsXEpoN4T7vyMH4ocVLvHGqBhtLLI0B9bGnbvkU1iuFCOfPH5Emz0f4y8iX6_2jPhKby5qlS_7-FdVmnX3GHD_dn2vyKqDSfwNDMr2OaWooR2Eau9CScwiBIpmSn6k2zqVUsCvWnWYVgD1p_Sd9BwOuFUuhuznReZe2nHbJUBrOz_ZmpRqfr5BDK5qN8YjL5lUwHeMQ"/>
        </div>

        {/* Article Body */}
        <div className="prose prose-sm sm:prose-lg max-w-none text-on-surface font-body-main text-body-main">
          <p className="lead text-[14px] sm:text-[15px] leading-relaxed text-on-surface-variant mb-6 font-medium">
            Sawahlunto - Badan Narkotika Nasional (BNN) Kota Sawahlunto kembali menggelar sosialisasi dan edukasi Pencegahan, Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika (P4GN) kepada para pelajar. Kali ini, kegiatan difokuskan di SMAN 1 Sawahlunto pada Rabu (12/10).
          </p>
        </div>
      </article>
    </main>
  );
}
