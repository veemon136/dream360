import React from 'react';
import { motion } from 'motion/react';
import { User } from 'lucide-react';

interface NavbarProps {
  onOpenAuth?: (state: 'login' | 'register') => void;
  onNavigate?: (page: 'home' | 'explore' | 'upload') => void;
  currentPage?: 'home' | 'explore' | 'upload';
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onNavigate, currentPage = 'home' }) => {
  const isUpload = currentPage === 'upload';
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between pointer-events-none"
    >
      {/* Logo - Left */}
      <div className="pointer-events-auto flex-1 flex justify-start">
        <img 
          src="/LogoDream360.png" 
          alt="Dream360" 
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* Menu - Center (cố định giữa màn hình) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 px-8 py-3 bg-white/80 backdrop-blur-xl border border-white/50 rounded-full shadow-lg pointer-events-auto ring-1 ring-black/5">
        <button 
          onClick={() => onNavigate?.('home')}
          className={`text-sm font-bold transition-colors ${
            currentPage === 'home' ? 'text-orange-500' : 'text-gray-600 hover:text-black'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate?.('explore')}
          className={`text-sm font-bold transition-colors ${
            currentPage === 'explore' ? 'text-orange-500' : 'text-gray-600 hover:text-black'
          }`}
        >
          Explore
        </button>
        <button 
          onClick={() => onNavigate?.('upload')}
          className={`text-sm font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
            isUpload ? 'text-orange-500' : 'text-orange-500 hover:text-orange-600'
          }`}
        >
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          Create
        </button>
      </div>

      {/* Login - Right */}
      <div className="flex flex-1 justify-end items-center gap-2 pointer-events-auto">
        <motion.button
          onClick={() => onOpenAuth?.('login')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm font-bold text-sm hover:bg-white transition-all relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          <span className="relative z-10">Login</span>
          <div className="relative z-10 w-7 h-7 bg-orange-100 rounded-full border border-orange-200 flex items-center justify-center overflow-hidden group-hover:bg-orange-500 transition-colors">
            <User className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors" />
          </div>
        </motion.button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </motion.nav>
  );
};
