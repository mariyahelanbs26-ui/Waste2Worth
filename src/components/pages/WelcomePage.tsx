import React from 'react';
import { PageId } from '../../types';
import { Recycle, ArrowRight, LogIn, Sparkles, ShieldCheck, Leaf, Globe } from 'lucide-react';
import heroImage from '../../assets/images/hero_eco_recycling_1791293086731.jpg';

interface WelcomePageProps {
  onNavigate: (page: PageId) => void;
  onQuickDemoLogin: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({
  onNavigate,
  onQuickDemoLogin,
}) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* College Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <span className="text-base">♻️</span>
                <span>BCA Mini-Project · Waste Awareness Portal</span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <span className="text-emerald-700">Waste2Worth</span>
                  <br />
                  <span className="text-slate-800 text-3xl sm:text-4xl font-bold">
                    Turn Waste into Worth
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 font-medium pt-2">
                  Learn how to reduce, reuse and recycle waste for a cleaner and greener future.
                </p>
              </div>

              {/* Short Intro Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Every small habit counts. From segregating wet and dry garbage in your kitchen to creative upcycling of plastics and clothes, discover simple actions you can take today to protect our environment.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('login')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-emerald-800 bg-white hover:bg-emerald-50 rounded-xl border-2 border-emerald-300 shadow-xs transition-all cursor-pointer"
                >
                  <LogIn className="w-5 h-5 text-emerald-600" />
                  <span>Login</span>
                </button>
                <button
                  onClick={onQuickDemoLogin}
                  className="text-xs text-slate-500 hover:text-emerald-700 underline underline-offset-2 ml-1"
                >
                  Quick Demo Access
                </button>
              </div>

              {/* Highlights strip */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80">
                <div className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-700">6</div>
                  <div className="text-xs text-slate-500">Waste Categories</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-700">3 R's</div>
                  <div className="text-xs text-slate-500">Reduce, Reuse, Recycle</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-700">100%</div>
                  <div className="text-xs text-slate-500">Student & Eco Friendly</div>
                </div>
              </div>
            </div>

            {/* Right Visual Image & Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-100 shadow-xl bg-white group">
                <img
                  src={heroImage}
                  alt="Waste2Worth recycling and clean green environment"
                  className="w-full h-72 sm:h-80 object-cover transform group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback container if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="p-5 bg-white border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                      Mission Statement
                    </span>
                    <span className="text-base">🌱</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Sustainable Waste Awareness for Everyone
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Designed as a BCA Mini-Project to promote clean campuses, smart municipal segregation, and community recycling habits.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Core Pillars Section (Reduce, Reuse, Recycle) */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              The Three Golden Rules of Waste Management
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Transforming garbage into useful resources starts with these three fundamental principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Reduce Card */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                📉
              </div>
              <h3 className="text-lg font-bold text-slate-900">1. Reduce</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cut down the amount of waste generated at the source. Choose minimal packaging, avoid single-use plastics, and make mindful purchases.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-700">
                Key Action: Refuse single-use polythene bags.
              </div>
            </div>

            {/* Reuse Card */}
            <div className="p-6 rounded-2xl bg-teal-50/60 border border-teal-200/70 hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                🔄
              </div>
              <h3 className="text-lg font-bold text-slate-900">2. Reuse</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Find creative new uses for items before discarding them. Repurpose glass jars, clean food tins, and donate wearable clothing.
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-700">
                Key Action: Repurpose glass jars for spice storage.
              </div>
            </div>

            {/* Recycle Card */}
            <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-200/70 hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                ♻️
              </div>
              <h3 className="text-lg font-bold text-slate-900">3. Recycle</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sort waste materials into proper bins so they can be processed and manufactured into brand new products by recycling plants.
              </p>
              <div className="pt-2 text-xs font-semibold text-cyan-700">
                Key Action: Segregate dry paper and clean plastics.
              </div>
            </div>
          </div>

          {/* Quick CTA banner */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div>
              <h3 className="text-lg font-bold">Ready to discover all 6 waste categories?</h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                Explore common examples, recycling steps, and eco tips for plastics, metals, paper, and more.
              </p>
            </div>
            <button
              onClick={() => onNavigate('categories')}
              className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 text-sm font-semibold hover:bg-emerald-50 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              Explore Categories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
