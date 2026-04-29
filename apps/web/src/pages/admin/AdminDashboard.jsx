import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchReports, fetchNews } from '../../lib/sanity';

export default function AdminDashboard() {
  const [reportCount, setReportCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [recentReports, setRecentReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const reports = await fetchReports();
      setReportCount(reports.length);
      setPendingCount(reports.filter((r) => r.status === 'Pending').length);
      setRecentReports(reports.slice(0, 5));
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const stats = [
    { label: 'Total Laporan', value: reportCount, icon: 'report_problem', color: 'text-error', bg: 'bg-error-container' },
    { label: 'Laporan Pending', value: pendingCount, icon: 'pending_actions', color: 'text-secondary', bg: 'bg-secondary-container' },
  ];

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="font-headline-section text-2xl text-on-surface">Dashboard Admin</h1>
        <p className="text-on-surface-variant mt-1">Ringkasan aktivitas website BNN Kota Sawahlunto</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-surface rounded-2xl p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center`}>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>{stat.icon}</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-sm font-label-bold">{stat.label}</p>
              <p className="font-display-hero text-2xl text-on-surface">
                {isLoading ? '...' : stat.value}
              </p>
            </div>
          </div>
        ))}

        {/* CMS Link Card */}
        <a
          href="https://YOUR_PROJECT_ID.sanity.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary rounded-2xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow group"
        >
          <div className="w-12 h-12 rounded-full bg-white/15 text-white flex items-center justify-center">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>edit_note</span>
          </div>
          <div>
            <p className="text-white/70 text-sm font-label-bold">Kelola Konten</p>
            <p className="font-headline-card text-lg text-white group-hover:underline">Sanity Studio →</p>
          </div>
        </a>
      </div>

      {/* Recent Reports Table */}
      <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
        <div className="p-5 border-b border-outline-variant/30 flex justify-between items-center">
          <h2 className="font-headline-card text-lg text-on-surface">Laporan Masuk Terbaru</h2>
          <Link to="/admin/laporan" className="text-primary font-label-bold text-sm hover:underline">Lihat Semua</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest text-on-surface-variant text-sm">
                <th className="p-4 font-label-bold">Tanggal</th>
                <th className="p-4 font-label-bold">Lokasi</th>
                <th className="p-4 font-label-bold">Status</th>
                <th className="p-4 font-label-bold">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {isLoading ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-on-surface-variant">Memuat data...</td>
                </tr>
              ) : recentReports.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-on-surface-variant">Belum ada laporan</td>
                </tr>
              ) : (
                recentReports.map((report) => (
                  <tr key={report._id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-4 text-on-surface text-sm">{formatDate(report.submittedAt)}</td>
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
                    <td className="p-4">
                      <Link to="/admin/laporan" className="text-primary hover:text-primary-fixed-variant transition-colors text-sm font-label-bold">Detail</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
