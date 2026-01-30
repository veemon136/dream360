import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Interior Designer",
    text: "I couldn't visualize how the new furniture would look. Dream360 made it crystal clear in seconds!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Marcus Chen",
    role: "Homeowner",
    text: "The quality of the renders is mind-blowing. It felt like I was actually standing in my future living room.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Elena Rodriguez",
    role: "Architect",
    text: "As an interior designer, this tool helps me communicate ideas to clients 10x faster. Absolute game changer.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "David Park",
    role: "Real Estate Agent",
    text: "I love how I can customize every detail and send it to my clients. They keep coming back for more!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black text-gray-900 mb-4">Community Love</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
