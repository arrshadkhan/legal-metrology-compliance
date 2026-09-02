import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { path: '/scan', icon: 'barcode_scanner', label: 'Scan Product' },
  { path: '/scans', icon: 'history', label: 'My Scans' },
  { path: '/complaints', icon: 'report_problem', label: 'Raise Complaint' },
  { path: '/my-complaints', icon: 'assignment', label: 'My Complaints' },
  { path: '/reports', icon: 'assessment', label: 'Reports' },
  { path: '/legal-information', icon: 'gavel', label: 'Legal Information' },
  { path: '/rules', icon: 'menu_book', label: 'Rules & Guidelines' },
  { path: '/help', icon: 'help', label: 'Help & Support' },
  { path: '/profile', icon: 'person', label: 'Profile' },
];

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <nav className={`
        bg-surface-container-lowest fixed left-0 top-0 h-screen w-[280px] 
        border-r border-outline-variant flex flex-col py-md px-sm z-40
        transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="mb-xl px-sm flex items-center justify-between">
          <div>
            <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-xs">
              <span className="material-symbols-outlined fill text-primary text-[28px]">shield</span>
              MetrologyGuard
            </div>
            <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Fair Weights. Fair Trade. Stronger India.</p>
          </div>
          <button 
            className="lg:hidden text-on-surface-variant"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-base pb-xl">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-sm px-sm py-xs rounded-lg transition-colors
                ${isActive 
                  ? 'text-primary font-bold border-r-4 border-primary bg-primary-fixed/10' 
                  : 'text-on-surface-variant hover:bg-surface-container'
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <span className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}>
                    {item.icon}
                  </span>
                  <span className="font-body-md text-body-md">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
