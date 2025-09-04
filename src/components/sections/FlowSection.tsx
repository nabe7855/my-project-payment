// src/components/sections/FlowSection.tsx

import React from 'react';

/**
 * サービスの流れセクション
 * 
 * 依頼から完了までのステップをイラストで分かりやすく示します。
 * 
 * @returns {JSX.Element} サービスの流れセクションのUI
 */
const FlowSection: React.FC = () => (
    <section id="flow" className="bg-[#edf4f2] pt-24 pb-28 lg:pt-28 lg:pb-56 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/flow-img-1.png" alt="Flow 1" className="hidden md:block mx-auto mb-16" />
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/flow-img-1-sp.png" alt="Flow 1 SP" className="md:hidden mx-auto mb-10" />
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/flow-img-2.png" alt="Flow 2" className="hidden md:block mx-auto" />
            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/flow-img-2-sp.png" alt="Flow 2 SP" className="md:hidden mx-auto" />
        </div>
    </section>
);

export default FlowSection;
