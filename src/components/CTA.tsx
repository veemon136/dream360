import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const CTA = () => {
  return (
    <section className="px-4 pb-20">
      <div className="max-w-7xl mx-auto relative rounded-[60px] bg-neutral-950 overflow-hidden py-24 px-8 md:px-20">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/20 to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <span className="text-2xl">✨</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Start Creating</h2>
            </div>
            <p className="text-gray-400 text-xl mb-12 max-w-lg leading-relaxed">
              Ready to design your world? Join the cosmic revolution of interior design today.
            </p>
            
            <button className="group relative bg-[#ff9bd2] hover:bg-[#ffb4de] text-black px-10 py-5 rounded-3xl font-black text-xl flex items-center gap-3 transition-all active:scale-95">
              Get Started for Free
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="mt-12 flex gap-8 text-white/50 font-medium">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="w-full max-w-[400px]"
          >
            {/* Replace with actual Genie image if available, using a placeholder for now */}
            <div className="relative aspect-square">
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
                  alt="Magic Character"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
