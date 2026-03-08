import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#000000] text-white relative selection:bg-white/20">
      {/* Secondary Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#0A0A0A] opacity-50" />
      
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex justify-center">
        <div className="absolute top-[-20%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-white/[0.04] blur-[160px]" />
        
        {/* SVG Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
