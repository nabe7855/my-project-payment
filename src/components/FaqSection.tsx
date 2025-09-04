// src/components/sections/FaqSection.tsx

import React, { useState } from 'react';

const faqData = [
    {
        question: "土日面談できますか？",
        answer: "対応可能です。土日は予定が埋まりやすいため、お早目の日程調整をお願いいたします。"
    },
    {
        question: "面談時間はどれくらいですか？",
        answer: "1回の面談で1時間～1時間半ほどを見込んでおります。"
    },
    {
        question: "面談にかける回数はどれくらいですか？",
        answer: "1回～3回ほどとなります。"
    },
    {
        question: "1億円を超えるか分からないのですが大丈夫でしょうか？",
        answer: "ご安心ください。面談の中でヒアリングしたうえでご案内いたします。"
    },
    {
        question: "オンラインによる弊害はありますか？",
        answer: "オンラインでも全く問題なく相続税申告を行うことができます。年間200件以上の実績もあるのでご安心ください。"
    },
    {
        question: "相談の結果コミコミプランの適用対象外になるケースはどのようなケースですか？",
        answer: "１億円を超えるケースや、土地の数が3か所を超えるケースはコミコミプラン適用対象外となります。また、相続発生から7か月が経過している場合（申告期限まで3ケ月を切っている場合）は、対象外となります。<br/><br/>コミコミプランの適用外となった場合でも、ご状況をヒアリングの上、御見積額をご提示させていただきますので、まずはお気軽にお問い合わせください。"
    }
];

/**
 * FAQアコーディオンの単一アイテム
 * @param {object} props - question, answer, isOpen, onClick
 * @returns {JSX.Element} FAQアイテムのUI
 */
const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <dl className="mb-6 md:mb-10 border-2 border-[#80b963] rounded-2xl overflow-hidden shadow-lg">
            <dt className={`cursor-pointer p-5 md:p-8 pl-14 md:pl-24 relative ${isOpen ? 'border-b border-gray-300' : ''}`} onClick={onClick}>
                <h4 className="font-bold text-lg md:text-3xl text-left leading-snug relative">
                    <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/q.svg" alt="Q" className="absolute left-[-40px] md:left-[-63px] top-1 w-7 h-6 md:w-auto md:h-auto"/>
                    {question}
                </h4>
            </dt>
            {isOpen && (
                <dd className="p-5 md:p-8 pl-14 md:pl-24">
                     <div className="text-base md:text-xl text-left leading-relaxed relative">
                        <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/a.svg" alt="A" className="absolute left-[-40px] md:left-[-64px] top-1 w-7 h-6 md:w-auto md:h-auto"/>
                         <p dangerouslySetInnerHTML={{ __html: answer }} />
                     </div>
                </dd>
            )}
        </dl>
    );
};

/**
 * FAQ（よくあるご質問）セクション
 * 
 * アコーディオン形式で質問と回答を表示します。
 * 
 * @returns {JSX.Element} FAQセクションのUI
 */
const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <section id="question" className="bg-white pt-32 pb-20 relative">
             <div className="absolute top-0 left-0 w-full h-20 md:h-32 bg-contain bg-bottom bg-no-repeat bg-[url('https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/bg-top-faq.png')]"></div>
            <div className="max-w-4xl mx-auto px-4 text-center">
                 <div className="inline-block bg-[#00693e] text-white font-bold rounded-full px-6 py-3 text-sm md:text-3xl mb-4 md:mb-10">24時間いつでも<b className="text-[#fff733] text-base md:text-4xl">無料</b>で受け付けております！</div>
                 <h2 className="text-3xl md:text-6xl text-[#383838] font-bold mb-16">よくあるご質問</h2>
                 <div className="relative">
                    <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/faq-img-left.svg" alt="" className="hidden lg:block absolute -top-52 left-5 w-20"/>
                    <img src="https://www.ht-tax.or.jp/sozoku/cms/wp-content/themes/sozoku-guide-lp/images/faq-img-right.svg" alt="" className="hidden lg:block absolute -top-52 right-4 w-20"/>
                    {faqData.map((faq, index) => (
                        <FaqItem 
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                 </div>
            </div>
        </section>
    );
}

export default FaqSection;
