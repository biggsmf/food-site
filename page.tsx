import Navbar          from '@/components/Navbar'
import HeroSection      from '@/components/HeroSection'
import AboutSection     from '@/components/AboutSection'
import ProductsSection  from '@/components/ProductsSection'
import VideoSection     from '@/components/VideoSection'
import EngagementSection from '@/components/EngagementSection'
import ContactSection   from '@/components/ContactSection'
import Footer           from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <VideoSection />
        <EngagementSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
