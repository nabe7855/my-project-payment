// src/components/sections/FeatureYearSection.tsx

import React from 'react';

/**
 * 年間実績アピールセクション
 * 
 * 業界最大級の実績を数値で示すことで、信頼性を高めます。
 * 
 * @returns {JSX.Element} 年間実績セクションのUI
 */
const FeatureYearSection: React.FC = () => (
    <section className="bg-[#00693e] text-white font-bold text-center py-20 md:py-28 -mt-3 relative">
        <div className="max-w-6xl mx-auto px-4">
            <p className="text-2xl md:text-4xl leading-relaxed mb-4">
                <b className="text-3xl md:text-5xl">業界最大</b>の<b className="text-3xl md:text-5xl">相続申告件数</b>の<b className="text-3xl md:text-5xl">実績を誇る</b><br />
                税理士法人である辻・本郷 税理士法人が
            </p>
            <p className="text-4xl md:text-6xl text-[#fff733] leading-tight">
                責任をもってお客様の相続申告を<br />
                対応いたします！
            </p>
        </div>
    </section>
);

export default FeatureYearSection;
