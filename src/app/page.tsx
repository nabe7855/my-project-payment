'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BackgroundSection from '@/components/sections/BackgroundSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ServiceSection from '@/components/sections/ServiceSection';
import ReasonSection from '@/components/sections/ReasonSection';
import TeamSection from '@/components/sections/TeamSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import PriceSection from '@/components/sections/PriceSection';
import SimulatorSection from '@/components/sections/SimulatorSection';
import FlowSection from '@/components/sections/FlowSection';
import ReviewSection from '@/components/sections/ReviewSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { PLANS } from '@/constants';
import type { Plan } from '@/types';

export default function HomePage() {
  // ✅ 契約モーダルを開く（今はコンソール出力のみ）
  const openModalWithPlan = (plan: Plan) => {
    console.log('契約モーダルを開く:', plan.name);
  };

  // ✅ CTAまでスムーズスクロール
  const scrollToConsultation = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ✅ Heroセクション（CTAと契約のボタンを渡す） */}
      <HeroSection
        onContractClick={() => openModalWithPlan(PLANS[1])}
        onConsultClick={scrollToConsultation}
      />

      {/* ✅ 各セクション構成 */}
      <BackgroundSection />
      <div id="problems"><ProblemSection /></div>
      <div id="services"><ServiceSection /></div>
      <div id="reason"><ReasonSection /></div>
      <div id="team"><TeamSection /></div>
      <div id="comparison"><ComparisonSection /></div>

      {/* ✅ 料金セクション（契約ボタンを渡す） */}
      <div id="price">
        <PriceSection onContractClick={openModalWithPlan} />
      </div>

      <div id="simulator"><SimulatorSection /></div>

      {/* ✅ ご契約までの流れ（Flowセクション） */}
      <div id="flow">
        <FlowSection />
      </div>

      <div id="reviews"><ReviewSection /></div>
      <div id="faq"><FAQSection /></div>

      {/* ✅ 最後のCTA（相談ボタンを渡す） */}
      <div id="cta-section">
        <CTASection onConsultClick={scrollToConsultation} />
      </div>
    </>
  );
}
