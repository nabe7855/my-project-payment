// src/components/sections/MainVisual.tsx

import React from 'react';
import FormPlaceholder from '../ui/FormPlaceholder';

/**
 * メインビジュアルセクション
 * 
 * サイトのトップに表示されるヒーローセクションです。
 * 主要なキャッチコピーとお問い合わせフォームへの導線を配置します。
 * 
 * @returns {JSX.Element} メインビジュアルセクションのUI
 */
const MainVisual: React.FC = () => (
    <section className="bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/mv.png')] md:bg-cover bg-contain bg-center bg-no-repeat pt-12 md:pt-10 lg:pt-12">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap lg:flex-nowrap gap-5">
                <div className="w-full lg:w-[calc(100%-440px)]">
                    <img className="hidden md:block mx-auto lg:mx-0" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/mv-img.png" alt="Main visual" />
                    <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/mv-img-sp.png" alt="Main visual SP" />
                </div>
                <div className="w-full lg:w-[420px] lg:flex-shrink-0 lg:pt-5">
                     <div className="bg-white border border-[#d0d0d0] rounded-lg p-8 pt-0 relative mt-8 lg:mt-0">
                        <p className="text-center text-lg font-bold leading-tight py-4 bg-[#00693e] text-white rounded-t-lg -mx-8 -mt-0 mb-8">ご相談・お問い合わせフォーム</p>
                        <FormPlaceholder/>
                    </div>
                </div>
            </div>
            <div className="text-center -mb-1 lg:mb-0">
                <img className="hidden md:inline-block relative bottom-[-9px] left-5" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/mv-image.png" alt="People illustration"/>
                <img className="md:hidden inline-block relative bottom-[-65px]" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/mv-image-sp.png" alt="People illustration SP"/>
            </div>
        </div>
    </section>
);

export default MainVisual;
