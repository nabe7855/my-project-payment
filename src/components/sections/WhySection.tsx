// src/components/sections/WhySection.tsx

import React from 'react';

/**
 * 「なぜ辻・本郷が？」セクション
 * 
 * サービスの信頼性や実績をアピールするためのセクションです。
 * 
 * @returns {JSX.Element} 「なぜ辻・本郷が？」セクションのUI
 */
const WhySection: React.FC = () => (
    <section className="bg-[#fff8e8] pt-40 md:pt-60 pb-0 text-center font-bold relative">
        <div className="max-w-6xl mx-auto px-4">
             <div className="mb-16">
                <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/why-image-1.png" alt="Why us" />
                <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/why-image-1-sp.png" alt="Why us SP" />
             </div>
             <div>
                <img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/why-image-2.png" alt="Details" />
             </div>
        </div>
    </section>
);

export default WhySection;
