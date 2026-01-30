/**
 * AuthModal Standalone – dùng khi copy sang project khác
 *
 * Để form giống y file gốc:
 * 1. Copy 2 file: AuthModalStandalone.tsx + AuthModal.standalone.css
 * 2. Trong project đích, import CSS vào entry (main.tsx / App.tsx):
 *    import './components/AuthModal.standalone.css';
 * 3. Cài: npm i motion lucide-react
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Eye, EyeOff, ArrowLeft, Chrome, Facebook, Apple, Sparkles } from 'lucide-react';
import './AuthModal.css';

type AuthState = 'login' | 'register' | 'forgot-password';

interface AuthModalStandaloneProps {
  isOpen: boolean;
  onClose: () => void;
  initialState?: AuthState;
}

export const AuthModalStandalone: React.FC<AuthModalStandaloneProps> = ({
  isOpen,
  onClose,
  initialState = 'login',
}) => {
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
            className="auth-modal-content"
          >
            <div className="auth-modal-icon-box auth-modal-icon-box--login">
              <User />
            </div>
            <h2 className="auth-modal-title">Welcome Back, Creator!</h2>
            <p className="auth-modal-subtitle">Login to access your 360° studio</p>

            <div className="auth-modal-fields">
              <div className="auth-modal-field">
                <Mail className="auth-modal-icon-left" />
                <input
                  type="text"
                  placeholder="Enter Username or email"
                  className="auth-modal-input"
                />
              </div>
              <div className="auth-modal-field">
                <Lock className="auth-modal-icon-left" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="auth-modal-input auth-modal-input--with-toggle"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="auth-modal-toggle-password"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setAuthState('forgot-password')}
              className="auth-modal-link"
            >
              Forgot Password?
            </button>

            <button type="button" className="auth-modal-btn">
              Log In
            </button>

            <div className="auth-modal-divider">
              <span>Or Continue With</span>
            </div>

            <div className="auth-modal-socials">
              <button type="button" className="auth-modal-social-btn">
                <Chrome />
              </button>
              <button type="button" className="auth-modal-social-btn">
                <Facebook />
              </button>
              <button type="button" className="auth-modal-social-btn">
                <Apple />
              </button>
            </div>

            <p className="auth-modal-footer">
              How to Dream360?{' '}
              <button type="button" onClick={() => setAuthState('register')}>
                Create Account
              </button>
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
            className="auth-modal-content"
          >
            <div className="auth-modal-icon-box auth-modal-icon-box--register">
              <Sparkles />
            </div>
            <h2 className="auth-modal-title">Join the Revolution!</h2>
            <p className="auth-modal-subtitle">Create your free account to start designing</p>

            <div className="auth-modal-fields">
              <div className="auth-modal-field auth-modal-field--cyan">
                <User className="auth-modal-icon-left" />
                <input type="text" placeholder="Full Name" className="auth-modal-input" />
              </div>
              <div className="auth-modal-field auth-modal-field--cyan">
                <Mail className="auth-modal-icon-left" />
                <input type="email" placeholder="Email Address" className="auth-modal-input" />
              </div>
              <div className="auth-modal-field auth-modal-field--cyan">
                <Lock className="auth-modal-icon-left" />
                <input type="password" placeholder="Password" className="auth-modal-input" />
              </div>
              <div className="auth-modal-field auth-modal-field--cyan">
                <Lock className="auth-modal-icon-left" />
                <input type="password" placeholder="Confirm Password" className="auth-modal-input" />
              </div>
            </div>

            <button type="button" className="auth-modal-btn auth-modal-btn--cyan">
              Create Account
            </button>

            <div className="auth-modal-divider">
              <span>Or Sign Up With</span>
            </div>

            <div className="auth-modal-socials">
              <button type="button" className="auth-modal-social-btn">
                <Chrome />
              </button>
              <button type="button" className="auth-modal-social-btn">
                <Facebook />
              </button>
              <button type="button" className="auth-modal-social-btn">
                <Apple />
              </button>
            </div>

            <p className="auth-modal-footer">
              Already have an account?{' '}
              <button type="button" onClick={() => setAuthState('login')}>
                Log In
              </button>
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
            className="auth-modal-content"
          >
            <div className="auth-modal-icon-box auth-modal-icon-box--forgot">
              <Lock />
            </div>
            <h2 className="auth-modal-title">Forgot Password?</h2>
            <p className="auth-modal-subtitle auth-modal-subtitle--narrow">
              Don't worry! Enter your email and we'll send you a reset link.
            </p>

            <div className="auth-modal-fields">
              <div className="auth-modal-field">
                <Mail className="auth-modal-icon-left" />
                <input type="email" placeholder="name@example.com" className="auth-modal-input" />
              </div>
            </div>

            <button type="button" className="auth-modal-btn">
              Send Reset Link
            </button>

            <button
              type="button"
              onClick={() => setAuthState('login')}
              className="auth-modal-btn-back"
            >
              <ArrowLeft /> Back to Login
            </button>
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="auth-modal-root">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="auth-modal-backdrop"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="auth-modal-box"
          >
            <div className="auth-modal-glow" />
            <button
              type="button"
              onClick={onClose}
              className="auth-modal-close"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="auth-modal-body">
              <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
