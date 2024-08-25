import { Banner } from "@/components/pages/Banner"
import { CallToAction } from "@/components/pages/CallToAction"
import { FAQs } from "@/components/pages/FAQs"
import { Features } from "@/components/pages/Features"
import { Footer } from "@/components/pages/Footer"
import { Hero } from "@/components/pages/Hero"
import { LogoTicker } from "@/components/pages/LogoTicker"
import { Navbar } from "@/components/pages/Navbar"
import { ProductShowcase } from "@/components/pages/ProductShowcase"



const page = () => {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default page
