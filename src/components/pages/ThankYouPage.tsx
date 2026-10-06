import React from 'react';
import { PageId, ContactSubmission } from '../../types';
import { Recycle, ArrowLeft, LogOut, CheckCircle, Heart, Sparkles } from 'lucide-react';

interface ThankYouPageProps {
  lastSubmission: ContactSubmission | null;
  onNavigate: (page: PageId) => void;
  onLogout: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  lastSubmission,
  onNavigate,
  onLogout,
}) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50">
      <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-emerald-100 shadow-xl">
        
        {/* ♻️ Big Recycling Icon Animation Badge */}
        <div className="relative mx-auto w-24 h-24 rounded-full bg-emerald-100 border-4 border-emerald-200 flex items-center justify-center text-emerald-700 shadow-inner group">
          <Recycle className="w-14 h-14 animate-spin-slow text-emerald-600" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>

        {/* Headings */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
            <span>Submission Acknowledged</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thank You for Visiting Waste2Worth!
          </h1>
          <p className="text-base sm:text-lg text-emerald-800 font-semibold">
            “Together, let's Reduce, Reuse and Recycle.”
          </p>
        </div>

        {/* Submission Recap (if user submitted form) */}
        {lastSubmission && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs sm:text-sm text-slate-700 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-900">Message Receipt Summary</span>
              <span className="text-xs text-slate-500">
                Time: {lastSubmission.submittedAt || 'Just now'}
              </span>
            </div>
            <div>
              <span className="text-slate-500">Sender:</span>{' '}
              <strong className="text-slate-800">{lastSubmission.name}</strong> ({lastSubmission.email})
            </div>
            <div>
              <span className="text-slate-500">Subject:</span>{' '}
              <strong className="text-slate-800">{lastSubmission.subject}</strong>
            </div>
            <div className="text-slate-600 italic bg-white p-2.5 rounded-lg border border-slate-200/80">
              "{lastSubmission.message}"
            </div>
          </div>
        )}

        {/* Message body */}
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Your feedback and participation inspire our campus community. Keep following the 3 R's in your daily routines and spread environmental consciousness among your peers!
        </p>

        {/* Action Buttons: "Back to Home" and "Logout" */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={onLogout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-200 font-semibold text-sm transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Eco Quote */}
        <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <span>Waste2Worth College BCA Mini-Project</span>
          <span>•</span>
          <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
          <span>Department of Computer Applications</span>
        </div>

      </div>
    </div>
  );
};
