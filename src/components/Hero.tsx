import React from 'react';
import { motion } from 'motion/react';
import { Panorama360 } from './Panorama360';

export const Hero = () => {
  return (
    <section className="relative pt-44 pb-32 px-4 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Nền gradient giống ảnh: trên-trái peach/orange → giữa hồng tím → dưới-phải xanh aqua, mượt ethereal */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden
        style={{
          background: [
            "linear-gradient(135deg, #fff8f2 0%, #fff0e8 15%, #ffe8f0 35%, #f5e6f8 55%, #eef0fc 75%, #e8f4fc 90%, #eef8ff 100%)",
            "radial-gradient(ellipse 140% 100% at 20% 30%, rgba(255,245,238,0.5) 0%, transparent 55%)",
            "radial-gradient(ellipse 120% 110% at 80% 80%, rgba(230,245,255,0.45) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      {/* Nội dung Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-5xl mx-auto mb-2 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-12 drop-shadow-sm">
          Design Your World,
          <br />
          <motion.span 
            className="inline-block bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          >
            Wide Open.
          </motion.span>
        </h1>
      </motion.div>

      {/* 360° View tương tác – kéo/scroll để xoay */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="relative w-full max-w-6xl aspect-[21/9] rounded-[70px] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.25)] group border-[14px] border-white/60 bg-gray-100"
      >
        <Panorama360
          src="https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/brown_photostudio_02.jpg"
          height="100%"
          hideNavbar
          mousewheel
          className="rounded-[56px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/50 text-white text-xs font-bold uppercase tracking-widest pointer-events-none">
          360° View
        </div>
        <div className="absolute bottom-12 left-12 text-white pointer-events-none">
          <h3 className="text-4xl font-black">Nebula Lounge</h3>
          <p className="text-sm font-bold opacity-70 uppercase tracking-widest">Design by Sergej Majboroda</p>
        </div>
      </motion.div>
    </section>
  );
};
