import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img src="/LogoDream360.png" alt="Dream360" className="h-12 w-auto object-contain" />
        </div>

        <div className="flex gap-12 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="hover:text-black">Contact</a>
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms</a>
        </div>

        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Twitter className="w-5 h-5 text-gray-400" /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Mail className="w-5 h-5 text-gray-400" /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Github className="w-5 h-5 text-gray-400" /></button>
        </div>
      </div>
      <div className="text-center mt-12 text-xs text-gray-400">
        © 2026 Dream360. All rights reserved.
      </div>
    </footer>
  );
};
