import React, { useState } from 'react';
import { PageId } from '../../types';
import { RECYCLING_TIPS } from '../../data/wasteData';
import {
  Lightbulb,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  SplitSquareVertical,
  Ban,
  RefreshCw,
  FileText,
  HeartHandshake,
  Sprout,
  ShoppingBag
} from 'lucide-react';

interface RecyclingTipsPageProps {
  onNavigate: (page: PageId) => void;
}

export const RecyclingTipsPage: React.FC<RecyclingTipsPageProps> = ({ onNavigate }) => {
  const [completedTips, setCompletedTips] = useState<Record<string, boolean>>({});

  const toggleTip = (id: string) => {
    setCompletedTips((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(completedTips).filter(Boolean).length;

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-emerald-700' };
    switch (iconName) {
      case 'SplitSquareVertical':
        return <SplitSquareVertical {...props} />;
      case 'Ban':
        return <Ban {...props} />;
      case 'RefreshCw':
        return <RefreshCw {...props} />;
      case 'FileText':
        return <FileText {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Sprout':
        return <Sprout {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      default:
        return <Lightbulb {...props} />;
    }
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Practical Habits</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Essential Recycling Tips
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Simple everyday habits that make a massive difference in protecting our local environment and municipal landfills.
          </p>
        </div>

        {/* Interactive Habit Tracker Tracker Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold">
              {completedCount}/{RECYCLING_TIPS.length}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">
                Daily Green Habit Checklist
              </h4>
              <p className="text-xs text-slate-500">
                Click the checkbox on any tip to mark it as a habit you practice today!
              </p>
            </div>
          </div>

          <div className="w-full sm:w-64 bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500"
              style={{
                width: `${(completedCount / RECYCLING_TIPS.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* 7 Tips Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECYCLING_TIPS.map((tip, index) => {
            const isDone = !!completedTips[tip.id];
            return (
              <div
                key={tip.id}
                className={`bg-white rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between shadow-xs ${
                  isDone
                    ? 'border-emerald-500 ring-2 ring-emerald-200 bg-emerald-50/20'
                    : 'border-slate-200 hover:border-emerald-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      {renderIcon(tip.iconName)}
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      Tip 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      {tip.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {tip.title}
                    </h3>
                  </div>

                  {/* Short Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {tip.shortSummary}
                  </p>

                  {/* Steps */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-xs font-semibold text-slate-700">Action Steps:</span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {tip.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Environmental Benefit */}
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800 space-y-0.5">
                    <span className="font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      Eco Benefit:
                    </span>
                    <p className="leading-snug">{tip.ecoBenefit}</p>
                  </div>
                </div>

                {/* Interactive Checkbox Button */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => toggleTip(tip.id)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 cursor-pointer ${
                      isDone
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {isDone ? 'Habit Practiced! ✓' : 'Mark as Practiced'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation / Help banner */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Have questions or feedback on local recycling?
            </h3>
            <p className="text-sm text-slate-600">
              Reach out to our project team or read more about why this BCA project was developed.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('about')}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition cursor-pointer"
            >
              About Project
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition cursor-pointer shadow-xs"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
