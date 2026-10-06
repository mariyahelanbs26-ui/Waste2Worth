import React from 'react';
import { PageId } from '../../types';
import {
  Recycle,
  Target,
  GraduationCap,
  Heart,
  Globe,
  Leaf,
  CheckCircle2,
  Code2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Mini-Project</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Waste2Worth
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            A student initiative dedicated to waste reduction, community education, and environmental protection.
          </p>
        </div>

        {/* Section 1: What is Waste2Worth? */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Recycle className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">What is Waste2Worth?</h2>
              <p className="text-xs text-emerald-700 font-semibold">An Educational Waste-Awareness Platform</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            <strong>Waste2Worth</strong> is an awareness website designed to teach individuals how everyday waste can be diverted from dumpsites and transformed into worth. In rapid modern urban life, vast amounts of plastics, food scraps, electronics, and discarded clothing end up suffocating our ecosystems simply because people lack basic guidance on proper segregation and recycling methods.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Waste2Worth simplifies environmental knowledge into intuitive, everyday action steps that anyone can follow at home, in the college hostel, or at the workplace.
          </p>
        </div>

        {/* Section 2: Why Waste Management is Important */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
              <Globe className="w-5 h-5 text-teal-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Why Waste Management is Important</h2>
              <p className="text-xs text-teal-700 font-semibold">Protecting Public Health and Natural Resources</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-800">1. Prevents Landfill Overflow</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open dump heaps emit hazardous methane gases and foul smells. Proper segregation prevents heaps from piling up.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-800">2. Protects Groundwater & Soil</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toxic chemicals leaching from mixed garbage seep into underground drinking water reserves, endangering community health.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-800">3. Saves Finite Energy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manufacturing from recycled aluminum, glass, and paper saves up to 95% of industrial energy compared to mining raw ores.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Importance of Reduce, Reuse and Recycle (The 3 R's) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                The Importance of Reduce, Reuse and Recycle
              </h2>
              <p className="text-xs text-emerald-700 font-semibold">The Hierarchy of Sustainable Living</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The 3 R's form the cornerstone of waste management. They are arranged in a specific order of priority:
          </p>
          <div className="space-y-3 pt-1">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <span className="font-bold text-emerald-800 text-sm shrink-0">Priority 1:</span>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong>Reduce:</strong> Stop generating unnecessary waste. The less we buy and waste, the fewer materials enter the municipal stream.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-teal-50/70 border border-teal-100">
              <span className="font-bold text-teal-800 text-sm shrink-0">Priority 2:</span>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong>Reuse:</strong> Prolong item life cycles through upcycling, repairing, and sharing instead of instantly throwing items away.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-cyan-50/70 border border-cyan-100">
              <span className="font-bold text-cyan-800 text-sm shrink-0">Priority 3:</span>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong>Recycle:</strong> When an item is no longer reusable, sort it cleanly so it can be remelted and transformed into fresh goods.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Goal of the Website */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Goal of the Website</h2>
              <p className="text-xs text-amber-700 font-semibold">Bridging Computer Applications with Eco Awareness</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>Provide an accessible, clean, and interactive reference for 6 major waste categories.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>Encourage students to separate organic wet kitchen waste from dry recyclables.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>Demonstrate how web application technologies (HTML, CSS, JavaScript, React) can address real societal challenges.</span>
            </li>
          </ul>
        </div>

        {/* Section 5: BCA Project Specifications Card */}
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">
                BCA Mini-Project Information Card
              </h3>
            </div>
            <span className="text-xs bg-emerald-600/50 text-emerald-200 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
              Department of Computer Applications
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="space-y-1 bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-slate-400 uppercase font-semibold">Project Title</span>
              <p className="font-bold text-emerald-300">Waste2Worth</p>
              <p className="text-slate-300">Turn Waste into Worth</p>
            </div>

            <div className="space-y-1 bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-slate-400 uppercase font-semibold">Course & Degree</span>
              <p className="font-bold text-emerald-300">Bachelor of Computer Applications</p>
              <p className="text-slate-300">BCA Mini-Project 2026</p>
            </div>

            <div className="space-y-1 bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-slate-400 uppercase font-semibold">Frontend Technologies</span>
              <p className="font-bold text-emerald-300">React + TypeScript + Vite</p>
              <p className="text-slate-300">Tailwind CSS & Lucide Icons</p>
            </div>

            <div className="space-y-1 bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-slate-400 uppercase font-semibold">Project Architecture</span>
              <p className="font-bold text-emerald-300">10 Full Interactive Pages</p>
              <p className="text-slate-300">Zero Mock Stubs · Clean UX</p>
            </div>
          </div>
        </div>

        {/* CTA to Contact */}
        <div className="pt-2 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition cursor-pointer"
          >
            <span>Have Feedback or Questions? Contact Us</span>
          </button>
        </div>

      </div>
    </div>
  );
};
