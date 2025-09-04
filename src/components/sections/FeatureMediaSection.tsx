// src/components/sections/FeatureMediaSection.tsx

import React from 'react';

interface FeatureMediaSectionProps {
    siteData: {
        inheritanceCount: string;
        inheritanceCountTerm: string;
        souzokStaffCount: string;
        officeCount: string;
    }
}

/**
 * 実績・メディア掲載セクション
 * 
 * 具体的な数値やメディア掲載実績を提示し、権威性を示します。
 * 
 * @param {object} props - siteData
 * @returns {JSX.Element} 実績・メディア掲載セクションのUI
 */
const FeatureMediaSection: React.FC<FeatureMediaSectionProps> = ({ siteData }) => (
    <section className="bg-[#95d3f1] pt-20 pb-16 font-bold">
        <div className="max-w-6xl mx-auto px-4 relative">
             <div className="absolute left-2 md:left-12 -top-60 w-44">
                <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/img-left-media.png" alt=""/>
            </div>
             <div className="absolute right-0 md:right-2 -top-60 w-44">
                <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/img-right-media.png" alt=""/>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mb-20">
                <li className="bg-white rounded-2xl text-center text-2xl text-[#383838] p-10 leading-relaxed">国内トップの<br/><b>年間<span className="text-3xl text-[#ff6101]">{siteData.inheritanceCount}</span>件</b>の<br/>相続税の申告実績<span className="block text-sm font-normal mt-1">{siteData.inheritanceCountTerm}</span></li>
                <li className="bg-white rounded-2xl text-center text-2xl text-[#383838] p-10 leading-relaxed">国内最大、<b>約<span className="text-3xl text-[#ff6101]">{siteData.souzokStaffCount}</span>名</b>の<br/>相続専門スタッフが在籍</li>
                <li className="bg-white rounded-2xl text-center text-2xl text-[#383838] p-10 leading-relaxed">北海道から沖縄まで、<br/><b>全国<span className="text-3xl text-[#ff6101]">{siteData.officeCount}</span>事務所</b>を展開</li>
                <li className="bg-white rounded-2xl text-center text-2xl text-[#383838] p-10 leading-relaxed">他分野の専門家との連携で<br/><b>ワンストップ手続き対応</b></li>
            </ul>

            <div className="text-center">
                <img className="mx-auto mb-16" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/media-img.png" alt="Media appearances" />
                <div className="space-y-12">
                    <div>
                         <div className="bg-[#80b963] text-white text-2xl md:text-3xl rounded-t-3xl md:rounded-t-[40px] py-6">ニコニコ 税理士法人 会報誌「SCOPE（スコープ）」</div>
                         <div className="bg-white rounded-b-3xl md:rounded-b-[40px] p-8">
                             <img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/media-book-1.png" alt="SCOPE Magazine"/>
                         </div>
                    </div>
                     <div>
                         <div className="bg-[#80b963] text-white text-2xl md:text-3xl rounded-t-3xl md:rounded-t-[40px] py-6">相続税関連書籍・雑誌掲載のご紹介</div>
                         <div className="bg-white rounded-b-3xl md:rounded-b-[40px] p-8">
                            <img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/media-book-2.png" alt="Books and Magazines"/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FeatureMediaSection;
