import { useEffect, useState } from 'react';
import { complianceService } from '../services/complianceService';

export default function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    complianceService.getMyComplaints().then(setComplaints);
  }, []);

  return (
    <div className="space-y-md">
      <div className="mb-md flex justify-between items-end">
        <div>
          <h1 className="font-display text-display text-on-surface mb-xs">My Complaints</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Track the status of your reported violations.
          </p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-outline-variant text-on-surface-variant font-label-md text-label-md uppercase">
                <th className="py-2 px-3 font-semibold">Complaint ID</th>
                <th className="py-2 px-3 font-semibold">Product</th>
                <th className="py-2 px-3 font-semibold">Issue</th>
                <th className="py-2 px-3 font-semibold">Date</th>
                <th className="py-2 px-3 font-semibold">Status</th>
                <th className="py-2 px-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {complaints.length > 0 ? complaints.map(complaint => (
                <tr key={complaint.id} className="border-b border-outline-variant/50 hover:bg-surface-container transition-colors">
                  <td className="py-3 px-3 font-body-md font-bold text-on-surface">{complaint.id}</td>
                  <td className="py-3 px-3 font-body-md text-on-surface">{complaint.product}</td>
                  <td className="py-3 px-3 text-on-surface-variant font-body-md text-sm">{complaint.issue}</td>
                  <td className="py-3 px-3 text-on-surface-variant font-body-md text-sm">{complaint.date}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-1 rounded text-[10px] font-label-md flex items-center gap-1 w-fit
                      ${complaint.status === 'Resolved' ? 'bg-primary-container/10 text-primary-container border border-primary-container/20' : 
                        complaint.status === 'Under Review' ? 'bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary-fixed-dim/30' : 
                        'bg-surface-container-high text-on-surface-variant border border-outline-variant/30'}`}
                    >
                      <span className="material-symbols-outlined text-[12px]">
                        {complaint.status === 'Resolved' ? 'check_circle' : complaint.status === 'Under Review' ? 'schedule' : 'inbox'}
                      </span>
                      {complaint.status}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <button className="text-primary hover:text-primary-container font-label-md text-label-md font-bold transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" className="py-lg text-center text-on-surface-variant font-body-md">
                    No complaints found.
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
