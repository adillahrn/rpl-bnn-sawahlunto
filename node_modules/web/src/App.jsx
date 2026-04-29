import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';

// Layouts
import PublicLayout from './components/layouts/PublicLayout';
import AdminLayout from './components/layouts/AdminLayout';

// Public Pages
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';
import ServicesPage from './pages/ServicesPage';
import ReportPage from './pages/ReportPage';
import InformationPage from './pages/InformationPage';
import InformationDetail from './pages/InformationDetail';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminReports from './pages/admin/AdminReports';
import AdminNews from './pages/admin/AdminNews';
import AdminInformation from './pages/admin/AdminInformation';
import AdminUsers from './pages/admin/AdminUsers'; // Added AdminUsers

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes with Navbar & Footer */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="berita" element={<NewsPage />} />
            <Route path="berita/:slug" element={<NewsDetail />} />
            <Route path="layanan" element={<ServicesPage />} />
            <Route path="lapor" element={<ReportPage />} />
            <Route path="informasi" element={<InformationPage />} />
            <Route path="informasi/:slug" element={<InformationDetail />} />
          </Route>

          {/* Admin Routes with Sidebar Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="laporan" element={<AdminReports />} />
            <Route path="berita" element={<AdminNews />} />
            <Route path="informasi" element={<AdminInformation />} />
            <Route path="pengguna" element={<AdminUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
