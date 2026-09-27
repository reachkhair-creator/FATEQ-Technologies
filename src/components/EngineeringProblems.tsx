import React, { useState } from 'react';
import { 
  Unlink, 
  Gauge, 
  GitMerge, 
  History, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { engineeringProblems } from '../data/engineeringProblems';

interface EngineeringProblemsProps {
  onContactProblem: (problemTitle: string) => void;
}

export const EngineeringProblems: React.FC<EngineeringProblemsProps> = ({ onContactProblem }) => {
  const [selectedTab, setSelectedTab] = useState(engineeringProblems[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Unlink': return Unlink;
      case 'Gauge': return Gauge;
      case 'GitMerge': return GitMerge;
      case 'History': return History;
      default: return AlertTriangle;
    }
  };

  return (
    <section id="problems" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Real Engineering Bottlenecks
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading">
            Engineering Problems We Help Solve
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Teamcenter issues rarely stem from software bugs alone; they arise from misconfigured data models, disconnected CAD habits, and convoluted approval processes. Here is how we resolve the most persistent PLM roadblocks.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringProblems.map((problem) => {
            const Icon = getIcon(problem.iconName);
            const isCurrent = selectedTab === problem.id;

            return (
              <div
                key={problem.id}
                onClick={() => setSelectedTab(problem.id)}
                className={`p-6 sm:p-7 rounded-xl border transition-all cursor-pointer ${
                  isCurrent 
                    ? 'bg-slate-50 border-slate-300 shadow-xs ring-1 ring-slate-200' 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div 
                    className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: problem.accentColor }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span 
                    className="text-[11px] font-semibold font-mono px-2.5 py-1 rounded-md"
                    style={{ 
                      backgroundColor: `${problem.accentColor}15`, 
                      color: problem.accentColor 
                    }}
                  >
                    Root-Cause Resolution
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {problem.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  {problem.subtitle}
                </p>

                {/* Symptom */}
                <div className="mt-4 p-3 rounded-lg bg-white border border-slate-200/80 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-rose-700 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                    <span>Observed Symptom</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {problem.symptom}
                  </p>
                </div>

                {/* Technical Resolution */}
                <div className="mt-3 p-3 rounded-lg bg-emerald-50/60 border border-emerald-200/60 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-emerald-800 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>FATEQ Technical Resolution</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {problem.technicalResolution}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] text-slate-600">
                    Need technical intervention for this?
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onContactProblem(problem.title);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    <span>Discuss Fix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
