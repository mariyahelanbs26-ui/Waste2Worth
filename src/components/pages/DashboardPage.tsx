import React from 'react';
import { PageId, User } from '../../types';
import {
  Recycle,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Repeat,
  RefreshCw,
  CheckCircle,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import sortingImage from '../../assets/images/waste_sorting_guide_1791293102151.jpg';

interface DashboardPageProps {
  currentUser: User | null;
  onNavigate: (page: PageId) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  currentUser,
  onNavigate,
  onSelectCategory,
}) => {
  const userName = currentUser ? currentUser.name : 'Eco Enthusiast';

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/60 border border-emerald-400/40 text-emerald-100 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Student Eco Dashboard Active</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Welcome back, {userName}! 🌿
            </h1>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Every small action counts. Explore practical guides on how to reduce consumption, reuse everyday items, and sort waste for proper recycling.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('categories')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-950 bg-white hover:bg-emerald-50 rounded-xl shadow-xs transition cursor-pointer"
              >
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>Explore Waste Categories</span>
              </button>
              <button
                onClick={() => onNavigate('tips')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600/70 hover:bg-emerald-600 rounded-xl border border-emerald-400/30 transition cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Recycling Tips</span>
              </button>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-10 opacity-15 pointer-events-none text-white">
            <Recycle className="w-72 h-72" />
          </div>
        </div>

        {/* Project Introduction Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Project Introduction</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              What is Waste2Worth?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Waste2Worth</strong> is an interactive waste-management awareness website created as a <strong>College BCA Mini-Project</strong>. Its mission is to transform people's perspective on discarded materials: waste is not merely trash to dump, but an unharvested resource with economic and ecological worth.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              By educating college students, faculty, and household members on how to categorize waste and apply the <strong>3 R's</strong> (Reduce, Reuse, Recycle), we reduce pressure on local landfills and build a sustainable community habit.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <span>✓ Simple & Clean Navigation</span>
              <span>✓ 6 Comprehensive Categories</span>
              <span>✓ Actionable Daily Tips</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src={sortingImage}
                alt="Neat sorting of waste items"
                className="w-full h-56 sm:h-64 object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 text-center">
                Sorted Glass, Paper, Metal & Organic Materials
              </div>
            </div>
          </div>
        </div>

        {/* Three Core Sections: Reduce, Reuse, Recycle */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The 3 Pillars of Waste Management
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Explore how each pillar plays a distinct role in saving our environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Pillar 1: Reduce */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:border-emerald-300 transition space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">1. Reduce (Minimization)</h3>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                  Stop waste before it starts
                </p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                The most effective way to manage waste is to not create it in the first place. Reducing consumption cuts resource extraction and processing energy.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Carry reusable cloth bags and stainless water bottles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Choose electronic notes and bills over paper printouts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Purchase items with minimal plastic packaging.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Reuse */}
            <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-xs hover:border-teal-300 transition space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Repeat className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">2. Reuse (Repurposing)</h3>
                <p className="text-xs font-semibold text-teal-700 mt-0.5">
                  Give items a second life
                </p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reusing involves finding alternative applications for items that would otherwise end up in trash cans, extending their functional lifespan.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                  <span>Wash empty glass and plastic jars for kitchen pantry storage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                  <span>Donate gently used clothes and textbooks to junior students.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                  <span>Convert tin cans into desk pen holders or plant pots.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Recycle */}
            <div className="bg-white rounded-2xl p-6 border border-cyan-100 shadow-xs hover:border-cyan-300 transition space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-cyan-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">3. Recycle (Reprocessing)</h3>
                <p className="text-xs font-semibold text-cyan-700 mt-0.5">
                  Remanufacture raw materials
                </p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recycling breaks discarded materials down into raw components to manufacture brand new goods, saving forests and raw ores.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                  <span>Segregate dry items (paper, glass, metal) from wet food waste.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                  <span>Rinse food grease off plastics and aluminum cans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                  <span>Sell paper and scrap metal to local certified scrap dealers.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Quick Quick-Link CTA to Explore Categories */}
        <div className="p-8 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">
              Ready to delve into specific waste types?
            </h3>
            <p className="text-sm text-slate-600">
              Check out our detailed guides for Plastic, Paper, Glass, Metal, Food, and Textile waste.
            </p>
          </div>
          <button
            onClick={() => onNavigate('categories')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition cursor-pointer shrink-0"
          >
            <span>Explore Waste Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
