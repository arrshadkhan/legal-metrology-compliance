import { useEffect, useState } from 'react';
import { complianceService } from '../services/complianceService';

export default function Reports() {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    complianceService.getRecentScans().then(setScans);
  }, []);

  const handlePrint = (scan) => {
    // In a real app, this would generate a PDF or open a printable view
    window.print();
  };

  return (
    <div className="space-y-md">
      <div className="mb-md">
        <h1 className="font-display text-display text-on-surface mb-xs">Reports</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Generated compliance reports for scanned commodities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {scans.map(scan => (
          <div key={scan.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col h-full">
            <div className="flex items-start gap-sm mb-md">
              <img src={scan.imageUrl} alt={scan.productName} className="w-16 h-16 rounded object-cover border border-outline-variant/30" />
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-on-surface line-clamp-1">{scan.productName}</h3>
                <p className="font-body-md text-sm text-on-surface-variant">{scan.date}</p>
                <div className="mt-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-label-md inline-flex items-center gap-1
                    ${scan.status === 'COMPLIANT' ? 'bg-primary-container/10 text-primary-container' : 
                      scan.status === 'NEEDS REVIEW' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 
                      'bg-error-container text-on-error-container'}`}
                  >
                    {scan.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-lg p-sm border border-outline-variant/30 mb-md flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-label-md text-label-md text-on-surface-variant">Compliance Score</span>
                <span className={`font-headline-md text-headline-md font-bold ${scan.score >= 80 ? 'text-primary' : scan.score >= 50 ? 'text-tertiary-container' : 'text-error'}`}>{scan.score}%</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${scan.score >= 80 ? 'bg-primary' : scan.score >= 50 ? 'bg-tertiary-container' : 'bg-error'}`} 
                  style={{ width: `${scan.score}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-sm mt-auto pt-md border-t border-outline-variant/30">
              <button 
                onClick={() => handlePrint(scan)}
                className="flex-1 bg-surface-container text-on-surface py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors flex justify-center items-center gap-2 border border-outline-variant"
              >
                <span className="material-symbols-outlined text-[16px]">print</span> Print
              </button>
              <button 
                className="flex-1 bg-surface-container text-primary py-2 rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-colors flex justify-center items-center gap-2 border border-outline-variant"
              >
                <span className="material-symbols-outlined text-[16px]">download</span> PDF
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/50 text-center mt-xl">
        <span className="material-symbols-outlined text-on-surface-variant text-[24px] mb-xs">info</span>
        <p className="font-body-md text-body-md text-on-surface-variant">
          <strong>Disclaimer:</strong> This is an AI-assisted preliminary assessment and should not be treated as a final legal determination.
        </p>
      </div>
    </div>
  );
}
