import React from 'react';
import { PageId } from '../types';
import { Recycle, Heart, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  currentPage: PageId;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentPage }) => {
  const quickPages: { id: PageId; label: string }[] = [
    { id: 'welcome', label: '1. Welcome' },
    { id: 'login', label: '2. Login' },
    { id: 'register', label: '3. Register' },
    { id: 'dashboard', label: '4. Dashboard' },
    { id: 'categories', label: '5. Categories' },
    { id: 'waste-detail', label: '6. Waste Details' },
    { id: 'tips', label: '7. Recycling Tips' },
    { id: 'about', label: '8. About Us' },
    { id: 'contact', label: '9. Contact' },
    { id: 'thank-you', label: '10. Thank You' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Recycle className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Waste2Worth</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Turn Waste into Worth. A college BCA mini-project empowering communities to reduce, reuse, and recycle everyday waste.
            </p>
            <div className="pt-2 text-xs text-emerald-400 font-medium flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>BCA Academic Mini-Project 2026</span>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="hover:text-emerald-400 transition-colors text-slate-400"
                >
                  Home / Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-emerald-400 transition-colors text-slate-400"
                >
                  Waste Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tips')}
                  className="hover:text-emerald-400 transition-colors text-slate-400"
                >
                  Recycling Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-emerald-400 transition-colors text-slate-400"
                >
                  About Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-emerald-400 transition-colors text-slate-400"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* 3 R's Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              The 3 R's Strategy
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span><strong>Reduce:</strong> Buy less, avoid disposables</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                <span><strong>Reuse:</strong> Upcycle jars, bags & clothes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span><strong>Recycle:</strong> Sort wet & dry waste cleanly</span>
              </li>
            </ul>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Project Specification
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5 leading-relaxed bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
              <p><strong className="text-slate-300">Course:</strong> Bachelor of Computer Applications</p>
              <p><strong className="text-slate-300">Domain:</strong> Environmental Awareness System</p>
              <p><strong className="text-slate-300">Stack:</strong> React, TypeScript & Tailwind CSS</p>
              <p><strong className="text-slate-300">Status:</strong> All 10 Pages Live & Connected</p>
            </div>
          </div>
        </div>

        {/* Project Page Navigation Strip (Teacher / Evaluator / Quick Switch) */}
        <div className="pt-6 pb-6 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 uppercase tracking-wider">
              Project Page Quick Switch (Pages 1–10):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {quickPages.map((qp) => (
                <button
                  key={qp.id}
                  onClick={() => onNavigate(qp.id)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    currentPage === qp.id
                      ? 'bg-emerald-600 text-white font-medium shadow-xs'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {qp.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Waste2Worth. Built with care for a cleaner and greener planet.</p>
          <p className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
            <span>for College BCA Mini-Project Exhibition</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
