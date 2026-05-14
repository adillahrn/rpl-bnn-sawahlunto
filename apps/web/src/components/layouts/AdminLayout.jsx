import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, adminRole, loading, loginWithGoogle, loginWithEmail, forgotPassword, logout } = useAuth();

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Forgot password state
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [resetError, setResetError] = useState('');
  const [isSendingReset, setIsSendingReset] = useState(false);

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: 'dashboard' },
    { name: 'Pengaduan', path: '/admin/laporan', icon: 'report_problem' },
    { name: 'Berita', path: '/admin/berita', icon: 'newspaper' },
    { name: 'Informasi', path: '/admin/informasi', icon: 'info' },
  ];

  if (adminRole === 'superadmin') {
    menuItems.push({ name: 'Pengguna', path: '/admin/pengguna', icon: 'group' });
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    try {
      await loginWithEmail(email, password);
    } catch (error) {
      const code = error?.code || '';
      if (code === 'auth/user-not-found' || code === 'auth/invalid-credential') {
        setLoginError('Email atau password salah. Silakan coba lagi.');
      } else if (code === 'auth/wrong-password') {
        setLoginError('Password salah. Silakan coba lagi.');
      } else if (code === 'auth/too-many-requests') {
        setLoginError('Terlalu banyak percobaan. Silakan coba beberapa saat lagi.');
      } else if (code === 'auth/invalid-email') {
        setLoginError('Format email tidak valid.');
      } else {
        setLoginError('Terjadi kesalahan. Silakan coba lagi.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setResetError('');
    setResetMessage('');
    setIsSendingReset(true);
    try {
      await forgotPassword(resetEmail);
      setResetMessage('Link reset password telah dikirim ke email Anda. Silakan periksa inbox atau folder spam.');
    } catch (error) {
      const code = error?.code || '';
      if (code === 'auth/user-not-found') {
        setResetError('Email tidak terdaftar dalam sistem.');
      } else if (code === 'auth/invalid-email') {
        setResetError('Format email tidak valid.');
      } else {
        setResetError('Gagal mengirim email reset. Silakan coba lagi.');
      }
    } finally {
      setIsSendingReset(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoginError('');
    try {
      await loginWithGoogle();
    } catch (error) {
      setLoginError('Gagal masuk dengan Google. Silakan coba lagi.');
    }
  };

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
        {/* Forgot Password Modal */}
        {showForgotPassword && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => { setShowForgotPassword(false); setResetMessage(''); setResetError(''); }}>
            <div className="bg-surface rounded-2xl shadow-xl border border-outline-variant/30 max-w-md w-full p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-card text-xl text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">lock_reset</span>
                  Lupa Password
                </h3>
                <button onClick={() => { setShowForgotPassword(false); setResetMessage(''); setResetError(''); }} className="p-1 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <p className="text-on-surface-variant text-sm mb-6">
                Masukkan alamat email Anda. Kami akan mengirimkan link untuk mereset password Anda.
              </p>

              {resetMessage && (
                <div className="mb-4 p-3 bg-primary-container text-on-primary-container rounded-lg text-sm flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  {resetMessage}
                </div>
              )}
              {resetError && (
                <div className="mb-4 p-3 bg-error-container text-on-error-container rounded-lg text-sm flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm mt-0.5">error</span>
                  {resetError}
                </div>
              )}

              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label className="font-label-bold text-sm text-on-surface-variant block mb-1.5">Email</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">mail</span>
                    <input
                      type="email"
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="Masukkan email Anda"
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSendingReset}
                  className="w-full bg-primary text-on-primary font-label-bold py-3 px-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <span className="material-symbols-outlined text-sm">{isSendingReset ? 'hourglass_empty' : 'send'}</span>
                  {isSendingReset ? 'Mengirim...' : 'Kirim Link Reset'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Login Card */}
        <div className="bg-surface p-6 sm:p-8 rounded-2xl shadow-lg border border-outline-variant/30 max-w-md w-full">
          <div className="text-center mb-6">
            <span className="material-symbols-outlined text-5xl text-primary mb-3 block" style={{fontVariationSettings: "'FILL' 1"}}>admin_panel_settings</span>
            <h2 className="font-headline-section text-2xl text-on-surface mb-1">Admin Login</h2>
            <p className="text-on-surface-variant text-sm">
              {user && !adminRole 
                ? 'Akun Anda tidak memiliki akses admin.' 
                : 'Masuk ke dashboard admin BNN Kota Sawahlunto'}
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 bg-error-container text-on-error-container rounded-lg text-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-sm mt-0.5">error</span>
              {loginError}
            </div>
          )}

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4 mb-4">
            <div>
              <label className="font-label-bold text-sm text-on-surface-variant block mb-1.5">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">mail</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@bnn.go.id"
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="font-label-bold text-sm text-on-surface-variant block mb-1.5">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-12 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => { setShowForgotPassword(true); setResetEmail(email); }}
                className="text-primary text-sm font-label-bold hover:underline transition-colors"
              >
                Lupa Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-primary text-on-primary font-label-bold py-3 px-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">{isLoggingIn ? 'hourglass_empty' : 'login'}</span>
              {isLoggingIn ? 'Memproses...' : 'Masuk'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-outline-variant/40"></div>
            <span className="text-xs text-on-surface-variant font-label-bold">ATAU</span>
            <div className="flex-1 h-px bg-outline-variant/40"></div>
          </div>

          {/* Google Login */}
          <button 
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-outline-variant py-3 px-4 rounded-xl font-label-bold text-on-surface hover:bg-surface-container-low transition-colors shadow-sm"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Masuk dengan Google
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
                user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email ? user.email.charAt(0).toUpperCase() : 'A'
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
