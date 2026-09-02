import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { complianceService } from '../services/complianceService';

export default function ComplianceResults() {
  const [searchParams] = useSearchParams();
  const scanId = searchParams.get('id') || 'scan_001';
  const [scan, setScan] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const uploadedImage = location.state?.uploadedImage || null;

  useEffect(() => {
    complianceService.getScanResult(scanId).then(setScan);
  }, [scanId]);

  if (!scan) {
    return <div className="p-xl text-center">Loading...</div>;
  }

  return (
    <div className="space-y-md">
      <div className="flex items-center gap-sm mb-md">
        <button onClick={() => navigate(-1)} className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">Compliance Assessment</h1>
      </div>

      {/* 3 Column Layout from code.html */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        
        {/* Col 1: Scanned Product */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-headline-md text-headline-md text-on-surface">Scanned Product</h2>
          </div>
          <div className="flex-1 bg-surface-container-low rounded-lg border border-outline-variant/50 p-sm mb-md flex items-center justify-center overflow-hidden">
            <img src={uploadedImage || scan.imageUrl} alt="Scanned Product" className="max-w-full max-h-[250px] object-contain rounded" />
          </div>
        </div>

        {/* Col 2: Extracted Information */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
          <div className="flex justify-between items-center mb-md pb-sm border-b border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-on-surface">Extracted Information</h2>
            <span className="bg-surface-container text-on-surface-variant px-2 py-1 rounded text-[10px] font-label-md">OCR Active</span>
          </div>
          
          <div className="space-y-sm">
            <div className="flex justify-between items-start py-1">
              <span className="font-body-md text-body-md text-on-surface-variant w-1/3">Product Name</span>
              <span className="font-body-md text-body-md text-on-surface font-semibold text-right flex-1">{scan.productName}</span>
            </div>
            {scan.extractedInfo && Object.entries(scan.extractedInfo).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start py-1">
                <span className="font-body-md text-body-md text-on-surface-variant w-1/3 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="font-body-md text-body-md text-on-surface font-semibold text-right flex-1">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: Compliance Result */}
        <div className="bg-surface-container-lowest border-l-4 border-l-tertiary-container border border-outline-variant rounded-xl p-md shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-headline-md text-headline-md text-on-surface">Compliance Result</h2>
            <span className={`px-3 py-1 rounded-full font-label-md text-label-md flex items-center gap-1
              ${scan.status === 'COMPLIANT' ? 'bg-primary-container text-on-primary-container' : 
                scan.status === 'NEEDS REVIEW' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 
                'bg-error-container text-on-error-container'}`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {scan.status === 'COMPLIANT' ? 'check_circle' : scan.status === 'NEEDS REVIEW' ? 'warning' : 'error'}
              </span>
              {scan.status}
            </span>
          </div>
          
          <div className="flex items-center justify-center mb-lg mt-sm">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="45" stroke="#e5eeff" strokeWidth="10"></circle>
                <circle 
                  className="transition-all duration-1000 ease-out" 
                  cx="50" cy="50" fill="none" r="45" 
                  stroke={scan.score >= 80 ? '#004532' : scan.score >= 50 ? '#ffb960' : '#ba1a1a'} 
                  strokeDasharray="282.7" 
                  strokeDashoffset={282.7 - (282.7 * scan.score) / 100} 
                  strokeWidth="10"
                ></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-display text-display text-on-surface">{scan.score}%</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Score</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-sm">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Compliance Checks</h3>
            {scan.complianceChecks?.map(check => (
              <div key={check.id} className={`flex items-start gap-sm ${check.status === 'NON-COMPLIANT' ? 'p-sm bg-error-container/30 rounded-lg border border-error-container mt-md' : ''}`}>
                <span className={`material-symbols-outlined text-[20px] mt-0.5 ${check.status === 'PASS' ? 'text-primary' : check.status === 'NEEDS REVIEW' ? 'text-tertiary-container' : 'text-error'}`}>
                  {check.status === 'PASS' ? 'check_circle' : check.status === 'NEEDS REVIEW' ? 'warning' : 'error'}
                </span>
                <div>
                  <div className={`font-body-md text-body-md font-semibold ${check.status === 'NON-COMPLIANT' ? 'text-error' : 'text-on-surface'}`}>{check.label}</div>
                  {check.status !== 'PASS' && (
                    <div className="font-body-md text-body-md text-on-surface-variant text-sm">{check.message}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lower Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {/* AI Detection View */}
        <div className="bg-surface-container-lowest border border-secondary-container/50 rounded-xl p-md shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-secondary-container"></div>
          <div className="flex items-center gap-xs mb-md">
            <span className="material-symbols-outlined text-secondary">memory</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">AI Detection View</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-md">
            <div className="w-full md:w-1/2 bg-surface-container-low rounded-lg p-xs border border-outline-variant/30 relative">
              <div className="relative inline-block w-full">
                <img src={uploadedImage || scan.imageUrl} alt="Annotated Label" className="w-full rounded" />
                <div className="absolute border-2 border-primary bg-primary/10 rounded-sm" style={{ top: '45%', left: '45%', width: '50%', height: '25%' }}></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-xs">
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-sm">Legend</h3>
              <div className="flex items-center gap-sm p-2 rounded bg-surface hover:bg-surface-container transition-colors">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="font-body-md text-body-md text-on-surface text-sm">Net Quantity Box</span>
              </div>
              <div className="flex items-center gap-sm p-2 rounded bg-surface hover:bg-surface-container transition-colors">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="font-body-md text-body-md text-on-surface text-sm">MRP Block</span>
              </div>
              <div className="flex items-center gap-sm p-2 rounded bg-surface hover:bg-surface-container transition-colors">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="font-body-md text-body-md text-on-surface text-sm">Mfg Details Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action & Issues Area */}
        <div className="space-y-md flex flex-col justify-between">
          {scan.status !== 'COMPLIANT' && (
            <div className="bg-surface-container-lowest border border-error-container rounded-xl p-md shadow-sm">
              <div className="flex justify-between items-start mb-sm">
                <div className="flex items-center gap-xs text-error">
                  <span className="material-symbols-outlined">gavel</span>
                  <h3 className="font-headline-md text-[18px] font-semibold">Violation Detected</h3>
                </div>
                <span className="bg-error-container text-on-error-container px-2 py-1 rounded text-[10px] font-label-md uppercase tracking-wide">High Severity</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface mb-sm">Consumer-care details not found on the principal display panel.</p>
              <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant/30 flex items-start gap-sm">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">lightbulb</span>
                <div>
                  <span className="font-label-md text-label-md text-on-surface-variant block mb-1">Suggested Action</span>
                  <span className="font-body-md text-body-md text-on-surface text-sm">Contact manufacturer to add email/phone info to label per Rule 6(2).</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
            <h3 className="font-headline-md text-[18px] text-on-surface mb-md">Take Action</h3>
            <div className="flex flex-col sm:flex-row gap-sm">
              <button 
                onClick={() => navigate(`/complaints?product=${encodeURIComponent(scan.productName)}`)}
                className="flex-1 bg-error text-on-error py-3 px-4 rounded-lg font-label-md text-label-md font-bold hover:bg-on-error-container transition-colors flex justify-center items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">report</span> Raise Complaint
              </button>
              <button className="flex-1 bg-transparent border-2 border-primary text-primary py-3 px-4 rounded-lg font-label-md text-label-md font-bold hover:bg-primary/5 transition-colors flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">download</span> Download Report (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tools Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md pb-xl">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-sm mb-sm text-on-surface-variant">
            <span className="material-symbols-outlined">menu_book</span>
            <h4 className="font-label-md text-label-md">Related Legal Rule</h4>
          </div>
          <p className="font-body-md text-body-md text-on-surface font-semibold mb-2">Rule 6 — Declarations on package</p>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">Every package shall bear thereon or on a label securely affixed thereto a definite, plain and conspicuous declaration...</p>
          <button 
            onClick={() => navigate('/rules')}
            className="text-primary hover:text-primary-container font-label-md text-label-md mt-sm self-start flex items-center gap-1 transition-colors"
          >
            Read Full Rule <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>

        <div className="bg-surface-container-lowest border border-secondary-container/50 rounded-xl p-md shadow-sm flex flex-col">
          <div className="flex items-center gap-sm mb-sm text-secondary">
            <span className="material-symbols-outlined">smart_toy</span>
            <h4 className="font-label-md text-label-md">Ask Legal Assistant</h4>
          </div>
          <div className="flex-1 flex flex-col justify-end gap-sm mt-auto">
            <div className="flex bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all">
              <input className="flex-1 bg-transparent border-none py-2 px-3 text-body-md text-on-surface focus:outline-none focus:ring-0" placeholder="e.g., What is the penalty for missing MRP?" type="text"/>
              <button className="bg-secondary text-on-primary px-4 py-2 font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-colors">
                Ask
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
          <div className="flex items-center gap-sm mb-md text-on-surface-variant">
            <span className="material-symbols-outlined">route</span>
            <h4 className="font-label-md text-label-md">What's Next?</h4>
          </div>
          <div className="space-y-sm relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-outline-variant before:to-surface-container-lowest">
            <div className="relative flex items-center gap-sm">
              <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-[10px] z-10 border-2 border-surface-container-lowest shadow-sm">1</div>
              <span className="font-body-md text-body-md text-on-surface line-through text-outline">Review Scan Data</span>
            </div>
            <div className="relative flex items-center gap-sm cursor-pointer" onClick={() => navigate(`/complaints?product=${encodeURIComponent(scan.productName)}`)}>
              <div className="w-6 h-6 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-label-md text-[10px] z-10 border-2 border-surface-container-lowest shadow-sm">2</div>
              <span className="font-body-md text-body-md text-on-surface font-semibold hover:text-error transition-colors">Raise Complaint</span>
            </div>
            <div className="relative flex items-center gap-sm cursor-pointer" onClick={() => navigate('/my-complaints')}>
              <div className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-md text-[10px] z-10 border-2 border-surface-container-lowest shadow-sm">3</div>
              <span className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Track Resolution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
