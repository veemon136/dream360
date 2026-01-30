import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const styles = [
  { name: "Nordic Light", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400", rotate: -25, x: -180, y: 30, zIndex: 10 },
  { name: "Velvet Night", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400", rotate: -12, x: -90, y: 10, zIndex: 20 },
  { name: "Prism Pop", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400", rotate: 0, x: 0, y: 0, zIndex: 30 },
  { name: "Cyber Oasis", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=400", rotate: 12, x: 90, y: 10, zIndex: 20 },
  { name: "Zen Den", img: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=400", rotate: 25, x: 180, y: 30, zIndex: 10 }
];

export const StyleShowcase = () => {
  return (
    <section className="py-40 bg-white overflow-hidden relative">
      {/* Background loang màu cho phần Style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-100/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32">
          <h2 className="text-6xl font-black text-gray-900 mb-6 tracking-tighter">Dimensions of Style</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Choose your aesthetic universe</p>
        </div>

        <div className="relative h-[550px] flex items-center justify-center">
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, scale: 0.8, rotate: style.rotate, x: style.x }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ 
                zIndex: style.zIndex,
                position: 'absolute'
              }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.15, 
                zIndex: 100,
                y: -50,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="w-[260px] h-[380px] bg-white rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] cursor-pointer border-[6px] border-white group transform-gpu"
            >
              <ImageWithFallback 
                src={style.img} 
                alt={style.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <p className="text-white font-black text-xl mb-1 tracking-tight">{style.name}</p>
                <div className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-widest">
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="px-10 py-4 bg-gray-900 text-white rounded-full font-black shadow-xl hover:bg-black transition-all flex items-center gap-3 group">
            View All Dimensions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
