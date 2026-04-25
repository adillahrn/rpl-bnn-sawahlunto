import React from 'react';

export default function AdminInformation() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-headline-section text-2xl text-on-surface">Kelola Informasi & Edukasi</h1>
          <p className="text-on-surface-variant mt-1">Daftar video dan artikel edukasi</p>
        </div>
        <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-bold flex items-center gap-2 hover:bg-primary-fixed-variant transition-colors shadow-md">
          <span className="material-symbols-outlined">add</span>
          Tambah Informasi
        </button>
      </div>

      <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 p-8 text-center">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">info</span>
        <h3 className="font-headline-card text-lg text-on-surface mb-2">Modul Informasi</h3>
        <p className="text-on-surface-variant text-sm mb-4">Kelola konten video YouTube dan artikel edukasi di sini.</p>
      </div>
    </div>
  );
}
