export default function LegalInfo() {
  return (
    <div className="space-y-md max-w-4xl mx-auto">
      <div className="mb-md">
        <h1 className="font-display text-display text-on-surface mb-xs">Legal Information</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          General information regarding Legal Metrology compliance.
        </p>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl shadow-sm text-center text-on-surface-variant">
        <span className="material-symbols-outlined text-[48px] mb-sm opacity-50">gavel</span>
        <p className="font-body-md text-body-md">Detailed legal information content goes here.</p>
      </div>
    </div>
  );
}
