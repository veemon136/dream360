import React, { useState } from 'react';
import './AuthModal.css';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Eye, EyeOff, ArrowLeft, Github, Chrome, Facebook, Apple, Sparkles } from 'lucide-react';

type AuthState = 'login' | 'register' | 'forgot-password';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialState?: AuthState;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialState = 'login' }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const renderContent = () => {
    switch (authState) {
      case 'login':
        return (
          <motion.div 
            key="login"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20">
               <User className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Welcome Back, Creator!</h2>
            <p className="text-gray-400 text-sm mb-8 font-medium">Login to access your 360° studio</p>

            <div className="w-full space-y-4">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-pink-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Enter Username or email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-pink-500/50 transition-all font-medium"
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-pink-500 transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-pink-500/50 transition-all font-medium"
                />
                <button 
                  onClick={togglePassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              onClick={() => setAuthState('forgot-password')}
              className="text-pink-500 text-xs font-bold self-end mt-3 hover:underline tracking-wide uppercase"
            >
              Forgot Password?
            </button>

            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(255, 93, 177, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#ff5db1] to-[#ff9bd2] text-white py-4 rounded-full font-black text-lg mt-8 shadow-xl shadow-pink-500/20 transition-all relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              <span className="relative z-10">Log In</span>
            </motion.button>

            <div className="relative w-full flex items-center justify-center my-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
              <span className="relative px-4 bg-[#121212] text-[10px] text-gray-500 font-black tracking-widest uppercase">Or Continue With</span>
            </div>

            <div className="flex gap-4">
               <SocialBtn icon={<Chrome className="w-5 h-5" />} />
               <SocialBtn icon={<Facebook className="w-5 h-5" />} />
               <SocialBtn icon={<Apple className="w-5 h-5" />} />
            </div>

            <p className="mt-8 text-sm text-gray-500 font-bold">
              How to Dream360? <button onClick={() => setAuthState('register')} className="text-pink-500 hover:underline">Create Account</button>
            </p>
          </motion.div>
        );

      case 'register':
        return (
          <motion.div 
            key="register"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
               <Sparkles className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Join the Revolution!</h2>
            <p className="text-gray-400 text-sm mb-8 font-medium">Create your free account to start designing</p>

            <div className="w-full space-y-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-500 transition-colors" />
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-medium" />
              </div>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-500 transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-medium" />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-500 transition-colors" />
                <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-medium" />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-500 transition-colors" />
                <input type="password" placeholder="Confirm Password" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-medium" />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-full font-black text-lg mt-8 shadow-xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all">
              Create Account
            </button>

            <div className="relative w-full flex items-center justify-center my-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
              <span className="relative px-4 bg-[#121212] text-[10px] text-gray-500 font-black tracking-widest uppercase">Or Sign Up With</span>
            </div>

            <div className="flex gap-4">
               <SocialBtn icon={<Chrome className="w-5 h-5" />} />
               <SocialBtn icon={<Facebook className="w-5 h-5" />} />
               <SocialBtn icon={<Apple className="w-5 h-5" />} />
            </div>

            <p className="mt-8 text-sm text-gray-500 font-bold">
              Already have an account? <button onClick={() => setAuthState('login')} className="text-pink-500 hover:underline">Log In</button>
            </p>
          </motion.div>
        );

      case 'forgot-password':
        return (
          <motion.div 
            key="forgot"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10 shadow-2xl relative">
               <div className="absolute inset-0 bg-pink-500/10 blur-xl rounded-full" />
               <div className="relative bg-gradient-to-tr from-pink-500 to-orange-400 p-3 rounded-2xl">
                 <Lock className="text-white w-8 h-8" />
               </div>
            </div>
            <h2 className="text-3xl font-black text-white mb-3 tracking-tight">Forgot Password?</h2>
            <p className="text-gray-400 text-sm mb-10 max-w-[280px] leading-relaxed font-medium">Don't worry! Enter your email and we'll send you a reset link.</p>

            <div className="w-full relative group mb-6">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-pink-500 transition-colors" />
              <input type="email" placeholder="name@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-pink-500/50 transition-all font-medium" />
            </div>

            <button className="w-full bg-gradient-to-r from-[#ff5db1] to-[#ff9bd2] text-white py-4 rounded-full font-black text-lg shadow-xl shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all">
              Send Reset Link
            </button>

            <button 
              onClick={() => setAuthState('login')}
              className="mt-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Login
            </button>
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[440px] bg-[#121212] border border-white/10 rounded-[40px] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-pink-500/10 to-transparent pointer-events-none" />
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SocialBtn = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
    {icon}
  </button>
);
