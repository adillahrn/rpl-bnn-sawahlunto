import { useState, useEffect, useRef } from 'react';
import { submitReport, writeClient } from '../lib/sanity';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [file, setFile] = useState(null);
  const [phone, setPhone] = useState('');
  
  // Location Autocomplete State
  const [location, setLocation] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [locationResults, setLocationResults] = useState([]);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const locationRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounced Location Search
  useEffect(() => {
    const searchLocation = async () => {
      if (!locationQuery || locationQuery.length < 3) {
        setLocationResults([]);
        return;
      }
      setIsSearchingLocation(true);
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationQuery)}&countrycodes=id&limit=5`);
        const data = await response.json();
        setLocationResults(data);
      } catch (error) {
        console.error('Location search error:', error);
      } finally {
        setIsSearchingLocation(false);
      }
    };

    const timeoutId = setTimeout(() => {
      if (locationQuery !== location) {
        searchLocation();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [locationQuery, location]);

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation.display_name);
    setLocationQuery(selectedLocation.display_name);
    setShowLocationDropdown(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Silakan masukkan nomor telepon yang valid.");
      return;
    }
    if (!location) {
      alert("Silakan pilih atau masukkan lokasi kejadian.");
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      let evidenceId = null;

      if (file) {
        const assetType = file.type.startsWith('image/') ? 'image' : 'file';
        const asset = await writeClient.assets.upload(assetType, file, {
          filename: file.name
        });
        evidenceId = asset._id;
      }

      await submitReport({
        name: data.name,
        phone: phone,
        location: location,
        description: data.description,
        evidenceId
      });

      setSuccessMessage('Laporan Anda berhasil dikirim. Terima kasih atas partisipasi Anda.');
      e.target.reset();
      setFile(null);
      setPhone('');
      setLocation('');
      setLocationQuery('');
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Terjadi kesalahan saat mengirim laporan. Silakan coba lagi.');
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
                <div className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors outline-none">
                  <PhoneInput
                    international
                    defaultCountry="ID"
                    value={phone}
                    onChange={setPhone}
                    placeholder="Contoh: +62 812 3456 7890"
                    className="PhoneInputCustom font-body-main text-sm sm:text-base text-on-surface w-full bg-transparent outline-none border-none"
                    style={{ '--PhoneInput-color--focus': 'transparent' }}
                  />
                </div>
              </div>
            </div>

            {/* Required Details Section */}
            <div className="space-y-2 pt-4 border-t border-outline-variant/30 relative" ref={locationRef}>
              <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="location">Lokasi Kejadian <span className="text-error">*</span></label>
              <div className="relative">
                <input 
                  className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none font-body-main text-body-main placeholder:text-outline/60 text-sm sm:text-base pr-10" 
                  id="location" 
                  placeholder="Ketik lokasi untuk mencari..." 
                  required 
                  type="text"
                  value={locationQuery}
                  onChange={(e) => {
                    setLocationQuery(e.target.value);
                    setLocation(e.target.value);
                    setShowLocationDropdown(true);
                  }}
                  onFocus={() => setShowLocationDropdown(true)}
                />
                {isSearchingLocation && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                )}
              </div>
              
              {/* Location Autocomplete Dropdown */}
              {showLocationDropdown && locationResults.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {locationResults.map((result) => (
                    <li 
                      key={result.place_id}
                      onClick={() => handleLocationSelect(result)}
                      className="px-4 py-3 hover:bg-surface-container cursor-pointer border-b border-outline-variant/30 last:border-0 font-body-small text-on-surface text-sm"
                    >
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-outline mt-0.5 text-[18px]">location_on</span>
                        <span>{result.display_name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="description">Deskripsi Kejadian <span className="text-error">*</span></label>
              <textarea className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none font-body-main text-body-main placeholder:text-outline/60 resize-none text-sm sm:text-base" id="description" name="description" placeholder="Ceritakan detail kejadian yang Anda ketahui secara spesifik..." required rows="5"></textarea>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant block">Bukti Pendukung <span className="font-normal text-on-surface-variant/80 text-xs">(Opsional)</span></label>
              <label className="w-full border-2 border-dashed border-outline-variant/60 rounded-xl p-5 sm:p-8 text-center hover:bg-surface hover:border-primary transition-colors cursor-pointer group block">
                <div className="flex justify-center mb-3 text-outline group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">{file ? 'check_circle' : 'cloud_upload'}</span>
                </div>
                <p className="font-label-bold text-label-bold text-on-surface mb-1 text-sm">
                  {file ? file.name : 'Pilih file atau seret ke sini'}
                </p>
                {!file && (
                  <p className="font-body-small text-body-small text-outline text-xs sm:text-sm">Mendukung Foto (JPG, PNG), Video (MP4) maks 20MB</p>
                )}
                <input className="hidden" type="file" onChange={handleFileChange} />
              </label>
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
