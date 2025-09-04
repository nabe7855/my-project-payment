// src/components/sections/FeatureBanner.tsx

import React from 'react';

/**
 * 特徴を伝えるバナーセクション
 * 
 * 「ご面倒な相続手続きは、全て私たちにお任せください！」というメッセージを
 * 強く打ち出すためのセクションです。
 * 
 * @returns {JSX.Element} 特徴バナーセクションのUI
 */
const FeatureBanner: React.FC = () => (
    <section className="bg-[#00693e] py-14 lg:py-20 text-white relative">
        <div className="max-w-5xl mx-auto px-4 relative">
            <p className="text-2xl md:text-5xl font-bold">ご面倒な相続手続きは、</p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#fff733] leading-snug">全て私たち<span className="text-4xl text-white">に</span><span className="md:hidden"><br /></span>お任せください！</h2>
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/section-feature-img.png" alt="Staff" className="hidden lg:block absolute w-64 right-2 -bottom-20" />
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/section-feature-img-sp.png" alt="Staff" className="lg:hidden absolute w-32 -right-4 -bottom-16" />
        </div>
        <div className="absolute bottom-[-29px] md:bottom-[-48px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] md:border-l-[60px] border-l-transparent border-r-[32px] md:border-r-[60px] border-r-transparent border-t-[29px] md:border-t-[50px] border-t-[#00693e]"></div>
    </section>
);

export default FeatureBanner;
