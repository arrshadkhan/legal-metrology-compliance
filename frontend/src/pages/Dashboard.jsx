import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { complianceService } from '../services/complianceService';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recentScans, setRecentScans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    complianceService.getDashboardStats().then(setStats);
    complianceService.getRecentScans().then(setRecentScans);
  }, []);

  return (
    <div className="space-y-lg">
      {/* Hero Banner from code.html */}
      <div className="bg-gradient-to-r from-primary to-primary-container rounded-xl p-lg text-on-primary relative overflow-hidden shadow-sm">
        {/* Tricolor subtle decoration */}
        <div className="absolute top-0 right-0 w-64 h-full opacity-10 flex flex-col">
          <div className="flex-1 bg-[#FF9933]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#138808]"></div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-lg">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-xs bg-on-primary/20 backdrop-blur-sm px-sm py-1 rounded-full font-label-md text-label-md mb-md">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              AI Powered Analysis
            </div>
            <h1 className="font-display text-display mb-sm">Check. Comply. Complain.</h1>
            <p className="font-body-lg text-body-lg text-on-primary/90">
              Scan product labels, verify legal metrology compliance, and report violations — all in one place.
            </p>
          </div>
          <div className="hidden md:flex flex-col gap-sm">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined fill text-primary-fixed">verified_user</span>
              <span className="font-body-md text-body-md">Safer Consumers</span>
            </div>
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined fill text-primary-fixed">rule</span>
              <span className="font-body-md text-body-md">Compliant Products</span>
            </div>
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined fill text-primary-fixed">trending_up</span>
              <span className="font-body-md text-body-md">Stronger Markets</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
        <button 
          onClick={() => navigate('/scan')}
          className="bg-primary text-on-primary p-md rounded-xl shadow-sm flex flex-col items-center justify-center gap-sm hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined text-[32px]">barcode_scanner</span>
          <span className="font-headline-md text-[18px]">Scan New Product</span>
        </button>
        <button 
          onClick={() => navigate('/complaints')}
          className="bg-error-container text-on-error-container p-md rounded-xl shadow-sm flex flex-col items-center justify-center gap-sm hover:bg-error-container/80 transition-colors"
        >
          <span className="material-symbols-outlined text-[32px]">report_problem</span>
          <span className="font-headline-md text-[18px]">Raise Complaint</span>
        </button>
        <button 
          onClick={() => navigate('/rules')}
          className="bg-surface-container border border-outline-variant text-on-surface p-md rounded-xl shadow-sm flex flex-col items-center justify-center gap-sm hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[32px]">menu_book</span>
          <span className="font-headline-md text-[18px]">View Rules</span>
        </button>
        <button 
          onClick={() => navigate('/reports')}
          className="bg-surface-container border border-outline-variant text-on-surface p-md rounded-xl shadow-sm flex flex-col items-center justify-center gap-sm hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[32px]">assessment</span>
          <span className="font-headline-md text-[18px]">View Reports</span>
        </button>
      </div>

      {/* Statistics */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
            <div className="text-on-surface-variant font-label-md text-label-md mb-xs">Total Scanned</div>
            <div className="font-display text-display text-on-surface">{stats.totalScanned}</div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
            <div className="text-on-surface-variant font-label-md text-label-md mb-xs">Compliant</div>
            <div className="font-display text-display text-primary">{stats.compliant}</div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
            <div className="text-on-surface-variant font-label-md text-label-md mb-xs">Needs Review</div>
            <div className="font-display text-display text-tertiary-container">{stats.needsReview}</div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
            <div className="text-on-surface-variant font-label-md text-label-md mb-xs">Non-Compliant</div>
            <div className="font-display text-display text-error">{stats.nonCompliant}</div>
          </div>
        </div>
      )}

      {/* Recent Scans Table */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-md">
          <h2 className="font-headline-md text-headline-md text-on-surface">Recent Scans</h2>
          <Link to="/scans" className="text-primary hover:text-primary-container font-label-md text-label-md transition-colors flex items-center gap-1">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
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
              {recentScans.map(scan => (
                <tr key={scan.id} className="border-b border-outline-variant/50 hover:bg-surface-container transition-colors">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-sm">
                      <img src={scan.imageUrl} alt={scan.productName} className="w-10 h-10 rounded object-cover border border-outline-variant/30" />
                      <span className="font-body-md font-semibold text-on-surface">{scan.productName}</span>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
