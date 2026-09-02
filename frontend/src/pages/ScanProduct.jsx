import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockScans } from '../data/mockData';

export default function ScanProduct() {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('Auto Detect');
  const [selectedMockProduct, setSelectedMockProduct] = useState('scan_001');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...filesArray]);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleAnalyze = () => {
    navigate(`/analysis?id=${selectedMockProduct}`, { state: { uploadedImage: images[0] || null } });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-md">
      <div className="mb-md">
        <h1 className="font-display text-display text-on-surface mb-xs">Scan Product Label</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Upload product images to check packaged commodity compliance.
        </p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
        
        {/* Upload Area */}
        <div className="border-2 border-dashed border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center text-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors mb-md relative">
          <input 
            type="file" 
            multiple 
            accept="image/jpeg, image/png, image/jpg"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
          <span className="material-symbols-outlined text-primary text-[48px] mb-sm">cloud_upload</span>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Drag & Drop or Browse</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">
            Support JPG, JPEG, PNG formats. You can upload multiple images.
          </p>
          <div className="flex gap-sm">
            <button className="bg-surface-container border border-outline-variant text-on-surface py-2 px-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-2 relative z-10 pointer-events-none">
              <span className="material-symbols-outlined text-[18px]">folder_open</span> Browse Files
            </button>
            <button className="bg-surface-container border border-outline-variant text-on-surface py-2 px-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-2 relative z-10">
              <span className="material-symbols-outlined text-[18px]">photo_camera</span> Capture Image
            </button>
          </div>
        </div>

        {/* Image Previews */}
        {images.length > 0 && (
          <div className="mb-lg">
            <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Selected Images ({images.length})</h4>
            <div className="flex flex-wrap gap-sm">
              {images.map((src, index) => (
                <div key={index} className="relative w-24 h-24 rounded-lg border border-outline-variant overflow-hidden group">
                  <img src={src} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-error/90 text-on-error w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                </div>
              ))}
              <div className="w-24 h-24 rounded-lg border border-outline-variant border-dashed flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors cursor-pointer relative">
                <input 
                  type="file" 
                  multiple 
                  accept="image/jpeg, image/png, image/jpg"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                <span className="material-symbols-outlined text-[24px]">add</span>
              </div>
            </div>
          </div>
        )}

        {/* Category Selector */}
        <div className="mb-lg">
          <label className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Product Category</label>
          <div className="relative focus-within:ring-2 focus-within:ring-primary/20 rounded-lg inline-block w-full sm:w-1/2">
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option value="Auto Detect">Auto Detect</option>
              <option value="Food">Packaged Food</option>
              <option value="Cosmetic">Cosmetic</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Packaged Commodity">General Packaged Commodity</option>
              <option value="Other">Other</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
          </div>
        </div>

        {/* Mock Product Selector (Simulator) */}
        <div className="mb-lg p-md border border-tertiary-container bg-tertiary-container/10 rounded-xl">
          <h4 className="font-label-md text-label-md text-tertiary font-bold mb-xs">Simulation Settings</h4>
          <p className="text-body-sm text-on-surface-variant mb-sm">Select a specific product to simulate scanning it.</p>
          <div className="relative focus-within:ring-2 focus-within:ring-primary/20 rounded-lg inline-block w-full">
            <select 
              value={selectedMockProduct}
              onChange={(e) => setSelectedMockProduct(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              {mockScans.map(scan => (
                <option key={scan.id} value={scan.id}>{scan.productName} ({scan.category})</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
          </div>
        </div>


        <div className="pt-sm border-t border-outline-variant/30 flex justify-end">
          <button 
            onClick={handleAnalyze}
            disabled={images.length === 0}
            className={`py-3 px-6 rounded-lg font-label-md text-label-md font-bold transition-colors flex items-center gap-2
              ${images.length > 0 
                ? 'bg-primary text-on-primary hover:bg-primary/90 shadow-sm' 
                : 'bg-surface-container-high text-on-surface-variant/50 cursor-not-allowed'
              }
            `}
          >
            <span className="material-symbols-outlined text-[18px]">analytics</span> Analyze Product
          </button>
        </div>
      </div>
    </div>
  );
}
