
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import SidebarMenu from './components/SidebarMenu';
import { LayoutGrid } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col z-10">
      {/* Top Header Row (Stats and Main Logo) */}
      <div className="flex justify-between items-center py-6 px-6 md:px-12 border-b border-white/5 bg-obsidian/20 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0077B6] to-oceanic rounded-lg flex items-center justify-center shadow-lg shadow-cyan-950/20">
            <span className="font-extrabold text-xl text-black">R</span>
          </div>
          <div className="text-xl tracking-tighter">
            <span className="font-extrabold text-white">Raman</span>
            <span className="text-gray-500 mx-1 font-light">AI|Labs</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <LayoutGrid size={14} className="text-gray-600" />
            <span>Mo Us-40</span>
          </div>
          <span>Status: Active</span>
          <span>Latency: Low</span>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full text-xs font-black tracking-tight transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
          Connect Me
        </button>
      </div>

      {/* Sub-Navigation (Page Links) */}
      <Navbar />
      
      <main className="flex-grow max-w-[1500px] mx-auto w-full px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-16 xl:gap-24">
        {/* Left Content Area */}
        <div className="flex-1 space-y-24">
          <Hero />
          <ProjectGrid />
        </div>

        {/* Right Sidebar Area */}
        <div className="lg:w-[320px] shrink-0 pt-10">
          <SidebarMenu />
        </div>
      </main>

      {/* Background Watermark */}
      <div className="fixed bottom-0 right-0 opacity-[0.03] select-none pointer-events-none p-10 leading-none">
        <h3 className="text-[25vw] font-black tracking-tighter text-white">RAMAN</h3>
      </div>
    </div>
  );
};

export default App;
