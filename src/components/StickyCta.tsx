// src/components/ui/StickyCta.tsx

import React from 'react';

/**
 * スティッキーCTA（Call To Action）コンポーネント
 * 
 * モバイル表示時に画面下部に固定表示される、メールと電話のお問い合わせボタンです。
 * 
 * @returns {JSX.Element} スティッキーCTAのUI
 */
const StickyCta: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0C5336] p-2 z-50 h-[74px]">
      <div className="flex justify-center items-center gap-2 h-full">
        <a href="#contact" className="flex-1">
          <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/f-mail.png" alt="Email Inquiry" className="h-[58px] w-full object-contain" />
        </a>
        <a href="tel:0120999999" className="flex-1">
          <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/f-tel.png" alt="Phone Inquiry" className="h-[58px] w-full object-contain" />
        </a>
      </div>
    </div>
  );
};

export default StickyCta;
