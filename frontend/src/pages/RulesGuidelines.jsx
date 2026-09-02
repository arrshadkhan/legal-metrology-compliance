import { useEffect, useState } from 'react';
import { complianceService } from '../services/complianceService';

export default function RulesGuidelines() {
  const [rules, setRules] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    complianceService.getRules().then(setRules);
  }, []);

  const filteredRules = rules.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-md max-w-4xl mx-auto">
      <div className="mb-md">
        <h1 className="font-display text-display text-on-surface mb-xs">Rules & Guidelines</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Search and review Legal Metrology (Packaged Commodities) Rules, 2011.
        </p>
      </div>

      <div className="relative focus-within:ring-2 focus-within:ring-primary/20 rounded-lg mb-lg">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-4 pl-12 pr-4 text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors shadow-sm" 
          placeholder="Search rules, declarations, requirements..." 
          type="text"
        />
      </div>

      <div className="space-y-md">
        {filteredRules.length > 0 ? filteredRules.map(rule => (
          <div key={rule.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary">gavel</span>
                {rule.title}
              </h3>
              <span className="bg-surface-container text-on-surface-variant px-2 py-1 rounded text-[10px] font-label-md uppercase tracking-wide">
                {rule.category}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">
              {rule.explanation}
            </p>
            <div className="pt-sm border-t border-outline-variant/30 flex justify-between items-center">
              <button className="text-primary hover:text-primary-container font-label-md text-label-md font-bold transition-colors flex items-center gap-1">
                View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )) : (
          <div className="text-center py-xl bg-surface-container-low rounded-xl border border-outline-variant/50">
            <span className="material-symbols-outlined text-[48px] text-on-surface-variant/50 mb-sm">search_off</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">No rules found</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We couldn't find any rules matching "{searchTerm}". Try a different keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
