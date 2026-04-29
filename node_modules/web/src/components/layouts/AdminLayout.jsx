import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, adminRole, loading, loginWithGoogle, logout } = useAuth();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: 'dashboard' },
    { name: 'Pengaduan', path: '/admin/laporan', icon: 'report_problem' },
    { name: 'Berita', path: '/admin/berita', icon: 'newspaper' },
    { name: 'Informasi', path: '/admin/informasi', icon: 'info' },
  ];

  if (adminRole === 'superadmin') {
    menuItems.push({ name: 'Pengguna', path: '/admin/pengguna', icon: 'group' });
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || !adminRole) {
    return (
      <div className="min-h-screen bg-surface-container-lowest flex items-center justify-center p-4">
        <div className="bg-surface p-8 rounded-2xl shadow-lg border border-outline-variant/30 max-w-md w-full text-center">
          <span className="material-symbols-outlined text-6xl text-primary mb-4">admin_panel_settings</span>
          <h2 className="font-headline-section text-2xl text-on-surface mb-2">Admin Login</h2>
          <p className="text-on-surface-variant mb-8">
            {user && !adminRole 
              ? 'Akun Anda tidak memiliki akses admin.' 
              : 'Silakan masuk menggunakan akun Google Anda untuk mengakses dashboard admin.'}
          </p>
          <button 
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white border border-outline-variant py-3 px-4 rounded-xl font-label-bold text-on-surface hover:bg-surface-container-low transition-colors shadow-sm"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
            Lanjutkan dengan Google
          </button>
          {user && !adminRole && (
            <button 
              onClick={logout}
              className="w-full mt-4 flex items-center justify-center gap-3 bg-error-container text-on-error-container py-3 px-4 rounded-xl font-label-bold hover:bg-error/20 transition-colors"
            >
              Keluar
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-container-lowest flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-surface shadow-md z-50 transform transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center px-6 border-b border-outline-variant/30">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            <span className="font-headline-card text-on-surface font-bold">BNN Admin</span>
          </Link>
        </div>
        
        <div className="p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-label-bold transition-colors ${
                  isActive 
                    ? 'bg-primary-container text-on-primary-container' 
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-outline-variant/30">
          <button 
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-label-bold text-error hover:bg-error-container hover:text-on-error-container transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-surface border-b border-outline-variant/30 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
          <button 
            className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-sm font-label-bold text-on-surface-variant hidden sm:block">
              {user.email}
            </span>
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm overflow-hidden">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
              ) : (
                user.displayName ? user.displayName.charAt(0).toUpperCase() : 'A'
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
