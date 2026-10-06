import React, { useState } from 'react';
import { PageId, WasteCategory } from '../../types';
import { WASTE_CATEGORIES } from '../../data/wasteData';
import { ArrowRight, Layers, Search, Sparkles } from 'lucide-react';

interface CategoriesPageProps {
  onSelectCategory: (categoryId: string) => void;
  onNavigate: (page: PageId) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onSelectCategory,
  onNavigate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = WASTE_CATEGORIES.filter((cat) => {
    const term = searchTerm.toLowerCase();
    return (
      cat.name.toLowerCase().includes(term) ||
      cat.shortDescription.toLowerCase().includes(term) ||
      cat.tag.toLowerCase().includes(term)
    );
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Knowledge Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Waste Categories
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Learn about the six major classifications of everyday waste and how to manage them responsibly.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search plastic, paper, glass, food..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category Header with Icon & Emoji */}
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-3xl shadow-xs group-hover:scale-110 transition-transform">
                    {category.emoji}
                  </div>
                  <span className="text-xs font-medium text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-md border border-emerald-200">
                    {category.tag}
                  </span>
                </div>

                {/* Name & Short Description */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Decomposition: {category.decompositionTime}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {category.shortDescription}
                </p>
              </div>

              {/* Action Button: Learn More */}
              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => onSelectCategory(category.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-emerald-600 text-slate-700 group-hover:text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-slate-200 group-hover:border-emerald-600 shadow-xs"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">
              No categories match "<strong>{searchTerm}</strong>".
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Bottom Context Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Want practical daily recycling techniques?
              </h4>
              <p className="text-xs text-slate-600">
                Check our curated step-by-step recycling tips for home, campus, and kitchen.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('tips')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shadow-xs"
          >
            View Recycling Tips
          </button>
        </div>

      </div>
    </div>
  );
};
