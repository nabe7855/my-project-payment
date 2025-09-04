// src/components/sections/WorriesSection.tsx

import React from 'react';

/**
 * 「手続きでお困りの方へ」セクション
 * 
 * ターゲット顧客が抱えるであろう悩みをリストアップし、共感を呼ぶセクションです。
 * 
 * @returns {JSX.Element} 「お困りの方へ」セクションのUI
 */
const WorriesSection: React.FC = () => (
    <section id="procedure" className="bg-[#626875] bg-cover bg-center bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-worries.png')] text-center pt-48 pb-0 -mt-4 relative">
        <div className="max-w-6xl mx-auto px-4 relative">
            <div className="inline-block bg-[#00693e] text-white font-bold rounded-full px-8 py-3 text-xl md:text-3xl mb-12">相続申告手続きで<b className="text-[#fff733] text-2xl md:text-4xl">お困りの方</b>へ</div>
            <div className="mb-16">
                <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/worries-img-h2.png" alt="Worries title" />
                <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/worries-img-h2-sp.png" alt="Worries title SP" />
            </div>

            <div>
                <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/worries-list.png" alt="Worries list" />
                <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/worries-list-sp.png" alt="Worries list SP" />
            </div>
        </div>
    </section>
);

export default WorriesSection;
