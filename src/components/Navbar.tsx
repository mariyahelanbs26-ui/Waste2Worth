import React, { useState } from 'react';
import { PageId, User } from '../types';
import { Menu, X, Recycle, LogIn, LogOut, User as UserIcon } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  currentUser: User | null;
  onNavigate: (page: PageId) => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  currentUser,
  onNavigate,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: currentUser ? 'dashboard' : 'welcome' },
    { label: 'Waste Categories', page: 'categories' },
    { label: 'Recycling Tips', page: 'tips' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text wordmark with ♻️ recycling icon */}
          <button
            onClick={() => handleNavClick(currentUser ? 'dashboard' : 'welcome')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
              <Recycle className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                Waste2Worth
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-medium text-emerald-700">
                Turn Waste into Worth
              </span>
            </div>
          </button>

          {/* Zone 2: Clean 5 nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive =
                currentPage === link.page ||
                (link.page === 'categories' && currentPage === 'waste-detail');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className={`transition-colors whitespace-nowrap cursor-pointer hover:text-emerald-700 py-1 border-b-2 ${
                    isActive
                      ? 'border-emerald-600 text-emerald-800 font-semibold'
                      : 'border-transparent text-slate-600 hover:border-emerald-200'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action (Login or User/Logout) */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-2.5 py-1 text-xs font-medium text-emerald-800 bg-emerald-50 rounded-md border border-emerald-200">
                  <UserIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="truncate max-w-[120px]">{currentUser.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 rounded-lg transition-colors border border-slate-200"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('login')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Login</span>
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
                >
                  <span>Register</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {currentUser && (
              <button
                onClick={onLogout}
                className="p-1.5 text-slate-600 hover:text-rose-600 focus:outline-none"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-4 space-y-2 shadow-lg">
          {currentUser && (
            <div className="px-3 py-2 mb-2 bg-emerald-50 rounded-lg text-xs font-medium text-emerald-800 flex items-center gap-2">
              <UserIcon className="w-4 h-4 text-emerald-600" />
              <span>Signed in as: <strong>{currentUser.name}</strong></span>
            </div>
          )}
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.page)}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex gap-2">
            {currentUser ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogout();
                }}
                className="w-full py-2 px-3 text-center text-xs font-medium text-rose-700 bg-rose-50 border border-rose-200 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleNavClick('login')}
                  className="flex-1 py-2 text-center text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavClick('register')}
                  className="flex-1 py-2 text-center text-xs font-medium text-white bg-emerald-600 rounded-lg"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
