import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { complianceService } from '../services/complianceService';

export default function MyScans() {
  const [scans, setScans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    complianceService.getRecentScans().then(setScans);
  }, []);

  return (
    <div className="space-y-md">
      <div className="mb-md flex justify-between items-end">
        <div>
          <h1 className="font-display text-display text-on-surface mb-xs">My Scans</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            History of all products you have scanned.
          </p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm overflow-hidden flex flex-col">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-sm mb-md pb-md border-b border-outline-variant">
          <div className="relative focus-within:ring-2 focus-within:ring-primary/20 rounded-lg flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors" 
              placeholder="Search scans..." 
              type="text"
            />
          </div>
          <select className="bg-surface-container-lowest border border-outline-variant rounded-lg py-2 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer min-w-[150px]">
            <option value="">All Categories</option>
            <option value="Food">Packaged Food</option>
            <option value="Cosmetic">Cosmetic</option>
          </select>
          <select className="bg-surface-container-lowest border border-outline-variant rounded-lg py-2 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer min-w-[150px]">
            <option value="">All Statuses</option>
            <option value="COMPLIANT">Compliant</option>
            <option value="NEEDS REVIEW">Needs Review</option>
            <option value="NON-COMPLIANT">Non-Compliant</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-outline-variant text-on-surface-variant font-label-md text-label-md uppercase">
                <th className="py-2 px-3 font-semibold">Product</th>
                <th className="py-2 px-3 font-semibold">Category</th>
                <th className="py-2 px-3 font-semibold">Date</th>
                <th className="py-2 px-3 font-semibold">Score</th>
                <th className="py-2 px-3 font-semibold">Status</th>
                <th className="py-2 px-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {scans.length > 0 ? scans.map(scan => (
                <tr key={scan.id} className="border-b border-outline-variant/50 hover:bg-surface-container transition-colors">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-sm">
                      <img src={scan.imageUrl} alt={scan.productName} className="w-12 h-12 rounded object-cover border border-outline-variant/30" />
                      <div className="flex flex-col">
                        <span className="font-body-md font-semibold text-on-surface">{scan.productName}</span>
                        <span className="text-xs text-on-surface-variant mt-0.5">
                          {scan.extractedInfo?.brand && `${scan.extractedInfo.brand} • `}
                          {scan.extractedInfo?.netQuantity && `${scan.extractedInfo.netQuantity} • `}
                          {scan.extractedInfo?.mrp || 'MRP N/A'}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-on-surface-variant font-body-md text-sm">{scan.category}</td>
                  <td className="py-3 px-3 text-on-surface-variant font-body-md text-sm">{scan.date}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-xs">
                      <div className="w-full bg-surface-container-highest rounded-full h-2 max-w-[60px]">
                        <div 
                          className={`h-2 rounded-full ${scan.score >= 80 ? 'bg-primary' : scan.score >= 50 ? 'bg-tertiary-container' : 'bg-error'}`} 
                          style={{ width: `${scan.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold">{scan.score}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-1 rounded text-[10px] font-label-md flex items-center gap-1 w-fit
                      ${scan.status === 'COMPLIANT' ? 'bg-primary-container/10 text-primary-container border border-primary-container/20' : 
                        scan.status === 'NEEDS REVIEW' ? 'bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary-fixed-dim/30' : 
                        'bg-error-container text-on-error-container border border-error-container/30'}`}
                    >
                      <span className="material-symbols-outlined text-[12px]">
                        {scan.status === 'COMPLIANT' ? 'check_circle' : scan.status === 'NEEDS REVIEW' ? 'warning' : 'error'}
                      </span>
                      {scan.status}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <button 
                      onClick={() => navigate(`/results?id=${scan.id}`)}
                      className="text-primary hover:text-primary-container font-label-md text-label-md font-bold transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" className="py-lg text-center text-on-surface-variant font-body-md">
                    No scans found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
