// src/components/sections/ScrollingBanner.tsx

import React from 'react';

/**
 * 無限スクロールバナーセクション
 * 
 * 複数の画像を連結して、横に無限にスクロールするアニメーションを表示します。
 * 
 * @returns {JSX.Element} スクロールバナーのUI
 */
const ScrollingBanner: React.FC = () => (
    <section className="bg-white py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-loop-slide w-[200%]">
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cta-slide.png" alt="Banner part 1" className="h-24 md:h-48" />
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cta-slide.png" alt="Banner part 2" className="h-24 md:h-48" />
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cta-slide.png" alt="Banner part 3" className="h-24 md:h-48" />
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cta-slide.png" alt="Banner part 4" className="h-24 md:h-48" />
        </div>
    </section>
);

export default ScrollingBanner;
