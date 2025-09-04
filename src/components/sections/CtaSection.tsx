// src/components/sections/CtaSection.tsx

import React from 'react';
import FormPlaceholder from '../ui/FormPlaceholder';

interface CtaSectionProps {
    includeForm?: boolean;
}

/**
 * CTA（Call To Action）セクション
 * 
 * ユーザーに行動を促すためのセクションです。
 * `includeForm` propによって、フォーム付きのパターンと電話番号のみのパターンを切り替えられます。
 * 
 * @param {object} props - includeForm (optional)
 * @returns {JSX.Element} CTAセクションのUI
 */
const CtaSection: React.FC<CtaSectionProps> = ({ includeForm = false }) => (
    <section className="bg-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-dot-cv-1.png')] relative pt-4 pb-20 md:pb-0">
        <div className="absolute top-[-73px] md:top-[-105px] lg:top-[-144px] left-0 w-full h-[75px] md:h-[105px] lg:h-[144px] bg-cover bg-center bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-flow-sp.png')] md:bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-flow.png')]"></div>
         <div className="max-w-6xl mx-auto px-4 text-center">
             <h2 className="mt-[-23px] md:mt-[-10px] mb-6">
                <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cv-h2.png" alt="Contact"/>
                <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cv-h2-sp.png" alt="Contact SP"/>
            </h2>
            <div className="bg-white rounded-2xl mb-12 shadow-lg">
                <div className="p-4 pt-10 md:pt-12">
                    <img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cv-image-1.png" alt="Plan comparison"/>
                </div>
                <div className="bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-dot-cv.png')] p-8 md:p-12">
                   {includeForm ? (
                     <div className='max-w-lg mx-auto'>
                       <FormPlaceholder/>
                     </div>
                   ) : (
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                        <a href="#contact" className="flex items-center justify-center w-full max-w-md mx-auto h-20 md:h-24 text-white text-xl md:text-2xl font-bold bg-gradient-to-b from-[#f1ab3c] to-[#ec7f32] rounded-full shadow-md hover:opacity-90 transition-opacity relative">
                            メールでのお問い合わせはこちら
                            <i className="fa-solid fa-chevron-right absolute right-5 md:right-8"></i>
                        </a>
                    </div>
                   )}
                </div>
            </div>
            <a href="tel:0120016044">
                <img className="hidden md:block mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cv-tel-img.png" alt="Call us"/>
                <img className="md:hidden mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/cv-tel-img-sp.png" alt="Call us SP"/>
            </a>
         </div>
    </section>
);

export default CtaSection;
