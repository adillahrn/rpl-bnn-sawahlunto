import React from 'react';

export default function AdminStats() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="font-headline-section text-2xl text-on-surface">Kelola Capaian</h1>
        <p className="text-on-surface-variant mt-1">Perbarui angka statistik capaian kinerja</p>
      </div>

      <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 p-6 max-w-2xl">
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-label-bold text-sm text-on-surface-variant">Kasus Terungkap</label>
              <input type="text" defaultValue="142" className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-2 focus:border-primary focus:ring-1 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold text-sm text-on-surface-variant">Kegiatan Sosialisasi</label>
              <input type="text" defaultValue="850+" className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-2 focus:border-primary focus:ring-1 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold text-sm text-on-surface-variant">Klien Rehabilitasi</label>
              <input type="text" defaultValue="56" className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-2 focus:border-primary focus:ring-1 outline-none" />
            </div>
          </div>
          
          <div className="pt-4 border-t border-outline-variant/30">
            <button type="button" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-bold hover:bg-primary-fixed-variant transition-colors shadow-md">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
