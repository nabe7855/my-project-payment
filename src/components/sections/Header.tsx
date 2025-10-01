
import React from 'react';

// Header section: Site logo and navigation
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-navy">
          中央相続事務所
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#contact" className="bg-gold text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
            無料相談を申し込む
          </a>
          <a href="#contact" className="border border-navy text-navy font-bold py-2 px-6 rounded-lg hover:bg-navy hover:text-white transition-colors">
            資料をダウンロード
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
