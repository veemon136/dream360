import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Copy, Heart } from 'lucide-react';
import { Panorama360 } from './Panorama360';

interface Design {
  id: string;
  title: string;
  author: string;
  category: 'Living Room' | 'Bedroom' | 'Kitchen' | 'Office' | 'Bathroom';
  image: string;
  panorama360: string;
  prompt: string;
  likes: number;
}

const mockDesigns: Design[] = [
  {
    id: '1',
    title: 'Modern Minimalist Living',
    author: 'Sarah Chen',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'A modern minimalist living room with clean lines, neutral colors, and natural lighting',
    likes: 234
  },
  {
    id: '2', 
    title: 'Cozy Rustic Bedroom',
    author: 'Marcus Johnson',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'A cozy rustic bedroom with wooden furniture, warm lighting, and soft textiles',
    likes: 189
  },
  {
    id: '3',
    title: 'Industrial Kitchen',
    author: 'Elena Rodriguez',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'An industrial style kitchen with exposed brick, metal fixtures, and dark cabinets',
    likes: 156
  },
  {
    id: '4',
    title: 'Modern Home Office',
    author: 'David Kim',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'A modern home office with ergonomic furniture, plenty of natural light, and organized storage',
    likes: 298
  },
  {
    id: '5',
    title: 'Zen Bathroom Retreat',
    author: 'Yuki Tanaka',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'A zen-inspired bathroom with natural stone, bamboo accents, and spa-like atmosphere',
    likes: 178
  },
  {
    id: '6',
    title: 'Vintage Living Space',
    author: 'Anna Smith',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'A vintage living space with antique furniture, warm colors, and classic patterns',
    likes: 267
  },
  {
    id: '7',
    title: 'Scandinavian Bedroom',
    author: 'Lars Eriksson',
    category: 'Bedroom', 
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'A bright Scandinavian bedroom with white walls, natural wood, and cozy textiles',
    likes: 142
  },
  {
    id: '8',
    title: 'Luxury Kitchen Island',
    author: 'Sofia Martinez',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909920-4d8f949e32df?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1556909920-4d8f949e32df?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'A luxury kitchen with marble countertops, premium appliances, and elegant lighting',
    likes: 312
  },
  {
    id: '9',
    title: 'Creative Studio Space',
    author: 'Alex Thompson',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300',
    panorama360: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=600',
    prompt: 'A creative studio space with inspiring artwork, flexible workspace, and natural light',
    likes: 198
  }
];

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Bathroom'];

export const Explore = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  // Filter designs based on active tab
  const filteredDesigns = activeTab === 'All' 
    ? mockDesigns 
    : mockDesigns.filter(design => design.category === activeTab);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    // Could add a toast notification here
    console.log('Prompt copied to clipboard:', prompt);
  };

  const handleCloseModal = () => {
    setSelectedDesign(null);
  };

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen relative z-10" style={{ paddingTop: '140px' }}>
      {/* Spacer to avoid navbar overlap */}
      <div className="h-20"></div>
      {/* Fixed padding to avoid navbar overlap - using inline style for certainty */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Explore{' '}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              360° Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Discover stunning interior designs from our community of creators
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Design Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedDesign(design)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                  {/* Image Container with fixed aspect ratio */}
                  <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src={design.image} 
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Likes Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                      <div className="flex items-center gap-1.5">
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span className="text-sm font-bold text-gray-800">{design.likes}</span>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {design.category}
                      </span>
                    </div>
                    
                    {/* Hover overlay with 360° indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30">
                        <div className="flex items-center gap-2 text-white">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center">
                            <span className="text-xs font-black">360°</span>
                          </div>
                          <span className="font-bold text-sm">View Experience</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title and Author */}
                    <div className="mb-4">
                      <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-pink-600 transition-colors leading-tight">
                        {design.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-medium">
                          by <span className="text-gray-700 font-semibold">{design.author}</span>
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Premium</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {design.prompt}
                    </p>
                    
                    {/* Action bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1.5 text-gray-400 hover:text-pink-500 transition-colors group/btn">
                          <Heart className="w-4 h-4 group-hover/btn:fill-current" />
                          <span className="text-xs font-medium">{design.likes}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-gray-400 hover:text-orange-500 transition-colors">
                          <Copy className="w-4 h-4" />
                          <span className="text-xs font-medium">Copy</span>
                        </button>
                      </div>
                      <button className="text-xs font-bold text-gradient bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent hover:from-orange-600 hover:to-pink-600 transition-all">
                        View 360° →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 360° View Modal */}
        <AnimatePresence>
          {selectedDesign && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full h-full max-w-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 text-white hover:bg-white/20 transition-all"
                >
                  <X size={24} />
                </button>

                {/* 360° Panorama */}
                <div className="w-full h-full">
                  <Panorama360
                    src={selectedDesign.panorama360}
                    height="100vh"
                    hideNavbar={false}
                    mousewheel={true}
                    className="w-full h-full"
                  />
                </div>

                {/* Design Info - Bottom Left */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/20 rounded-3xl p-6 max-w-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse"></div>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
                      {selectedDesign.category}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-2xl mb-2 leading-tight">
                    {selectedDesign.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    by <span className="text-white font-semibold">{selectedDesign.author}</span>
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {selectedDesign.prompt}
                  </p>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400 fill-current" />
                      <span className="text-sm font-medium">{selectedDesign.likes} likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center">
                        <span className="text-[10px] font-black text-white">360°</span>
                      </div>
                      <span className="text-sm font-medium">Premium Experience</span>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons - Bottom Right */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 right-6 flex flex-col gap-3"
                >
                  <button
                    onClick={() => handleCopyPrompt(selectedDesign.prompt)}
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-3 hover:from-pink-600 hover:to-orange-600 transition-all shadow-2xl hover:shadow-pink-500/25 group"
                  >
                    <Copy size={18} className="group-hover:rotate-12 transition-transform" />
                    Use this Style
                  </button>
                  <div className="flex gap-3">
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-white/20 transition-all">
                      <Download size={16} />
                      Download
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-2xl hover:bg-white/20 transition-all">
                      <Heart size={16} className="text-red-400" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};