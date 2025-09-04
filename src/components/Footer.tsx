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
        <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/logo-footer.png" alt="Footer Logo" className="hidden md:block mx-auto mb-10" />
        <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/logo-footer-sp.png" alt="Footer Logo SP" className="md:hidden mx-auto mb-10" />

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
          <p className="text-xs">Copyright © 辻・本郷 税理士法人｜[相続専門] 辻・本郷 相続センター</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
