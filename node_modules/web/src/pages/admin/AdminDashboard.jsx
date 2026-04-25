import React from 'react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Laporan', value: '45', icon: 'report_problem', color: 'text-error', bg: 'bg-error-container' },
    { label: 'Laporan Pending', value: '12', icon: 'pending_actions', color: 'text-secondary', bg: 'bg-secondary-container' },
    { label: 'Total Berita', value: '128', icon: 'newspaper', color: 'text-primary', bg: 'bg-primary-container' },
    { label: 'Video Edukasi', value: '34', icon: 'play_circle', color: 'text-tertiary', bg: 'bg-tertiary-container' },
  ];

  const recentReports = [
    { id: '1', date: '25 Okt 2023', location: 'Kecamatan Lembah Segar', status: 'Pending' },
    { id: '2', date: '24 Okt 2023', location: 'Pasar Sawahlunto', status: 'Investigating' },
    { id: '3', date: '22 Okt 2023', location: 'Desa Lunto', status: 'Resolved' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="font-headline-section text-2xl text-on-surface">Dashboard Admin</h1>
        <p className="text-on-surface-variant mt-1">Ringkasan aktivitas website BNN Kota Sawahlunto</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-surface rounded-2xl p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center`}>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>{stat.icon}</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-sm font-label-bold">{stat.label}</p>
              <p className="font-display-hero text-2xl text-on-surface">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Reports Table */}
      <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
        <div className="p-5 border-b border-outline-variant/30 flex justify-between items-center">
          <h2 className="font-headline-card text-lg text-on-surface">Laporan Masuk Terbaru</h2>
          <button className="text-primary font-label-bold text-sm hover:underline">Lihat Semua</button>
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
              {recentReports.map((report) => (
                <tr key={report.id} className="hover:bg-surface-container-lowest transition-colors">
                  <td className="p-4 text-on-surface text-sm">{report.date}</td>
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
                    <button className="text-primary hover:text-primary-fixed-variant transition-colors text-sm font-label-bold">Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
