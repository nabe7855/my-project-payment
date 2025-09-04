// src/components/sections/YoutubeSection.tsx

import React from 'react';

interface YoutubeSectionProps {
    siteData: {
        souzokusoudanCountYm: string;
        souzokusoudanCount: string;
        cSouzokusoudanCountY: string;
        cSouzokusoudanCount: string;
    }
}

/**
 * YouTube動画埋め込みと実績紹介セクション
 * 
 * 動画コンテンツによる情報提供と、具体的な相談件数を提示することで
 * ユーザーの信頼を獲得します。
 * 
 * @param {object} props - siteData
 * @returns {JSX.Element} YouTubeセクションのUI
 */
const YoutubeSection: React.FC<YoutubeSectionProps> = ({ siteData }) => (
    <section className="bg-cover bg-bottom bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-youtube.png')] text-center font-bold pt-36 pb-36 relative">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[260px] bg-contain bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/youtube-bottom.png')]"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
             <div className="relative max-w-5xl mx-auto">
                 <img className="w-full" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/youtube-circle.png" alt="Youtube background" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <img className="w-32 md:w-56" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/section-youtube.png" alt="Youtube icon" />
                     <p className="text-xl md:text-4xl text-[#383838] mt-4 mb-2 md:mb-4">にこにこ 相続センター</p>
                     <img className="w-4/5 max-w-lg md:max-w-2xl" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/title-youtube.png" alt="Youtube title" />
                </div>
            </div>

            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto my-12">
                <iframe src="https://www.youtube.com/embed/1z8IqH0cMak?si=EPVjtY8h83sEyXNu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full"></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 max-w-5xl mx-auto mt-48">
                <div className="bg-white border-4 border-[#80b963] rounded-2xl p-8">
                    <p className="text-2xl md:text-3xl mb-3">{siteData.souzokusoudanCountYm}の相談件数</p>
                    <p className="text-7xl md:text-8xl font-['Roboto'] text-[#ff6101]"><span className="tracking-tighter">{siteData.souzokusoudanCount}</span><span className="text-5xl md:text-6xl text-black ml-2">件</span></p>
                </div>
                <div className="bg-white border-4 border-[#80b963] rounded-2xl p-8">
                     <p className="text-2xl md:text-3xl mb-3">{siteData.cSouzokusoudanCountY}度累積の相談件数</p>
                    <p className="text-7xl md:text-8xl font-['Roboto'] text-[#ff6101]"><span className="tracking-tighter">{siteData.cSouzokusoudanCount}</span><span className="text-5xl md:text-6xl text-black ml-2">件</span></p>
                </div>
            </div>
        </div>
    </section>
);

export default YoutubeSection;
