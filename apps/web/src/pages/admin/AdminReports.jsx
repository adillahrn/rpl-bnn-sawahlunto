import { useState, useEffect } from 'react';
import { fetchReports, updateReportStatus } from '../../lib/sanity';

export default function AdminReports() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const data = await fetchReports();
      setReports(data || []);
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await updateReportStatus(id, newStatus);
      setReports((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status: newStatus } : r))
      );
      if (selectedReport && selectedReport._id === id) {
        setSelectedReport({ ...selectedReport, status: newStatus });
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Gagal mengubah status.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const filteredReports = reports.filter(r => {
    const q = searchQuery.toLowerCase();
    const name = r.name?.toLowerCase() || 'anonim';
    const location = r.location?.toLowerCase() || '';
    return name.includes(q) || location.includes(q);
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 relative">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          </div>
          <button onClick={loadReports} className="bg-surface-container border border-outline-variant p-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors" title="Refresh">
            <span className="material-symbols-outlined">refresh</span>
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
              ) : filteredReports.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-on-surface-variant">Belum ada laporan pengaduan</td>
                </tr>
              ) : (
                filteredReports.map((report) => (
                  <tr key={report._id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-4 text-on-surface text-sm">{formatDate(report.submittedAt)}</td>
                    <td className="p-4 text-on-surface text-sm">{report.name || 'Anonim'}</td>
                    <td className="p-4 text-on-surface text-sm">{report.location}</td>
                    <td className="p-4">
                      <select
                        value={report.status}
                        onChange={(e) => handleStatusUpdate(report._id, e.target.value)}
                        className={`px-2.5 py-1 rounded-full text-xs font-label-bold border-0 cursor-pointer ${
                          report.status === 'Pending' ? 'bg-error-container text-on-error-container' :
                          report.status === 'Investigating' ? 'bg-secondary-container text-on-secondary-container' :
                          'bg-primary-container text-primary'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Investigating">Sedang Diproses</option>
                        <option value="Resolved">Selesai</option>
                      </select>
                    </td>
                    <td className="p-4 text-center space-x-2">
                      <button 
                        onClick={() => setSelectedReport(report)}
                        className="text-primary hover:bg-primary-container p-1.5 rounded-lg transition-colors inline-flex items-center justify-center" 
                        title="Detail"
                      >
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-outline-variant/30 flex justify-between items-center text-sm text-on-surface-variant">
          <span>Total: {filteredReports.length} laporan</span>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-surface w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-5 border-b border-outline-variant/30">
              <h2 className="font-headline-card text-xl text-on-surface">Detail Laporan</h2>
              <button 
                onClick={() => setSelectedReport(null)}
                className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full p-1 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-label-bold text-on-surface-variant mb-1">Nama Pelapor</p>
                  <p className="font-body-main text-on-surface">{selectedReport.name || 'Anonim'}</p>
                </div>
                <div>
                  <p className="text-xs font-label-bold text-on-surface-variant mb-1">Nomor Telepon</p>
                  <p className="font-body-main text-on-surface">{selectedReport.phone || '-'}</p>
                </div>
                <div>
                  <p className="text-xs font-label-bold text-on-surface-variant mb-1">Tanggal Laporan</p>
                  <p className="font-body-main text-on-surface">{formatDate(selectedReport.submittedAt)}</p>
                </div>
                <div>
                  <p className="text-xs font-label-bold text-on-surface-variant mb-1">Status</p>
                  <select
                    value={selectedReport.status}
                    onChange={(e) => handleStatusUpdate(selectedReport._id, e.target.value)}
                    className={`px-3 py-1 rounded-full text-sm font-label-bold border-0 cursor-pointer mt-1 ${
                      selectedReport.status === 'Pending' ? 'bg-error-container text-on-error-container' :
                      selectedReport.status === 'Investigating' ? 'bg-secondary-container text-on-secondary-container' :
                      'bg-primary-container text-primary'
                    }`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Investigating">Sedang Diproses</option>
                    <option value="Resolved">Selesai</option>
                  </select>
                </div>
              </div>

              <div>
                <p className="text-xs font-label-bold text-on-surface-variant mb-1">Lokasi Kejadian</p>
                <p className="font-body-main text-on-surface p-3 bg-surface-container-lowest border border-outline-variant/30 rounded-lg">{selectedReport.location}</p>
              </div>

              <div>
                <p className="text-xs font-label-bold text-on-surface-variant mb-1">Deskripsi</p>
                <p className="font-body-main text-on-surface whitespace-pre-wrap p-3 bg-surface-container-lowest border border-outline-variant/30 rounded-lg">{selectedReport.description}</p>
              </div>

              {selectedReport.evidenceUrl && (
                <div>
                  <p className="text-xs font-label-bold text-on-surface-variant mb-2">Bukti Lampiran</p>
                  <div className="border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-lowest p-2">
                    {selectedReport.evidenceUrl.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                      <img src={selectedReport.evidenceUrl} alt="Bukti Laporan" className="w-full max-h-96 object-contain rounded" />
                    ) : selectedReport.evidenceUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video src={selectedReport.evidenceUrl} controls className="w-full max-h-96 rounded"></video>
                    ) : (
                      <a href={selectedReport.evidenceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 text-primary hover:bg-primary-container/20 rounded transition-colors">
                        <span className="material-symbols-outlined text-3xl">insert_drive_file</span>
                        <span className="font-label-bold underline">Buka File Terlampir</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-5 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-end">
              <button 
                onClick={() => setSelectedReport(null)}
                className="px-6 py-2 bg-primary text-on-primary font-label-bold rounded-lg hover:bg-primary-fixed-variant transition-colors shadow-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
