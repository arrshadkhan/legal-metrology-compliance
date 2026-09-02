import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

const steps = [
  "Image uploaded",
  "Image preprocessing",
  "OCR text extraction",
  "Product information detection",
  "Product category identification",
  "Legal Metrology requirements retrieval",
  "Compliance verification",
  "Report generation"
];

export default function AnalysisWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const scanId = searchParams.get('id') || 'scan_001';
  const uploadedImage = location.state?.uploadedImage || null;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < steps.length) {
        setCurrentStep(current);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          navigate(`/results?id=${scanId}`, { state: { uploadedImage } });
        }, 800);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [navigate, scanId]);

  return (
    <div className="max-w-2xl mx-auto py-xl">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl shadow-sm text-center">
        
        <div className="mb-lg relative w-24 h-24 mx-auto">
          {/* Mock progress spinner */}
          <svg className="w-full h-full animate-spin text-primary/20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="10"></circle>
          </svg>
          <svg className="w-full h-full absolute inset-0 animate-[spin_2s_linear_infinite] text-primary" viewBox="0 0 100 100" style={{ strokeDasharray: '141', strokeDashoffset: '70' }}>
            <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="10" strokeLinecap="round"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[32px]">memory</span>
          </div>
        </div>

        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Analyzing Product</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
          Please wait while MetrologyGuard AI verifies the packaging compliance.
        </p>

        <div className="text-left max-w-md mx-auto space-y-md">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center gap-sm transition-opacity duration-500 ${index <= currentStep ? 'opacity-100' : 'opacity-0'}`}>
              {index < currentStep ? (
                <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
              ) : index === currentStep ? (
                <span className="material-symbols-outlined text-tertiary-container text-[24px] animate-pulse">hourglass_top</span>
              ) : (
                <span className="material-symbols-outlined text-outline-variant text-[24px]">radio_button_unchecked</span>
              )}
              <span className={`font-body-md text-body-md ${index <= currentStep ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
