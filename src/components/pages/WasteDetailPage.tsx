import React from 'react';
import { PageId, WasteCategory } from '../../types';
import { WASTE_CATEGORIES } from '../../data/wasteData';
import {
  ArrowLeft,
  Info,
  TrendingDown,
  Repeat,
  RefreshCw,
  Sparkles,
  CheckCircle,
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';

interface WasteDetailPageProps {
  categoryId: string;
  onSelectCategory: (id: string) => void;
  onNavigate: (page: PageId) => void;
}

export const WasteDetailPage: React.FC<WasteDetailPageProps> = ({
  categoryId,
  onSelectCategory,
  onNavigate,
}) => {
  const currentCategory =
    WASTE_CATEGORIES.find((cat) => cat.id === categoryId) || WASTE_CATEGORIES[0];

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Top Back & Category Selector Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <button
            onClick={() => onNavigate('categories')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-900 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Categories</span>
          </button>

          {/* Quick Category Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {WASTE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  cat.id === currentCategory.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="mr-1">{cat.emoji}</span>
                <span>{cat.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hero Header Card for Category */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-5xl shadow-xs shrink-0">
              {currentCategory.emoji}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  {currentCategory.tag}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Degradation: {currentCategory.decompositionTime}</span>
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentCategory.name}
              </h1>
              <p className="text-sm text-slate-600 max-w-xl">
                {currentCategory.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* 1. What is it? & Common Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* What is it? */}
          <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-base">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <h3>What is {currentCategory.name}?</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {currentCategory.whatIsIt}
            </p>
          </div>

          {/* Common Examples */}
          <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-base">
              <Info className="w-5 h-5 text-emerald-600" />
              <h3>Common Examples</h3>
            </div>
            <ul className="space-y-2">
              {currentCategory.commonExamples.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 2. The 3 Actions: How to Reduce, Reuse, Recycle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* How to Reduce */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-emerald-700" />
              </div>
              <h4>How to Reduce It</h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {currentCategory.howToReduce.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Reuse */}
          <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-teal-800 font-bold">
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                <Repeat className="w-4 h-4 text-teal-700" />
              </div>
              <h4>How to Reuse It</h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {currentCategory.howToReuse.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Recycle */}
          <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-cyan-800 font-bold">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-cyan-700" />
              </div>
              <h4>How to Recycle It</h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {currentCategory.howToRecycle.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. Simple Environmental Tip */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-200">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Environmental Impact Fact</span>
          </div>
          <p className="text-base sm:text-lg font-medium leading-relaxed">
            "{currentCategory.environmentalTip}"
          </p>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
          <button
            onClick={() => onNavigate('categories')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition cursor-pointer"
          >
            ← Back to Categories Grid
          </button>
          <button
            onClick={() => onNavigate('tips')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition shadow-xs cursor-pointer"
          >
            Explore General Recycling Tips →
          </button>
        </div>

      </div>
    </div>
  );
};
