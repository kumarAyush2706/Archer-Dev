import React from 'react'

const NebulaBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden noise">
      {/* Layered color glows */}
      <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.14),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(6,182,212,.14),transparent_35%)]"></div>

      {/* Animated soft blobs for depth */}
      <div className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/12 blur-3xl"></div>
      <div className="animate-blob absolute -bottom-20 left-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/12 blur-3xl animation-delay-2000"></div>
      <div className="animate-blob absolute -right-24 top-1/4 h-[22rem] w-[22rem] rounded-full bg-indigo-500/12 blur-3xl animation-delay-4000"></div>

      {/* Starfields (parallax + twinkle) */}
      <div className="nebula-stars"></div>
      <div className="nebula-stars nebula-stars-2"></div>

      {/* Aurora sweep */}
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(56,189,248,.18),transparent_70%)] blur-2xl"></div>

      {/* Shooting stars */}
      <div className="shooting-star" style={{ top: '20%', left: '5%', animationDelay: '2s' }} />
      <div className="shooting-star" style={{ top: '35%', left: '25%', animationDelay: '6s' }} />
      <div className="shooting-star" style={{ top: '60%', left: '15%', animationDelay: '10s' }} />

      {/* Subtle grid/vignette */}
      <div className="absolute inset-0 bg-grid opacity-[.25]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.55))]"></div>
    </div>
  )
}

export default NebulaBackground


