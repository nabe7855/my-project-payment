// src/components/layout/MainNav.tsx

import React from 'react';

type NavLink = {
  href: string;
  text: string;
};

interface MainNavProps {
    navLinks: NavLink[];
}

/**
 * メインナビゲーションコンポーネント（デスクトップ用）
 * 
 * ページ内の主要セクションへのアンカーリンクを提供します。
 * 
 * @param {object} props - navLinks
 * @returns {JSX.Element} メインナビゲーションのUI
 */
const MainNav: React.FC<MainNavProps> = ({ navLinks }) => (
  <section className="hidden lg:block border-b border-[#00693e] py-4">
    <div className="max-w-6xl mx-auto px-4">
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-[#333] text-[15px] font-bold hover:text-[#80b963] transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MainNav;
