import BlogSection from '@/components/blog-section'
import ErlebenSection from '@/components/erleben-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import PartnersSection from '@/components/partners-section'
import StatsSection from '@/components/stats-section'
import TestimonialsSection from '@/components/testimonials-section'
import WhatWeOfferSection from '@/components/what-we-offer-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ErlebenSection />
      <WhatWeOfferSection />
      <StatsSection />
      <PartnersSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
