
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Tools from '@/components/tools'
import Process from '@/components/process'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Tools />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
