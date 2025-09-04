"use client";
// src/App.tsx

import React, { useState } from 'react';

// データ
import { navLinks } from '@/data/siteData';

// レイアウトコンポーネント
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainNav from '@/components/layout/MainNav';

// UIコンポーネント
import StickyCta from '@/components/StickyCta';

// セクションコンポーネント
import MainVisual from '@/components/sections/MainVisual';
import AboutPlan from '@/components/sections/AboutPlan';
import PaymentSection from '@/components/sections/PaymentSection';
import FeatureBanner from '@/components/sections/FeatureBanner';
import FlowSection from '@/components/sections/FlowSection';
import CtaSection from '@/components/sections/CtaSection';
import WorriesSection from '@/components/sections/WorriesSection';
import AssuranceSection from '@/components/sections/AssuranceSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ReasonTitleSection from '@/components/sections/ReasonTitleSection';
import ReasonSection from '@/components/sections/ReasonSection';
//import WhySection from '@/components/sections/WhySection';
import EtcSection from '@/components/sections/EtcSection';
import FeatureTitleSection from '@/components/sections/FeatureTitleSection';
import FeatureYearSection from '@/components/sections/FeatureYearSection';
//import FeatureMediaSection from '@/components/sections/FeatureMediaSection';
//import YoutubeSection from '@/components/sections/YoutubeSection';
import ScrollingBanner from '@/components/sections/ScrollingBanner';
import VoiceSection from '@/components/sections/VoiceSection';
import FaqSection from '@/components/FaqSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import ContactPhoneSection from '@/components/sections/ContactPhoneSection';

/**
 * アプリケーションのメインコンポーネント
 * 
 * すべてのセクションを組み立てて、完全なランディングページを構築します。
 * モバイルナビゲーションの開閉状態を管理します。
 * 
 * @returns {JSX.Element} ランディングページ全体
 */
const App: React.FC = () => {
    // モバイルメニューの開閉状態を管理
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ハードコードされたサイトデータ。本来はAPIなどから取得することを想定。


    return (
        <div className="font-['Noto_Sans_JP'] text-[#333]">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={navLinks} />
            <main>
                <MainNav navLinks={navLinks} />
                <MainVisual />
                <AboutPlan />
                <PaymentSection />
                <FeatureBanner />
                <FlowSection />
                <CtaSection />
                <WorriesSection />
                <AssuranceSection />
                <SolutionSection />
                <ReasonTitleSection />
                <ReasonSection />
                {/* <WhySection /> */}
                <EtcSection />
                {/* 2回目のCTAセクション（フォーム付き） */}
                <CtaSection includeForm={true} />
                <FeatureTitleSection />
                <FeatureYearSection />
                {/* <FeatureMediaSection siteData={siteData} /> */}
                {/* <YoutubeSection siteData={siteData} /> */}
                <ScrollingBanner />
                <VoiceSection />
                <FaqSection />
                <ContactFormSection />
                <ContactPhoneSection />
            </main>
            <Footer navLinks={navLinks} />
            <StickyCta />
        </div>
    );
};

export default App;