import React from 'react';
import { motion } from 'motion/react';
import { UploadCloud, Sliders, ScanEye } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Upload",
    desc: "Upload your room photo or start with a blank canvas.",
    icon: UploadCloud,
    // FIX: Dùng mã màu Hex trực tiếp để đảm bảo hiển thị 100%
    gradientStyle: { background: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)' } // Pink -> Orange
  },
  {
    id: "02",
    title: "Customize",
    desc: "Describe your dream style. AI generates it instantly.",
    icon: Sliders,
    gradientStyle: { background: 'linear-gradient(135deg, #f97316 0%, #06b6d4 100%)' } // Orange -> Cyan
  },
  {
    id: "03",
    title: "Experience",
    desc: "Step inside your design in 360° VR mode.",
    icon: ScanEye,
    // FIX: Đổi sang màu Tím (Violet) để đúng chất Cosmic và chắc chắn hiện màu
    gradientStyle: { background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)' } // Cyan -> Violet
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
          How It{' '}
          {/* FIX: Dùng inline-block và style trực tiếp để chữ Gradient không bị mờ */}
          <span 
            className="inline-block"
            style={{ 
              background: 'linear-gradient(to right, #ec4899, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Works
          </span>
        </h2>
        <p className="text-gray-500 text-lg">Transform your space in just three simple steps</p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {/* Đường nối nét đứt */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-10 -translate-y-1/2" />

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Số thứ tự chìm */}
            <span className="absolute -right-4 -top-4 text-9xl font-black text-gray-50 opacity-50 group-hover:text-gray-100 transition-colors select-none z-0">
              {step.id}
            </span>

            {/* Icon Box - Áp dụng style trực tiếp */}
            <div 
              className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white"
              style={step.gradientStyle}
            >
              <step.icon className="w-8 h-8" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};