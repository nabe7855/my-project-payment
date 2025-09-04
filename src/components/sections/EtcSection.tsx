// src/components/sections/EtcSection.tsx

import React from 'react';

/**
 * 他社比較・注意喚起セクション
 * 
 * 低価格を謳う他社サービスの「落とし穴」を指摘し、
 * 自社プランの透明性と安心感をアピールします。
 * 
 * @returns {JSX.Element} 他社比較セクションのUI
 */
const EtcSection: React.FC = () => (
    <section className="bg-[#edf4f2] pt-36 md:pt-40 pb-36 md:pb-56 text-center font-bold">
        <div className="max-w-6xl mx-auto px-4">
             <h2 className="text-4xl md:text-6xl text-[#383838] leading-tight mb-8" style={{ textShadow: '4px 4px 0 #fff, -4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff' }}>
                <span className="text-5xl md:text-8xl">「安さ」</span>がウリの料金設定で<br />
                <b className="text-5xl md:text-8xl text-[#00693e] bg-[#fff733]">よくある落とし穴</b>
            </h2>
             <p className="text-base md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                多くのケースで「料金20万円から」といった低価格を売りにした記載がされております。<br />
                しかし、それはあくまで最低限の「基本料金」であり、<br />
                土地評価その他条件によっては料金が加算されることがあります。 <br />
                <b className="bg-[#fff733] p-1">一般的な税理士報酬の相場は「財産総額の1%前後」</b>と言われます。
            </p>

            <div className="space-y-12">
                {/* 他社の場合 */}
                <div className="relative">
                    <div className="absolute -top-40 left-0"><img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/etc-img-left.png" alt="" className="w-24 md:w-36"/></div>
                    <div className="absolute -top-32 right-0"><img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/etc-img-right.png" alt="" className="w-32 md:w-44"/></div>
                    <div className="bg-[#80b963] text-white text-2xl md:text-4xl rounded-t-2xl py-6 md:py-8">他社の場合</div>
                    <div className="bg-white rounded-b-2xl p-8 md:p-0 md:flex items-center">
                        <div className="md:w-1/2 p-4">
                            <img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/etc-content-left-1.png" alt="Other company case" />
                        </div>
                        <div className="md:w-1/2 p-4 relative">
                            <p className="text-xl md:text-2xl mb-4">最初のお見積もりでは20万円だと伺っていたのに気付けば</p>
                            <p className="text-4xl md:text-5xl text-[#ff6101]"><b>追加料金が発生していた</b></p>
                            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/etc-content-right-1.png" alt="" className="hidden md:block absolute right-24 bottom-0 w-40" />
                        </div>
                    </div>
                </div>

                {/* 当社の場合 */}
                <div>
                     <div className="bg-[#00693e] text-white text-2xl md:text-4xl rounded-t-2xl py-6 md:py-8">相続コミコミプランの場合</div>
                     <div className="bg-white rounded-b-2xl p-8 md:p-0 md:flex items-center">
                        <div className="md:w-1/2 p-4">
                             <img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/etc-content-left-2.png" alt="Our company case" />
                        </div>
                        <div className="md:w-1/2 p-4 relative">
                            <p className="text-xl md:text-2xl mb-4">相続コミコミプランの場合</p>
                            <p className="text-4xl md:text-5xl text-[#ff6101]" style={{ textShadow: '4px 4px 0 #fff, -4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff' }}>
                                <span className="underline decoration-[#fff733] decoration-[24px] underline-offset-[-3px]">追加費用は一切発生しません！</span>
                            </p>
                            <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/etc-content-right-2.png" alt="" className="hidden md:block absolute right-24 bottom-0 w-60" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default EtcSection;
