import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AuthCallback from './pages/AuthCallback';
import DashboardPage from './pages/dashboard/DashboardPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        
        <Route element={<MainLayout />}>
          <Route path="login" element={<AuthPage initialMode="login" />} />
          <Route path="register" element={<AuthPage initialMode="register" />} />
          <Route path="auth/callback" element={<AuthCallback />} />
        </Route>

        <Route path="dashboard" element={<DashboardPage />} />
        
        {/* Redirect unknown routes */ }
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
