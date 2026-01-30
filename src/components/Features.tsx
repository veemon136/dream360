import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Box, Edit3 } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: "AI Speed",
    description: "Generate complex environments in seconds, not hours. Our cosmic engine renders at lightspeed.",
    color: "from-cyan-50/50 to-white",
    iconBg: "bg-cyan-100/50",
    iconColor: "text-cyan-600"
  },
  {
    icon: Box,
    title: "VR Ready",
    description: "Export directly to any headset. Immerse yourself completely with 8K stereoscopic output.",
    color: "from-pink-50/50 to-white",
    iconBg: "bg-pink-100/50",
    iconColor: "text-pink-600"
  },
  {
    icon: Edit3,
    title: "Real-time Edit",
    description: "Swap textures, move furniture, and adjust lighting instantly with natural language commands.",
    color: "from-orange-50/50 to-white",
    iconBg: "bg-orange-100/50",
    iconColor: "text-orange-600"
  }
];

export const Features = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 flex items-center justify-center gap-4">
          Why <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-500 bg-clip-text text-transparent">Dream360?</span>
        </h2>
        <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          Next-generation features designed for the modern creator. Simple, fast, and remarkably immersive.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className={`p-12 rounded-[50px] bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all relative overflow-hidden group`}
          >
            {/* Soft gradient glow inside card */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700`} />
            
            <div className={`w-16 h-16 ${feature.iconBg} rounded-[24px] flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform`}>
              <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
            </div>
            
            <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
