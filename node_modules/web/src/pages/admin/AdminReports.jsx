import React, { useState, useEffect } from 'react';

export default function AdminReports() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch('/api/reports');
      const json = await response.json();
      if (json.success) {
        setReports(json.data);
      }
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-headline-section text-2xl text-on-surface">Kelola Pengaduan</h1>
          <p className="text-on-surface-variant mt-1">Daftar laporan pengaduan masyarakat</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <input 
              type="text" 
              placeholder="Cari lokasi atau nama..." 
              className="w-full bg-surface border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          </div>
          <button className="bg-surface-container border border-outline-variant p-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest text-on-surface-variant text-sm">
                <th className="p-4 font-label-bold">Tanggal</th>
                <th className="p-4 font-label-bold">Pelapor</th>
                <th className="p-4 font-label-bold">Lokasi</th>
                <th className="p-4 font-label-bold">Status</th>
                <th className="p-4 font-label-bold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-on-surface-variant">Memuat data...</td>
                </tr>
              ) : reports.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-on-surface-variant">Belum ada laporan pengaduan</td>
                </tr>
              ) : (
                reports.map((report) => (
                  <tr key={report.id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-4 text-on-surface text-sm">{formatDate(report.createdAt)}</td>
                    <td className="p-4 text-on-surface text-sm">{report.name || 'Anonim'}</td>
                    <td className="p-4 text-on-surface text-sm">{report.location}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-label-bold ${
                        report.status === 'Pending' ? 'bg-error-container text-on-error-container' :
                        report.status === 'Investigating' ? 'bg-secondary-container text-on-secondary-container' :
                        'bg-primary-container text-primary'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="p-4 text-center space-x-2">
                      <button className="text-primary hover:bg-primary-container p-1.5 rounded-lg transition-colors inline-flex items-center justify-center" title="Detail">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button className="text-secondary hover:bg-secondary-container p-1.5 rounded-lg transition-colors inline-flex items-center justify-center" title="Update Status">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Dummy */}
        <div className="p-4 border-t border-outline-variant/30 flex justify-between items-center text-sm text-on-surface-variant">
          <span>Menampilkan 1-4 dari 4 laporan</span>
          <div className="flex gap-1">
            <button className="p-1 rounded bg-surface border border-outline-variant disabled:opacity-50" disabled><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
            <button className="p-1 rounded bg-surface border border-outline-variant disabled:opacity-50" disabled><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
