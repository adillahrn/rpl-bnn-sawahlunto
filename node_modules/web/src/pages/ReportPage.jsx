import { useState } from 'react';

export default function ReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          location: data.location,
          description: data.description,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setSuccessMessage('Laporan Anda berhasil dikirim. Terima kasih atas partisipasi Anda.');
        e.target.reset();
      } else {
        alert('Gagal mengirim laporan. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Terjadi kesalahan jaringan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24 md:pt-32 pb-12 md:pb-xl px-4 sm:px-6 md:px-8 max-w-container-max mx-auto">
      {/* Header */}
      <div className="mb-8 md:mb-lg max-w-2xl">
        <h1 className="font-headline-section text-headline-section text-primary mb-3 sm:mb-4">Layanan Pengaduan Masyarakat</h1>
        <p className="font-body-main text-body-main text-on-surface-variant">
          Laporkan secara rahasia. Identitas Anda akan kami lindungi sepenuhnya. Bersama kita wujudkan lingkungan yang bersih dari penyalahgunaan narkotika.
        </p>
      </div>

      {/* Split Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-lg items-start">
        {/* Left Side: Info & Map */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          {/* Map */}
          <div className="w-full h-48 sm:h-64 bg-surface-container rounded-xl sm:rounded-2xl overflow-hidden shadow-[0px_10px_25px_rgba(13,38,194,0.05)] relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6586073866185!2d100.77195431475355!3d-0.6865046994998794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b3472ca28e3b3%3A0xc31c0e35e9545468!2sBadan%20Narkotika%20Nasional%20(BNN)%20Kota%20Sawahlunto!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            ></iframe>
            <div className="absolute inset-0 ring-1 ring-inset ring-outline/10 rounded-xl sm:rounded-2xl pointer-events-none"></div>
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm flex items-center gap-2 pointer-events-none">
              <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
              <span className="font-label-bold text-label-bold text-on-surface text-xs sm:text-sm">Kota Sawahlunto</span>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-surface-container-lowest rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-[0px_10px_25px_rgba(13,38,194,0.05)] ring-1 ring-outline/5 space-y-5 sm:space-y-6">
            <h3 className="font-headline-card text-headline-card text-on-surface">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="bg-surface-container-low p-2 rounded-lg text-primary mt-0.5 shrink-0">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">map</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface mb-1">Alamat Kantor</h4>
                  <p className="font-body-small text-body-small text-on-surface-variant">Jl. Sudirman No.1, Pusat Kota, Kec. Lembah Segar, Kota Sawahlunto, Sumatera Barat</p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="bg-surface-container-low p-2 rounded-lg text-primary mt-0.5 shrink-0">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">call</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface mb-1">Telepon (24 Jam)</h4>
                  <p className="font-body-small text-body-small text-on-surface-variant">(0754) 123456</p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="bg-surface-container-low p-2 rounded-lg text-primary mt-0.5 shrink-0">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">mail</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface mb-1">Email Pengaduan</h4>
                  <p className="font-body-small text-body-small text-on-surface-variant">lapor@bnn.sawahlunto.go.id</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-[0px_10px_25px_rgba(13,38,194,0.05)] ring-1 ring-outline/5 space-y-5 sm:space-y-6">
            <div className="border-b border-outline-variant/30 pb-4 sm:pb-6 mb-4 sm:mb-6">
              <h2 className="font-headline-card text-headline-card text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">edit_document</span>
                Formulir Laporan
              </h2>
            </div>

            {/* Identity Section (Required) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="name">Nama Lengkap <span className="text-error">*</span></label>
                <input className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none font-body-main text-body-main placeholder:text-outline/60 text-sm sm:text-base" id="name" name="name" placeholder="Samarkan jika perlu" required type="text"/>
              </div>
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="phone">Nomor Telepon <span className="text-error">*</span></label>
                <input className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none font-body-main text-body-main placeholder:text-outline/60 text-sm sm:text-base" id="phone" name="phone" placeholder="Untuk keperluan verifikasi" required type="tel"/>
              </div>
            </div>

            {/* Required Details Section */}
            <div className="space-y-2 pt-4 border-t border-outline-variant/30">
              <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="location">Lokasi Kejadian <span className="text-error">*</span></label>
              <input className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none font-body-main text-body-main placeholder:text-outline/60 text-sm sm:text-base" id="location" name="location" placeholder="Detail alamat atau patokan lokasi" required type="text"/>
            </div>

            <div className="space-y-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="description">Deskripsi Kejadian <span className="text-error">*</span></label>
              <textarea className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none font-body-main text-body-main placeholder:text-outline/60 resize-none text-sm sm:text-base" id="description" name="description" placeholder="Ceritakan detail kejadian yang Anda ketahui secara spesifik..." required rows="5"></textarea>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant block">Bukti Pendukung <span className="text-error">*</span></label>
              <div className="w-full border-2 border-dashed border-outline-variant/60 rounded-xl p-5 sm:p-8 text-center hover:bg-surface hover:border-primary transition-colors cursor-pointer group">
                <div className="flex justify-center mb-3 text-outline group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">cloud_upload</span>
                </div>
                <p className="font-label-bold text-label-bold text-on-surface mb-1 text-sm">Pilih file atau seret ke sini</p>
                <p className="font-body-small text-body-small text-outline text-xs sm:text-sm">Mendukung Foto (JPG, PNG), Video (MP4) maks 20MB</p>
                <input className="hidden" type="file" required/>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 sm:pt-6">
              {successMessage && (
                <div className="mb-4 p-4 bg-primary-container text-on-primary-container rounded-lg font-label-bold text-sm">
                  {successMessage}
                </div>
              )}
              <button disabled={isSubmitting} className="w-full bg-secondary-container text-on-secondary-container hover:bg-[#F4BF2B] font-label-bold text-label-bold py-3.5 sm:py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70" type="submit">
                <span className="material-symbols-outlined">{isSubmitting ? 'hourglass_empty' : 'send'}</span>
                {isSubmitting ? 'Mengirim...' : 'Kirim Laporan'}
              </button>
              <p className="text-center font-body-small text-body-small text-outline mt-3 sm:mt-4 flex items-center justify-center gap-1 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-xs">info</span>
                Laporan palsu dapat dipidana sesuai undang-undang yang berlaku.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
