'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import MobileCTA from '@/components/layout/MobileCTA';
import FooterSection from '@/components/sections/FooterSection';
import ContractFormModal from '@/components/ContractFormModal';
import { PLANS } from '@/constants';
import type { Plan } from '@/types';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]);

  const openModalWithPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const scrollToConsultation = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ✅ 共通ヘッダー */}
      <Header />

      {/* ✅ ページコンテンツ */}
      <main className="pt-16 pb-24 md:pt-0 md:pb-0">{children}</main>

      {/* ✅ 共通フッター */}
      <FooterSection />

      {/* ✅ モバイル用CTA */}
      <MobileCTA
        onConsultClick={scrollToConsultation}
        onContractClick={() => openModalWithPlan(PLANS[1])}
      />

      {/* ✅ 契約フォームモーダル */}
      {isModalOpen && (
        <ContractFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialPlan={selectedPlan}
        />
      )}
    </>
  );
}
