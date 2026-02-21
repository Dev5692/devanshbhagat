import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import WorkSection from '@/components/portfolio/WorkSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ReviewsSection from '@/components/portfolio/ReviewsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <SkillsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}