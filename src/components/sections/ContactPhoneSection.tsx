// src/components/sections/ContactPhoneSection.tsx

import React from 'react';

/**
 * 電話お問い合わせセクション
 * 
 * 電話番号と受付時間を大きく表示し、電話での問い合わせを促進します。
 * 
 * @returns {JSX.Element} 電話お問い合わせセクションのUI
 */
const ContactPhoneSection: React.FC = () => (
     <section className="bg-cover bg-bottom bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-contact.png')] pt-40 text-center">
         <div className="max-w-6xl mx-auto px-4">
            <div className="hidden md:block mb-40">
                 <div className="inline-block bg-[#00693e] text-white font-bold rounded-full px-8 py-3 text-3xl mb-10">24時間いつでも<b>無料</b>で受け付けております！</div>
                <h3 className="text-6xl font-bold text-[#383838] mb-10">お問い合わせ・ご相談フォーム</h3>
                <p className="text-xl leading-loose mb-4">お問い合わせを頂いてから、当日中～翌営業日にはご連絡させて頂きます。<br/>(対応時間:平日9:30～17:30 ※土日祝日は休み）</p>
                <p className="text-xl leading-loose mb-12">フォームに必要事項を入力し、「送信する」ボタンを押してください。</p>
            </div>

             <div className="mb-20 md:mb-40">
                <div className="text-xl md:text-3xl font-bold border border-[#00693e] text-[#00693e] rounded-full py-2 px-6 inline-block mb-4">無 料</div>
                <p className="text-2xl md:text-4xl font-bold text-[#383838] mb-2">お電話からのご相談はこちらから</p>
                <a href="tel:0120016044" className="flex items-center justify-center font-['Roboto'] font-bold text-[#00693e] text-6xl md:text-[120px] mb-2">
                    <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/icon-phone.png" alt="phone" className="h-10 w-10 md:h-20 md:w-20 mr-4"/>
                    0120-999-999
                </a>
                <p className="bg-white border border-[#d5d5d5] inline-block py-2 px-8 md:py-4 md:px-16 text-xl md:text-2xl rounded-sm">年中無休｜受付24時間対応</p>
             </div>
         </div>
         <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/contact-image-bottom.png" alt="bottom illustration" className="w-full hidden md:block" />
         <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/contact-image-bottom-sp.png" alt="bottom illustration sp" className="w-full md:hidden" />
     </section>
);

export default ContactPhoneSection;
