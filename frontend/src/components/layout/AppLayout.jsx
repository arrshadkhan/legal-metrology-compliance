import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';

export default function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <div className="lg:ml-[280px] flex-1 flex flex-col min-h-screen max-w-full">
        <TopNavBar setMobileMenuOpen={setMobileMenuOpen} />
        <main className="flex-1 p-md lg:p-lg overflow-y-auto space-y-lg max-w-container-max mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
