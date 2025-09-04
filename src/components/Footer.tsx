// src/components/layout/Footer.tsx

import React from 'react';

type NavLink = {
  href: string;
  text: string;
};

interface FooterProps {
  navLinks: NavLink[];
}

/**
 * サイトフッターコンポーネント
 * 
 * ロゴ、ナビゲーションリンク、著作権情報を表示します。
 * 
 * @param {object} props - navLinks
 * @returns {JSX.Element} フッターのUI
 */
const Footer: React.FC<FooterProps> = ({ navLinks }) => {
  return (
    <footer className="bg-white border-t-4 border-[#00693e] pt-9">
      <div className="max-w-6xl mx-auto px-4 text-center">
       {/* PC/スマホ共通で「にこにこ」テキスト表示 */}
    <h2 className="text-2xl md:text-3xl font-bold text-[#00693e] mb-10">
      にこにこ相続センター
    </h2>

        <nav className="max-w-3xl mx-auto py-10">
          <ul className="flex flex-wrap justify-center text-center">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full md:w-auto md:px-3 mb-4">
                <a href={link.href} className="font-bold text-[#333] hover:text-[#80b963] transition-colors">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-[#80b963] text-white text-center py-4">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs">Copyright © にこにこ相続センター</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
