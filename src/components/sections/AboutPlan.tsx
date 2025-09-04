// src/components/sections/AboutPlan.tsx

import React from 'react';

/**
 * 「相続コミコミプランとは？」セクション
 * 
 * このコンポーネントは、サービスの核となるプランの概要、特徴、
 * 料金体系の透明性をアピールするセクションです。
 * 
 * @returns {JSX.Element} AboutPlanセクションのUI
 */
const AboutPlan: React.FC = () => (
    <section id="about-plan" className="bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-about.png')] bg-cover bg-center bg-no-repeat text-center pt-48 pb-28 lg:pt-52 lg:pb-28">
        <div className="max-w-6xl mx-auto px-4">
            <div className="inline-block bg-[#00693e] text-white font-bold rounded-full px-8 py-3 text-lg md:text-3xl mb-10">
                相続資産が<b className="text-[#fff733] text-2xl md:text-4xl">1億円未満</b>の<span className="md:hidden"><br/></span><b>お客様限定！</b>
            </div>
            <p className="mb-10">
                <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/h2-about.png" alt="一律66万円 相続コミコミプランとは？" />
                <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/h2-about-sp.png" alt="一律66万円 相続コミコミプランとは？" />
            </p>
            <p className="mb-12"><img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/about-image-2.png" alt="Plan details" /></p>
            <p className="text-lg md:text-2xl text-[#383838] font-bold leading-relaxed mb-3">一律66万円相続コミコミプランは条件を満たしている方（※）には、</p>
            <p className="text-4xl md:text-7xl font-bold text-[#00693e] underline decoration-[#fff733] decoration-8 md:decoration-[24px] underline-offset-[-6px] md:underline-offset-[-12px] mb-6">追加料金が<span className="md:hidden"><br/></span>一切かからない</p>
            <p className="text-lg md:text-2xl text-[#383838] font-bold leading-relaxed mb-12">明瞭会計と透明な費用体系なプランとなっております。</p>
            <p>
                <img className="hidden md:block mx-auto max-w-2xl" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/caution-about.png" alt="Caution" />
                <img className="md:hidden mx-auto max-w-sm" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/caution-about-sp.png" alt="Caution" />
            </p>
        </div>
    </section>
);

export default AboutPlan;
