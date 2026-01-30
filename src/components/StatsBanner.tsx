import React from 'react';
import { motion } from 'motion/react';
import { Users, Star, Wand2 } from 'lucide-react';

const stats = [
  { icon: Wand2, value: "10,000+", label: "Designs Generated" },
  { icon: Users, value: "500+", label: "Pro Designers" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
];

export const StatsBanner = () => {
  return (
    <div className="w-full px-4 -mt-10 relative z-20 pointer-events-none flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rounded-full py-4 px-8 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 pointer-events-auto"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <stat.icon size={20} />
            </div>
            <div className="text-left">
              <p className="text-lg font-black text-gray-900 leading-none mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{stat.label}</p>
            </div>
            
            {/* Divider giữa các item (trừ item cuối) */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block w-px h-8 bg-gray-200 ml-8" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};