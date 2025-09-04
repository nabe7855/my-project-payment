// src/components/sections/SolutionSection.tsx

import React from 'react';

/**
 * 解決策提示セクション
 * 
 * ユーザーの悩みに対して、具体的な解決策を2つのポイントで提示します。
 * 
 * @returns {JSX.Element} 解決策提示セクションのUI
 */
const SolutionSection: React.FC = () => (
    <section>
        <div className="hidden md:block">
            <div className="flex border-b-4 border-white">
                <div className="w-[300px] bg-[#1baa79] p-20 flex">
                    <img className="m-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/solution-number-1.png" alt="Solution 1" />
                </div>
                <div className="flex-1 bg-[#edf4f2] bg-cover bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-dot.png')] p-20">
                    <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/solution-img-1.png" alt="Solution detail 1" />
                </div>
            </div>
            <div className="flex">
                <div className="w-[300px] bg-[#1baa79] p-20 flex">
                     <img className="m-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/solution-number-2.png" alt="Solution 2" />
                </div>
                <div className="flex-1 bg-[#edf4f2] bg-cover bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-dot.png')] p-20">
                    <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/solution-img-2.png" alt="Solution detail 2" />
                </div>
            </div>
        </div>
        <div className="md:hidden">
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/solution-img-1-sp.png" alt="Solution 1 SP" className="w-full" />
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/solution-img-2-sp.png" alt="Solution 2 SP" className="w-full" />
        </div>
    </section>
);

export default SolutionSection;
