// src/app/page.tsx
import React from 'react';
import Hero from '@/components/sections/Hero';
import SocialBackground from '@/components/sections/SocialBackground';
import ServiceIntro from '@/components/sections/ServiceIntro';
import PeaceOfMind from '@/components/sections/PeaceOfMind';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialBackground />
      <ServiceIntro />
      <PeaceOfMind />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}
