// src/components/sections/ReasonTitleSection.tsx

import React from 'react';

/**
 * 理由提示セクションのタイトル部分
 * 
 * 「なぜ66万円で実現できるのか？」というユーザーの疑問を喚起し、
 * 次のセクションへと繋げる役割を持ちます。
 * 
 * @returns {JSX.Element} 理由提示セクションタイトルのUI
 */
const ReasonTitleSection: React.FC = () => (
    <section id="why" className="bg-[#00693e] py-24 md:py-32 relative text-center">
        <div className="max-w-6xl mx-auto px-4">
             <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/reason-title.png" alt="Reason Title" />
             <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/reason-title-h2.png" alt="Reason Title SP" />
        </div>
        <div className="absolute left-1/2 md:left-[8%] bottom-0 -translate-x-1/2 md:translate-x-0 w-44 h-56 bg-contain bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/reason-title-img.png')]"></div>
    </section>
);

export default ReasonTitleSection;
