// src/components/sections/ContactFormSection.tsx

import React from 'react';
import FormPlaceholder from '../ui/FormPlaceholder';

/**
 * お問い合わせフォームセクション
 * 
 * ページ下部に配置される、メインのお問い合わせフォームです。
 * 
 * @returns {JSX.Element} お問い合わせフォームセクションのUI
 */
const ContactFormSection: React.FC = () => (
    <section id="contact" className="bg-[#edf4f2] text-center pt-20 pb-28 md:pt-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="hidden md:block mb-7"><img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/h2-pc-form.png" alt="Inquiry form"/></h2>
            <h2 className="md:hidden mb-7"><img className="mx-auto" src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/h2-sp-form.png" alt="Inquiry form"/></h2>
             <div className="bg-white rounded-2xl p-6 md:p-16 relative">
                <FormPlaceholder/>
             </div>
        </div>
    </section>
);

export default ContactFormSection;
