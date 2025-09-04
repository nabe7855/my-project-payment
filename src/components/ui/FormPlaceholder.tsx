// src/components/ui/FormPlaceholder.tsx

import React from 'react';

/**
 * フォームのプレースホルダーコンポーネント
 * 
 * 実際のフォーム送信機能を持たない、デモ用のUIです。
 * 
 * @returns {JSX.Element} フォームプレースホルダーのUI
 */
const FormPlaceholder: React.FC = () => (
    <div className="bg-white border border-gray-300 p-4 rounded-lg text-gray-700">
        <p className="text-center font-bold mb-4 text-sm text-gray-500">ご相談・お問い合わせフォーム (デモ)</p>
        <div className="space-y-3">
            <div>
                <label className="text-xs font-semibold">お名前</label>
                <input type="text" className="w-full border border-gray-300 rounded p-2 mt-1 text-sm" placeholder="山田 太郎" />
            </div>
            <div>
                <label className="text-xs font-semibold">メールアドレス</label>
                <input type="email" className="w-full border border-gray-300 rounded p-2 mt-1 text-sm" placeholder="example@mail.com" />
            </div>
             <div>
                <label className="text-xs font-semibold">お問い合わせ内容</label>
                <textarea className="w-full border border-gray-300 rounded p-2 mt-1 text-sm h-20" placeholder="ご相談内容をご記入ください。"></textarea>
            </div>
            <button className="w-full bg-[#ed8634] text-white font-bold py-2 px-4 rounded hover:opacity-90 transition-opacity text-sm">
                送信する
            </button>
            <p className="text-xs text-center text-gray-400 mt-2">これはデモです。フォームは送信されません。</p>
        </div>
    </div>
);

export default FormPlaceholder;
