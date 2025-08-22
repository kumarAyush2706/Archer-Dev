import React, { useEffect, useState } from 'react'

interface HeaderProps {
  onNavClick?: (id: string) => void
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className={`fixed top-0 z-30 w-full border-b border-white/5 bg-neutral-950/70 backdrop-blur-md transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="flex w-full items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500"></div>
          <span className="bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-cyan-300 bg-clip-text text-lg font-semibold tracking-tight text-transparent">ArcherDev</span>
        </div>
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick?.(item.id)}
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <a
            href="#contact"
            className="btn-ghost rounded-lg px-3 py-2 text-sm font-semibold shadow-sm"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header


