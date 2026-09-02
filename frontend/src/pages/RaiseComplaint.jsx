import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { complianceService } from '../services/complianceService';

export default function RaiseComplaint() {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';
  
  const [formData, setFormData] = useState({
    productName: initialProduct,
    issueType: 'Other',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successId, setSuccessId] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await complianceService.submitComplaint(formData);
      setSuccessId(result.id);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successId) {
    return (
      <div className="max-w-2xl mx-auto py-xl">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl shadow-sm text-center">
          <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mx-auto mb-md">
            <span className="material-symbols-outlined text-[32px]">check_circle</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Complaint Submitted</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            Your complaint has been successfully registered.
          </p>
          <div className="bg-surface-container-low border border-outline-variant rounded-lg p-sm inline-block mb-lg">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-1">Complaint ID</span>
            <span className="font-headline-md text-headline-md text-primary font-bold">{successId}</span>
          </div>
          <div className="flex justify-center gap-sm">
            <button 
              onClick={() => navigate('/my-complaints')}
              className="bg-primary text-on-primary py-2 px-6 rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-colors"
            >
              Track Status
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-surface-container text-on-surface py-2 px-6 rounded-lg font-label-md text-label-md border border-outline-variant hover:bg-surface-container-high transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-md">
      <div className="mb-md">
        <h1 className="font-display text-display text-on-surface mb-xs">Raise Complaint</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Report non-compliant packaged commodities to the Legal Metrology Department.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm space-y-lg">
        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Product Name</label>
          <input 
            type="text" 
            required
            value={formData.productName}
            onChange={(e) => setFormData({...formData, productName: e.target.value})}
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
            placeholder="Enter product name..."
          />
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Issue Type</label>
          <div className="relative focus-within:ring-2 focus-within:ring-primary/20 rounded-lg">
            <select 
              value={formData.issueType}
              onChange={(e) => setFormData({...formData, issueType: e.target.value})}
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option value="MRP Issue">MRP Issue</option>
              <option value="Quantity Issue">Quantity Issue</option>
              <option value="Manufacturer Details">Manufacturer Details Missing</option>
              <option value="Consumer Care">Consumer Care Info Missing</option>
              <option value="Other">Other Violation</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
          </div>
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Description</label>
          <textarea 
            required
            rows="4"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Please describe the violation in detail..."
          ></textarea>
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Upload Evidence (Optional)</label>
          <div className="border-2 border-dashed border-outline-variant rounded-lg p-sm flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer relative group">
            <input 
              type="file" 
              multiple 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-1 text-on-surface-variant group-hover:text-primary transition-colors pointer-events-none">
              <span className="material-symbols-outlined">add_photo_alternate</span>
              <span className="font-label-md text-label-md">Click or drag images here</span>
            </div>
          </div>
        </div>

        <div className="pt-md border-t border-outline-variant/30 flex justify-end gap-sm">
          <button 
            type="button"
            onClick={() => navigate(-1)}
            className="py-3 px-6 rounded-lg font-label-md text-label-md border border-outline-variant text-on-surface hover:bg-surface-container transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            disabled={isSubmitting || !formData.productName}
            className="py-3 px-6 rounded-lg font-label-md text-label-md font-bold bg-error text-on-error hover:bg-on-error-container transition-colors flex items-center gap-2 shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
            ) : (
              <span className="material-symbols-outlined text-[18px]">send</span>
            )}
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
}
