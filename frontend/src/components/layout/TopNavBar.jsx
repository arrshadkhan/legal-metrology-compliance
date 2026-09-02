export default function TopNavBar({ setMobileMenuOpen }) {
  return (
    <header className="bg-surface docked full-width top-0 border-b border-outline-variant shadow-sm flex justify-between items-center h-16 px-lg sticky z-30">
      <div className="flex items-center gap-md flex-1 max-w-xl">
        <button 
          className="lg:hidden text-on-surface-variant hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="relative focus-within:ring-2 focus-within:ring-primary/20 rounded-lg flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors" 
            placeholder="Search products, brands, or rules..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-md ml-auto">
        <button className="text-on-surface-variant hover:text-primary transition-all relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="flex items-center gap-sm">
          <div className="text-right hidden sm:block">
            <div className="font-label-md text-label-md text-on-surface">Anuj Yadav</div>
            <div className="font-label-md text-label-md text-on-surface-variant text-[10px]">Consumer</div>
          </div>
          <img 
            alt="Anuj Yadav Profile Avatar" 
            className="w-8 h-8 rounded-full object-cover border border-outline-variant" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxU3o2jxlIAqwkZPJIYB0T4ZTlQoF1JxqwzCv6U2Wr2u0jnZo4RxvHJAjDLRCKNCzQpNot5DIjnBZhJOsp6nKW2SSXPerIu6unvrgPrGeS-wUED_pAwxQ7TV2xsN048VYevC0sI5D0GlkdfQYKmMeAKBiKJzJifXbXeQittFrRxePJRhwVaj88Gk7rwBDvWeHtyvJthsbWfwGielePP3nAA8S3ZFMA6ANW2VhPfhJswjioUUIz5jz8Vw"
          />
        </div>
      </div>
    </header>
  );
}
