import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './backend/AuthContext';
import HomePage from './pages/HomePage';
import FeaturedPage from './pages/FeaturedPage';
import InstagramPage from './pages/InstagramPage';
import CreatorProfilePage from './pages/CreatorProfilePage';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/featured" element={<FeaturedPage />} />
          <Route path="/instagram" element={<InstagramPage />} />
          <Route path="/creator/:type/:id" element={<CreatorProfilePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes - User Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes - Admin Only */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;