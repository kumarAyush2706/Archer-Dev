import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger landing animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Solar System Background - Full Width */}
      <div className={`absolute inset-0 perspective-1000 transition-all duration-3000 ${
        isLoaded ? 'translate-x-1/3 scale-75 rotate-12' : 'translate-x-0 scale-100 rotate-0'
      }`}>
        {/* Central Sun with enhanced glow effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 rounded-full shadow-2xl shadow-yellow-300/60 animate-pulse relative">
            {/* Sun surface details */}
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 rounded-full opacity-80"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 via-orange-300 to-yellow-500 rounded-full opacity-60"></div>
          </div>
          {/* Enhanced corona effect */}
          <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-yellow-200/40 via-orange-300/30 to-red-400/20 rounded-full blur-xl animate-ping"></div>
          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-yellow-100/20 via-orange-200/15 to-red-300/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Orbital Paths - Full Width */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Orbit 1 - Mercury */}
          <div className="absolute w-64 h-64 border border-gray-400/15 rounded-full transform -translate-x-32 -translate-y-32"></div>
          
          {/* Orbit 2 - Venus */}
          <div className="absolute w-96 h-96 border border-yellow-400/15 rounded-full transform -translate-x-48 -translate-y-48"></div>
          
          {/* Orbit 3 - Earth */}
          <div className="absolute w-[32rem] h-[32rem] border border-blue-400/15 rounded-full transform -translate-x-64 -translate-y-64"></div>
          
          {/* Orbit 4 - Mars */}
          <div className="absolute w-[40rem] h-[40rem] border border-red-400/15 rounded-full transform -translate-x-80 -translate-y-80"></div>
          
          {/* Orbit 5 - Jupiter */}
          <div className="absolute w-[48rem] h-[48rem] border border-orange-400/12 rounded-full transform -translate-x-96 -translate-y-96"></div>
          
          {/* Orbit 6 - Saturn */}
          <div className="absolute w-[56rem] h-[56rem] border border-yellow-300/12 rounded-full transform -translate-x-[14rem] -translate-y-[14rem]"></div>
        </div>

        {/* Realistic Planets with enhanced orbits */}
        {/* Mercury - Small, rocky, gray */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full shadow-lg shadow-gray-400/40 planet-mercury relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700 rounded-full"></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rounded-full opacity-80"></div>
            <div className="absolute top-1 left-1 w-1 h-1 bg-gray-200 rounded-full opacity-60"></div>
          </div>
        </div>
        
        {/* Venus - Medium, cloudy, yellow-orange */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-5 h-5 rounded-full shadow-lg shadow-yellow-300/40 planet-venus relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-orange-300 to-yellow-400 rounded-full"></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-orange-200 via-yellow-300 to-orange-400 rounded-full opacity-70"></div>
            <div className="absolute inset-0 bg-yellow-200/30 rounded-full blur-sm"></div>
          </div>
        </div>
        
        {/* Earth - Blue marble with continents */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 rounded-full shadow-lg shadow-blue-400/50 planet-earth relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 rounded-full"></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-full"></div>
            {/* Continents */}
            <div className="absolute top-1 left-1 w-2 h-1.5 bg-green-500 rounded-full opacity-80"></div>
            <div className="absolute bottom-1 right-1 w-1.5 h-1 bg-green-600 rounded-full opacity-70"></div>
            {/* Atmosphere glow */}
            <div className="absolute inset-0 bg-blue-300/20 rounded-full blur-sm"></div>
          </div>
        </div>
        
        {/* Mars - Red planet with polar caps */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-5 h-5 rounded-full shadow-lg shadow-red-400/40 planet-mars relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-300 via-red-500 to-red-700 rounded-full"></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-orange-400 via-red-400 to-red-600 rounded-full opacity-80"></div>
            {/* Polar caps */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Jupiter - Gas giant with bands */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full shadow-lg shadow-orange-400/50 planet-jupiter relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-orange-400 to-red-500 rounded-full"></div>
            {/* Gas bands */}
            <div className="absolute top-2 inset-x-0 h-1 bg-orange-600 opacity-60"></div>
            <div className="absolute top-4 inset-x-0 h-1 bg-red-400 opacity-50"></div>
            <div className="absolute top-6 inset-x-0 h-1 bg-orange-500 opacity-60"></div>
            {/* Great Red Spot */}
            <div className="absolute top-3 right-2 w-2 h-1.5 bg-red-600 rounded-full opacity-80"></div>
          </div>
        </div>
        
        {/* Saturn - Ringed planet */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-full shadow-lg shadow-yellow-300/40 planet-saturn relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-400 rounded-full"></div>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500 rounded-full opacity-80"></div>
            {/* Saturn's rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-gray-300/40 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-gray-400/30 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Asteroid Belt */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[44rem] h-[44rem] border border-amber-400/8 rounded-full transform -translate-x-[11rem] -translate-y-[11rem]"></div>
          {/* More scattered asteroids */}
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-amber-300 rounded-full asteroid-1"></div>
          <div className="absolute top-8 left-1/4 w-1 h-1 bg-amber-400 rounded-full asteroid-2"></div>
          <div className="absolute top-16 left-3/4 w-1 h-1 bg-amber-300 rounded-full asteroid-3"></div>
          <div className="absolute top-24 left-1/3 w-1 h-1 bg-amber-400 rounded-full asteroid-4"></div>
          <div className="absolute top-32 left-2/3 w-1 h-1 bg-amber-300 rounded-full asteroid-5"></div>
          <div className="absolute top-40 left-1/6 w-1 h-1 bg-amber-400 rounded-full asteroid-6"></div>
        </div>
      </div>

      {/* Enhanced Starfield */}
      <div className="absolute inset-0">
        {/* Multiple layers of stars for depth */}
        <div className="absolute inset-0 starfield-layer-1"></div>
        <div className="absolute inset-0 starfield-layer-2"></div>
        <div className="absolute inset-0 starfield-layer-3"></div>
        
        {/* Blinking/Twinkling Stars */}
        <div className="absolute inset-0">
          {/* Large twinkling stars */}
          <div className="absolute top-20 left-16 w-1 h-1 bg-white rounded-full twinkle-star" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-white rounded-full twinkle-star" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-48 left-1/3 w-1 h-1 bg-white rounded-full twinkle-star" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-64 right-1/3 w-1 h-1 bg-white rounded-full twinkle-star" style={{ animationDelay: '4.5s' }}></div>
          <div className="absolute top-80 left-1/4 w-1 h-1 bg-white rounded-full twinkle-star" style={{ animationDelay: '6s' }}></div>
          <div className="absolute top-96 right-1/4 w-1 h-1 bg-white rounded-full twinkle-star" style={{ animationDelay: '7.5s' }}></div>
          
          {/* Medium twinkling stars */}
          <div className="absolute top-28 left-1/2 w-0.5 h-0.5 bg-blue-200 rounded-full twinkle-star-medium" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-56 right-16 w-0.5 h-0.5 bg-cyan-200 rounded-full twinkle-star-medium" style={{ animationDelay: '2.3s' }}></div>
          <div className="absolute top-72 left-2/3 w-0.5 h-0.5 bg-yellow-200 rounded-full twinkle-star-medium" style={{ animationDelay: '3.8s' }}></div>
          <div className="absolute top-88 right-2/3 w-0.5 h-0.5 bg-purple-200 rounded-full twinkle-star-medium" style={{ animationDelay: '5.3s' }}></div>
          
          {/* Small twinkling stars */}
          <div className="absolute top-16 left-1/6 w-0.5 h-0.5 bg-white rounded-full twinkle-star-small" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-40 right-1/6 w-0.5 h-0.5 bg-blue-100 rounded-full twinkle-star-small" style={{ animationDelay: '2.7s' }}></div>
          <div className="absolute top-64 left-3/4 w-0.5 h-0.5 bg-green-100 rounded-full twinkle-star-small" style={{ animationDelay: '4.2s' }}></div>
          <div className="absolute top-88 right-3/4 w-0.5 h-0.5 bg-pink-100 rounded-full twinkle-star-small" style={{ animationDelay: '5.7s' }}></div>
          
          {/* Additional scattered twinkling stars */}
          <div className="absolute top-24 left-3/4 w-0.5 h-0.5 bg-yellow-100 rounded-full twinkle-star" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-52 left-1/5 w-0.5 h-0.5 bg-cyan-100 rounded-full twinkle-star" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute top-76 right-1/5 w-0.5 h-0.5 bg-purple-100 rounded-full twinkle-star" style={{ animationDelay: '3.3s' }}></div>
          <div className="absolute top-100 left-4/5 w-0.5 h-0.5 bg-green-100 rounded-full twinkle-star" style={{ animationDelay: '4.8s' }}></div>
        </div>
        
        {/* Shooting stars */}
        <div className="shooting-star" style={{ top: '15%', left: '10%', animationDelay: '2s' }}></div>
        <div className="shooting-star" style={{ top: '25%', left: '20%', animationDelay: '8s' }}></div>
        <div className="shooting-star" style={{ top: '45%', left: '15%', animationDelay: '15s' }}></div>
        <div className="shooting-star" style={{ top: '65%', right: '20%', animationDelay: '22s' }}></div>
      </div>

      {/* Content Container */}
      <div className={`relative z-20 text-center px-6 transition-all duration-2000 ${
        isLoaded ? 'opacity-100 translate-y-0 -translate-x-16' : 'opacity-0 translate-y-20 translate-x-0'
      }`}>
        {/* Welcome Badge */}
        <div className={`mb-8 inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-300 ring-1 ring-inset ring-white/10 transition-all duration-1200 delay-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          Welcome to ArcherDev
        </div>

        {/* Main Heading */}
        <h1 className={`max-w-6xl transition-all duration-1200 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } sm:text-8xl`}>
          <span className="inline-block">
            <span className="bg-gradient-to-br from-white via-indigo-100 to-cyan-100 bg-clip-text text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight text-transparent floating-text-1 blinking-text">
              Building
            </span>
          </span>
          <span className="inline-block ml-3">
            <span className="bg-gradient-to-br from-cyan-100 via-blue-200 to-indigo-200 bg-clip-text text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight text-transparent floating-text-2 blinking-text">
              software
            </span>
          </span>
          <span className="inline-block ml-3">
            <span className="bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight text-transparent floating-text-3 blinking-text">
              products
            </span>
          </span>
          <br />
          <span className="inline-block">
            <span className="bg-gradient-to-br from-pink-200 via-rose-200 to-orange-200 bg-clip-text text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight text-transparent floating-text-4 blinking-text">
              that
            </span>
          </span>
          <span className="inline-block ml-3">
            <span className="bg-gradient-to-br from-orange-200 via-yellow-200 to-green-200 bg-clip-text text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight text-transparent floating-text-5 blinking-text">
              shape
            </span>
          </span>
          <span className="inline-block ml-3">
            <span className="bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200 bg-clip-text text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight text-transparent floating-text-6 blinking-text">
              the
            </span>
          </span>
          <span className="inline-block ml-3">
            <span className="bg-gradient-to-br from-teal-200 via-cyan-200 to-blue-200 bg-clip-text text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight text-transparent floating-text-7 blinking-text">
              future
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className={`mt-6 max-w-3xl mx-auto text-lg text-neutral-300 transition-all duration-1200 delay-1500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          We craft scalable platforms, AI-driven experiences, and developer tools with precision and care.
        </p>

        {/* CTA Buttons */}
        <div className={`mt-10 flex flex-wrap justify-center gap-4 transition-all duration-1200 delay-2000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="#contact" 
            className="btn-primary rounded-lg px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start a project
          </a>
          <a 
            href="#about" 
            className="btn-ghost rounded-lg px-6 py-3 text-base font-semibold hover:bg-white/15 transition-all duration-300"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Floating Nebula Elements */}
      <div className={`absolute bottom-20 left-10 transition-all duration-1500 delay-2500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>
      
      <div className={`absolute bottom-32 right-20 transition-all duration-1500 delay-3000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>
    </section>
  )
}

export default Hero
