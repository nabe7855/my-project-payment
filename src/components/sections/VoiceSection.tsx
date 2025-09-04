// src/components/sections/VoiceSection.tsx

import React from 'react';

/**
 * お客様の声セクション
 * 
 * 実際のお客様の声を掲載することで、信頼性や安心感を高めます。
 * 
 * @returns {JSX.Element} お客様の声セクションのUI
 */
const VoiceSection: React.FC = () => (
    <section className="bg-[#faf6f1] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
             <img className="hidden md:block mx-auto mb-10" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/h2-voice.svg" alt="Customer voices" />
             <img className="md:hidden mx-auto mb-10" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/h2-voice-sp.svg" alt="Customer voices SP" />
            <p className="text-2xl md:text-4xl text-[#383838] font-bold mb-4">相続税申告のご依頼をいただいたお客様の声</p>
            <p className="text-lg md:text-2xl text-[#383838] mb-12">サービスをご利用いただいた すべてのお客さまにご満足いただいております。</p>

            <div className="relative">
                <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/voice-img-family.png" alt="Family" className="hidden md:block absolute right-0 top-28 w-96"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-white border-2 border-[#80b963] rounded-2xl p-8 shadow-lg">
                            <img className="mx-auto mb-4" src={`https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/voice-img0${i+1}.png`} alt={`Voice ${i+1}`} />
                            <p className="text-sm">
                                {['東京都の女性（60代）', '埼玉県の男性（60代）', '東京都の男性（60代）', '東京都の男性（60代）', '岡山県の女性（50代）', '東京都の女性（60代）', '神奈川県の女性（50代）', '北海道の女性（70代）'][i]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default VoiceSection;
