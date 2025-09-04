// src/components/sections/AssuranceSection.tsx

import React from 'react';

/**
 * 安心訴求セクション
 * 
 * 「ご安心ください」というメッセージと共に、サービスの信頼性を伝えるための
 * ビジュアル中心のセクションです。
 * 
 * @returns {JSX.Element} 安心訴求セクションのUI
 */
const AssuranceSection: React.FC = () => (
    <section className="pt-40 pb-60 relative bg-cover bg-bottom bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-peace.png')]">
        <div className="max-w-6xl mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
                <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/ressurance-img-1.png" alt="Assurance" />
                <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/ressurance-img-1-sp.png" alt="Assurance SP" />
            </div>
            <div className="absolute left-0 bottom-[-249px] max-w-[177px]">
                <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/ressurance-img-left.png" alt="Illustration" />
            </div>
            <div className="absolute right-0 bottom-[-249px] max-w-[194px]">
                <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/ressurance-img-right.png" alt="Illustration" />
            </div>
        </div>
    </section>
);

export default AssuranceSection;
