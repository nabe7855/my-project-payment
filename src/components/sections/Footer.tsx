
import React from 'react';

// Footer section: Logo, legal links, and copyright
const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-serif font-bold mb-4 md:mb-0">
            中央相続事務所
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-gold transition-colors">利用規約</a>
            <a href="#" className="hover:text-gold transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} 中央相続事務所. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
