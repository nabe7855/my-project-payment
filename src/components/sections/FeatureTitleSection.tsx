// src/components/sections/FeatureTitleSection.tsx

import React from 'react';

/**
 * 「選ばれる理由」セクションのタイトル部分
 * 
 * 次に来る「選ばれる理由」の詳細説明への期待感を高めるためのタイトルセクションです。
 * 
 * @returns {JSX.Element} 「選ばれる理由」タイトルセクションのUI
 */
const FeatureTitleSection: React.FC = () => (
    <section id="reason" className="bg-[#d3e7ff] bg-cover bg-center bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-texture.png')] text-center -mt-24 pt-40 relative">
        <div className="max-w-6xl mx-auto px-4">
             <div className="inline-block bg-[#00693e] text-white font-bold rounded-full px-6 py-3 text-xl md:text-3xl mb-8">私たちに<b className="text-[#fff733] text-2xl md:text-4xl">お任せ</b>ください！</div>
             <h2 className="text-4xl md:text-6xl font-bold mb-3" style={{ textShadow: '4px 4px 0 #fff, -4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff' }}>
                 <span className="text-[#00693e] text-5xl md:text-8xl underline decoration-[#fff733] decoration-[24px] underline-offset-[-5px]">にこにこ相続センター 税理士法人</span>が
             </h2>
             <p className="text-4xl md:text-6xl font-bold text-[#383838]" style={{ textShadow: '4px 4px 0 #fff, -4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff' }}>選ばれる理由</p>
             <div className="-mt-16">
                 <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/section-feature-tittle.png" alt="Feature title" />
                 <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/section-feature-tittle-sp.png" alt="Feature title SP" />
             </div>
        </div>
    </section>
);

export default FeatureTitleSection;
