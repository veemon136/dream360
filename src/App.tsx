import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { StyleShowcase } from './components/StyleShowcase';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AuthModalStandalone } from './components/AuthModalStandalone';
import { Explore } from './components/Explore';
import { UploadPage } from './components/upload-page';
import { ViewerPage } from './components/viewer-page';

export default function App() {
  // 1. State quản lý Modal Đăng nhập/Đăng ký
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<'login' | 'register'>('login');

  // 2. State quản lý chuyển trang (Home / Explore / Upload)
  const [currentPage, setCurrentPage] = useState<'home' | 'explore' | 'upload'>('home');
  // 3. Ảnh đã upload → hiển thị Viewer (từ trang Upload)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Hàm xử lý chuyển trang và cuộn lên đầu
  const handleNavigate = (page: 'home' | 'explore' | 'upload') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-violet-100 selection:text-violet-900 overflow-x-hidden">
      
      {/* Navbar: ẩn trên trang Upload và Viewer */}
      {!uploadedImage && currentPage !== 'upload' && (
        <Navbar 
          onOpenAuth={(state) => { setAuthModalState(state); setAuthModalOpen(true); }} 
          onNavigate={handleNavigate}
          currentPage={currentPage}
        />
      )}

      {/* Modal Đăng nhập (Luôn hiển thị nếu isOpen=true) */}
      <AuthModalStandalone
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialState={authModalState}
      />

      <main className="relative">
        {uploadedImage ? (
          /* === VIEWER (sau khi upload xong) === */
          <ViewerPage
            uploadedImage={uploadedImage}
            onBack={() => setUploadedImage(null)}
          />
        ) : currentPage === 'upload' ? (
          /* === TRANG UPLOAD (Create) === */
          <UploadPage
            onUploadComplete={(imageUrl) => setUploadedImage(imageUrl)}
            onBack={() => handleNavigate('home')}
          />
        ) : currentPage === 'home' ? (
          /* === GIAO DIỆN TRANG CHỦ === */
          <>
            <Hero /> 
            <StatsBanner />
            <HowItWorks />
            <Features />
            <StyleShowcase />
            <Testimonials />
            <CTA />
          </>
        ) : (
          /* === GIAO DIỆN TRANG EXPLORE === */
          <div className="animate-fade-in">
             <Explore />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}