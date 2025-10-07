'use client';
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { Phone, Edit, Send, FileCheck } from 'lucide-react';

// ✅ FlowSectionProps は削除（未使用警告対策）
const FlowStep: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => (
  <motion.div
    className="relative flex flex-col items-center text-center z-10 w-full max-w-md mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay }}
  >
    {/* 💡 ステップ全体の背景カード */}
    <div className="relative w-full bg-white rounded-2xl shadow-md p-6 pb-8 border border-gray-100">
      {/* アイコン */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gold text-white rounded-full p-4 shadow-lg">
        {icon}
      </div>

      {/* テキスト部分 */}
      <div className="mt-8">
        <h3 className="font-bold text-lg text-navy mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>

    {/* 縦のつなぎライン（スマホで細く、デスクトップでやや強調） */}
    <div className="w-0.5 h-10 bg-gradient-to-b from-gold/40 to-gold/10 md:h-12"></div>
  </motion.div>
);

const FlowSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white via-[#fafafa] to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <SectionTitle title="ご契約までの流れ" subtitle="Process Flow" />

        {/* 光のライン演出（背景層に配置） */}
        <div className="hidden md:block absolute left-1/2 top-40 bottom-16 w-0.5 bg-gold/20 -translate-x-1/2 z-0 overflow-hidden">
          <motion.div
            className="absolute left-0 w-full h-10 rounded-full bg-gradient-to-b from-yellow-100 via-yellow-400 to-transparent blur-md"
            initial={{ top: '-4rem', opacity: 0 }}
            animate={{
              top: ['-4rem', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* フロー全体 */}
        <div className="flex flex-col gap-16 relative z-10">
          {/* ① 無料相談から */}
          <div className="flex flex-col items-center gap-12">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-2 text-center">
              ① 無料相談から
            </h3>

            <FlowStep
              icon={<Phone size={24} />}
              title="STEP 1: お申し込み"
              description="お電話またはフォームからご予約ください。"
              delay={0}
            />
            <FlowStep
              icon={<Edit size={24} />}
              title="STEP 2: 無料相談"
              description="専門家が現状を伺い、最適なプランを提案します。"
              delay={0.3}
            />
            <FlowStep
              icon={<FileCheck size={24} />}
              title="STEP 3: ご契約"
              description="内容にご納得いただけたら契約手続きに進みます。"
              delay={0.6}
            />
          </div>

          {/* ② 今すぐ契約 */}
          <div className="flex flex-col items-center gap-12">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-2 text-center">
              ② 今すぐ契約
            </h3>

            <FlowStep
              icon={<Edit size={24} />}
              title="STEP 1: プラン選択"
              description="ご希望のプランを選択し、契約フォームへ。"
              delay={0.9}
            />
            <FlowStep
              icon={<Send size={24} />}
              title="STEP 2: フォーム送信"
              description="必要事項を入力し送信。この時点で契約が成立します。"
              delay={1.2}
            />
            <FlowStep
              icon={<FileCheck size={24} />}
              title="STEP 3: 手続き開始"
              description="契約控えがメールで届き、担当者からご連絡します。"
              delay={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
