import { useState, useEffect } from 'react';
import { client, writeClient } from '../../lib/sanity';
import { useAuth } from '../../hooks/useAuth';

export default function AdminUsers() {
  const { adminRole } = useAuth();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('admin');

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const data = await client.fetch(`*[_type == "admin"] | order(_createdAt desc)`);
      setAdmins(data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      await writeClient.create({
        _type: 'admin',
        email: newEmail,
        name: newName,
        role: newRole
      });
      setNewEmail('');
      setNewName('');
      setNewRole('admin');
      fetchAdmins();
    } catch (error) {
      console.error("Error adding admin:", error);
      alert("Gagal menambahkan admin");
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus admin ini?')) {
      try {
        await writeClient.delete(id);
        fetchAdmins();
      } catch (error) {
        console.error("Error deleting admin:", error);
        alert("Gagal menghapus admin");
      }
    }
  };

  if (adminRole !== 'superadmin') {
    return (
      <div className="text-center p-8">
        <span className="material-symbols-outlined text-6xl text-error mb-4">block</span>
        <h2 className="font-headline-section text-2xl text-on-surface">Akses Ditolak</h2>
        <p className="text-on-surface-variant">Hanya Super Admin yang dapat mengakses halaman ini.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-headline-section text-2xl text-on-surface">Kelola Pengguna Admin</h1>
          <p className="text-on-surface-variant mt-1">Tambahkan atau hapus hak akses admin.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Tambah */}
        <div className="md:col-span-1">
          <form onSubmit={handleAddAdmin} className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 p-6 space-y-4">
            <h3 className="font-headline-card text-lg text-on-surface border-b border-outline-variant/30 pb-3">Tambah Admin Baru</h3>
            
            <div>
              <label className="font-label-bold text-sm text-on-surface-variant block mb-1">Email <span className="text-error">*</span></label>
              <input 
                type="email" 
                required 
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
              />
            </div>
            
            <div>
              <label className="font-label-bold text-sm text-on-surface-variant block mb-1">Nama</label>
              <input 
                type="text" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
              />
            </div>
            
            <div>
              <label className="font-label-bold text-sm text-on-surface-variant block mb-1">Role <span className="text-error">*</span></label>
              <select 
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              >
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={isAdding}
              className="w-full bg-primary text-on-primary font-label-bold py-2 px-4 rounded-lg hover:bg-primary-fixed-variant transition-colors flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
            >
              <span className="material-symbols-outlined text-sm">{isAdding ? 'hourglass_empty' : 'add'}</span>
              {isAdding ? 'Menyimpan...' : 'Tambah Admin'}
            </button>
          </form>
        </div>

        {/* List Admin */}
        <div className="md:col-span-2">
          <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30">
                    <th className="py-3 px-4 font-label-bold text-on-surface-variant">Email</th>
                    <th className="py-3 px-4 font-label-bold text-on-surface-variant">Nama</th>
                    <th className="py-3 px-4 font-label-bold text-on-surface-variant">Role</th>
                    <th className="py-3 px-4 font-label-bold text-on-surface-variant text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-on-surface-variant">
                        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                      </td>
                    </tr>
                  ) : admins.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-on-surface-variant">Belum ada admin lain.</td>
                    </tr>
                  ) : (
                    admins.map((admin) => (
                      <tr key={admin._id} className="border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-lowest">
                        <td className="py-3 px-4 text-on-surface font-body-main">{admin.email}</td>
                        <td className="py-3 px-4 text-on-surface font-body-main">{admin.name || '-'}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-md text-xs font-label-bold ${
                            admin.role === 'superadmin' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface'
                          }`}>
                            {admin.role === 'superadmin' ? 'Super Admin' : 'Admin'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button 
                            onClick={() => handleDeleteAdmin(admin._id)}
                            className="p-2 text-error hover:bg-error-container rounded-lg transition-colors"
                            title="Hapus"
                          >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
