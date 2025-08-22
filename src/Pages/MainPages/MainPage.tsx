import { useCallback } from 'react'
import Header from '../../Components/Header'
import NebulaBackground from '../../Components/NebulaBackground'
import Hero from './Hero'
import About from './Development'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

const MainPage = () => {
  // Reserved for future use (e.g., generating nav/section lists)

  const handleTabChange = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <NebulaBackground />
      <Header onNavClick={handleTabChange} />
      <div className="flex w-full">
        <main className="w-full">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Services Section */}
          <Services />

          {/* Contact Section */}
          <Contact />

          
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
