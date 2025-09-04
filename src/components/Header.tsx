// src/components/layout/Header.tsx

import React from 'react';

type NavLink = {
  href: string;
  text: string;
};

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
}

/**
 * モバイル用ナビゲーションメニュー
 * 
 * @param {object} props - isMenuOpen, onClose, navLinks
 * @returns {JSX.Element | null} モバイルメニューのUI
 */
const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void; navLinks: NavLink[] }> = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-40 lg:hidden" onClick={onClose}>
      <div className="bg-white w-full h-full p-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8">
            <a href="https://www.ht-tax.or.jp/sozoku">
                <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/logo-nav.png" alt="Logo" className="h-10" />
            </a>
            <button onClick={onClose} className="text-3xl">&times;</button>
        </div>
        <nav>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.href} className="border-b border-gray-200">
                        <a href={link.href} onClick={onClose} className="block py-4 text-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors">
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
      </div>
    </div>
  );
};

/**
 * サイトヘッダーコンポーネント
 * 
 * ロゴ、連絡先情報、ナビゲーションのトグル機能を提供します。
 * 
 * @param {object} props - isMenuOpen, setIsMenuOpen, navLinks
 * @returns {JSX.Element} ヘッダーのUI
 */
const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, navLinks }) => {
  return (
    <>
      <header className="border-b border-[#00693e] bg-white">
        <div className="max-w-full mx-auto flex justify-between items-center h-16 md:h-[90px]">
          <div className="pl-2 md:pl-6">
            <a href="">
                <span className="text-2xl md:text-3xl font-bold text-[#00693e]">
    にこにこ相続センター
  </span>
            </a>
          </div>
          <div className="flex items-center h-full">
            <div className="hidden md:flex items-center mr-8">
                <div className="font-['Roboto'] font-bold text-[#00693e] text-4xl">
                    <a href="tel:0120999999">0120-999-999</a>
                </div>
                 <div className="ml-4 text-xs text-gray-600">
                    <p>年中無休</p>
                    <p>受付24時間対応</p>
                </div>
            </div>
            <a href="tel:0120999999" className="md:hidden flex flex-col items-center justify-center h-full w-16 bg-[#ed8634] text-white border-r border-white">
                 <i className="fas fa-phone-alt mb-1 text-lg"></i>
                 <span className="text-[10px]">TEL</span>
            </a>
            <a href="#payment" className="hidden md:flex flex-col items-center justify-center h-full w-40 bg-[#ed8634] text-white" aria-label="プランを購入する">
                <i className="fas fa-credit-card mb-1 text-lg"></i>
                <span className="text-xs">プランのご購入</span>
            </a>
            <a href="#contact" className="flex flex-col items-center justify-center h-full w-16 md:w-40 bg-[#00693e] text-white">
                <i className="fas fa-envelope mb-1 text-lg"></i>
                <span className="text-[10px] md:text-xs">WEB</span>
                <span className="hidden md:inline-block text-[10px]">24時間受付中</span>
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden absolute top-4 right-20 text-3xl z-30">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navLinks={navLinks} />
    </>
  );
};

export default Header;