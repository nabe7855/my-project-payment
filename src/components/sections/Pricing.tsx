
import React from 'react';

const options = [
  '相続税申告サポート',
  '不動産名義変更（相続登記）',
  '遺言執行／家族信託サポート',
  '戸籍の代理収集',
  '専門家の出張面談',
];

// Pricing section: Outlines the cost and available options
const Pricing: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-navy mb-12">
          料金とオプション
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-navy to-slate-900 text-white p-10 rounded-lg shadow-2xl text-center">
            <h3 className="font-serif text-2xl mb-2">あんしん相続パック</h3>
            <p className="text-5xl font-bold mb-2">
              33<span className="text-3xl">万円</span>
            </p>
            <p className="text-lg">(税込)</p>
            <p className="mt-4 border-t border-gold pt-4">原則はこのパック料金で相続手続きが完了します。</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy mb-4">追加オプション（必要な場合のみ）</h3>
            <ul className="space-y-3">
              {options.map((option, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-6 w-6 text-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{option}</span>
                </li>
              ))}
            </ul>
             <p className="mt-6 text-sm text-gray-600">※ 上記は一例です。ご状況に合わせて最適なプランをご提案します。追加費用が発生する場合は、必ず事前にお見積りを提示いたします。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
