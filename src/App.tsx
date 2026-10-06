/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, User, ContactSubmission } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { WelcomePage } from './components/pages/WelcomePage';
import { LoginPage } from './components/pages/LoginPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { CategoriesPage } from './components/pages/CategoriesPage';
import { WasteDetailPage } from './components/pages/WasteDetailPage';
import { RecyclingTipsPage } from './components/pages/RecyclingTipsPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { ThankYouPage } from './components/pages/ThankYouPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('welcome');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('plastic');
  const [lastSubmission, setLastSubmission] = useState<ContactSubmission | null>(null);

  // Smooth scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setCurrentPage('dashboard');
  };

  const handleRegisterSuccess = (user: User) => {
    setCurrentUser(user);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('welcome');
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage('waste-detail');
  };

  const handleFormSubmit = (data: ContactSubmission) => {
    setLastSubmission(data);
    setCurrentPage('thank-you');
  };

  const handleQuickDemoLogin = () => {
    setCurrentUser({
      name: 'Rohan (BCA Student)',
      email: 'rohan.bca@campus.edu',
    });
    setCurrentPage('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf8] text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
      {/* Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        currentUser={currentUser}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />

      {/* Main Content View Container */}
      <main className="flex-1">
        {currentPage === 'welcome' && (
          <WelcomePage
            onNavigate={handleNavigate}
            onQuickDemoLogin={handleQuickDemoLogin}
          />
        )}

        {currentPage === 'login' && (
          <LoginPage
            onLoginSuccess={handleLoginSuccess}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'register' && (
          <RegisterPage
            onRegisterSuccess={handleRegisterSuccess}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'dashboard' && (
          <DashboardPage
            currentUser={currentUser}
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentPage === 'categories' && (
          <CategoriesPage
            onSelectCategory={handleSelectCategory}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'waste-detail' && (
          <WasteDetailPage
            categoryId={selectedCategoryId}
            onSelectCategory={setSelectedCategoryId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'tips' && (
          <RecyclingTipsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onFormSubmit={handleFormSubmit}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'thank-you' && (
          <ThankYouPage
            lastSubmission={lastSubmission}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        )}
      </main>

      {/* Global Project Footer */}
      <Footer onNavigate={handleNavigate} currentPage={currentPage} />
    </div>
  );
}
