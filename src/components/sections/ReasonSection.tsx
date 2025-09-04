// src/components/sections/ReasonSection.tsx

import React from 'react';

/**
 * 料金の理由説明セクション
 * 
 * 「なぜ66万円か」という問いに対し、オンラインでのコミュニケーションによる
 * コストカットが理由であることを説明します。
 * 
 * @returns {JSX.Element} 理由説明セクションのUI
 */
const ReasonSection: React.FC = () => (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-reason.png')] md:bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-reason2.png')] pt-20 md:pt-36 pb-24 md:pb-48 font-bold relative">
        <div className="max-w-6xl mx-auto px-4 relative">
             <h2 className="text-center md:text-left md:pl-24 mb-24">
                <img className="hidden md:block" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/h2-reason.png" alt="Reason h2" />
                <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/h2-reason-sp.png" alt="Reason h2 SP" />
             </h2>

            <div className="max-w-4xl mx-auto mb-40 relative">
                 <div className="bg-[#80b963] text-white text-center text-2xl md:text-3xl rounded-t-2xl py-6 px-4 leading-snug">オンラインならではの<span className="md:hidden"><br /></span>スムーズなコミュニケーション</div>
                 <div className="bg-white rounded-b-2xl p-8 md:p-12 relative">
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-7 mb-20 relative">
                        {['お電話', 'Google Meet', 'LINE', 'メール'].map((item, index) => (
                            <li key={item} className="w-full md:w-auto flex-1 md:flex-initial bg-white border border-[#383838] rounded-lg flex flex-col items-center justify-center py-6 px-4 text-center text-xl md:text-2xl min-w-[150px] md:min-w-[200px] min-h-[150px] md:min-h-[220px]">
                                <img src={`https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/${['icon-phone-reason.png', 'reason-gm.png', 'reason-line.png', 'icon-mail-reason.png'][index]}`} alt={item} className="h-10 mb-4" />
                                {item}
                            </li>
                        ))}
                         <div className="absolute bottom-[-53px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[27px] border-l-transparent border-r-[27px] border-r-transparent border-t-[28px] border-t-[#00693e]"></div>
                    </ul>
                    <p className="text-[#ff6101] text-center text-3xl md:text-5xl">訪問時に発生するコストをカット！</p>
                 </div>
            </div>
             <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/reason-img-3.png" alt="Reason detail" />
             <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/reason-img-3-sp.png" alt="Reason detail SP" />
        </div>
    </section>
);

export default ReasonSection;
