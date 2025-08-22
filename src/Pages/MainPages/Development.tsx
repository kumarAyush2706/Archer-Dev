import React from 'react'

const Development: React.FC = () => {
  return (
    <>
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover animate-float"
          autoPlay
          loop
          muted
          playsInline
          style={{
            animationDuration: '8s',
            animationTimingFunction: 'ease-in-out'
          }}
        >
          <source src="https://cdn.pixabay.com/video/2023/11/13/188989-884171303_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-purple-900/20 to-blue-900/25 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-500/5 to-transparent animate-pulse" style={{animationDuration: '10s'}}></div>
        
        {/* Enhanced floating light particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60 animate-glow" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70 animate-glow" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-80 animate-glow" style={{animationDuration: '5s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60 animate-glow" style={{animationDuration: '3.5s'}}></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse opacity-40 animate-float" style={{animationDuration: '7s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse opacity-50 animate-float" style={{animationDuration: '9s'}}></div>
        </div>
      </div>

      {/* Nebula Background Elements - Layered on top of video */}
      <div className="absolute inset-0 z-0">
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-blue-900/30"></div>
        
        {/* Animated blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
        
        {/* Nebula stars */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-48 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-64 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-3000"></div>
          <div className="absolute top-80 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-4000"></div>
          <div className="absolute top-96 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-5000"></div>
        </div>
        
        {/* Aurora sweep */}
        <div className="absolute inset-0 aurora-sweep"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-15"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-16 mt-16">
          <div className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-300 ring-1 ring-inset ring-white/10 mb-6">
            Custom Software Development
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-6">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We architect, design, and develop custom software solutions that drive business transformation and competitive advantage
          </p>
        </div>

        {/* Enterprise Solutions - Clean Design */}
        <div className="mb-20 text-center">
          <div className="mb-12">
           
           
            <p className="text-2xl text-neutral-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              Custom enterprise software, ERP systems, and business process automation tools that streamline operations and boost productivity.
              </p>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
              <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-4"></div>
              <span className="text-neutral-300 text-lg font-medium">Custom ERP & CRM</span>
                </div>
                <div className="text-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full mx-auto mb-4"></div>
              <span className="text-neutral-300 text-lg font-medium">Workflow automation</span>
                </div>
                <div className="text-center">
              <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-4"></div>
              <span className="text-neutral-300 text-lg font-medium">Data integration</span>
                </div>
                <div className="text-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full mx-auto mb-4"></div>
              <span className="text-neutral-300 text-lg font-medium">Security & compliance</span>
                </div>
              </div>
            </div>

        {/* Development Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Our Development Methodology</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                step: '01', 
                title: 'Discovery & Planning', 
                description: 'Requirements gathering, technical architecture, and project roadmap development',
                color: 'from-blue-400 to-cyan-500'
              },
              { 
                step: '02', 
                title: 'Design & Prototyping', 
                description: 'UI/UX design, wireframes, and interactive prototypes for stakeholder approval',
                color: 'from-purple-400 to-pink-500'
              },
              { 
                step: '03', 
                title: 'Development & Testing', 
                description: 'Agile development cycles with continuous integration and comprehensive testing',
                color: 'from-green-400 to-emerald-500'
              },
              { 
                step: '04', 
                title: 'Deployment & Support', 
                description: 'Production deployment, monitoring, and ongoing maintenance support',
                color: 'from-orange-400 to-red-500'
              }
            ].map((phase, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center hover-glow group">
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-sm text-neutral-300">{phase.description}</p>
                </div>
            ))}
          </div>
        </div>

                {/* Technology Stack - Full Width Auto-Scrolling */}
        <div className="mb-16 w-full">
          <h3 className="text-3xl font-bold text-white mb-8">Technology Stack</h3>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[
                { name: 'Frontend', icon: '⚛️', color: 'from-blue-400 to-cyan-500', tech: 'React, Vue, Angular' },
                { name: 'Backend', icon: '🔧', color: 'from-purple-400 to-pink-500', tech: 'Node.js, Python, .NET' },
                { name: 'Database', icon: '🗄️', color: 'from-green-400 to-emerald-500', tech: 'PostgreSQL, MongoDB, Redis' },
                { name: 'Cloud', icon: '☁️', color: 'from-orange-400 to-red-500', tech: 'AWS, Azure, GCP' },
                { name: 'DevOps', icon: '⚡', color: 'from-yellow-400 to-orange-500', tech: 'Docker, Kubernetes, CI/CD' },
                { name: 'Mobile', icon: '📱', color: 'from-red-400 to-pink-500', tech: 'React Native, Flutter' },
                { name: 'AI/ML', icon: '🤖', color: 'from-indigo-400 to-purple-500', tech: 'TensorFlow, PyTorch' },
                { name: 'Security', icon: '🛡️', color: 'from-teal-400 to-green-500', tech: 'OAuth, JWT, SSL/TLS' },
                { name: 'Testing', icon: '🧪', color: 'from-pink-400 to-rose-500', tech: 'Jest, Cypress, Selenium' },
                { name: 'Monitoring', icon: '📊', color: 'from-indigo-400 to-blue-500', tech: 'Grafana, Prometheus, ELK' },
                // Duplicate items for seamless loop
                { name: 'Frontend', icon: '⚛️', color: 'from-blue-400 to-cyan-500', tech: 'React, Vue, Angular' },
                { name: 'Backend', icon: '🔧', color: 'from-purple-400 to-pink-500', tech: 'Node.js, Python, .NET' },
                { name: 'Database', icon: '🗄️', color: 'from-green-400 to-emerald-500', tech: 'PostgreSQL, MongoDB, Redis' },
                { name: 'Cloud', icon: '☁️', color: 'from-orange-400 to-red-500', tech: 'AWS, Azure, GCP' },
                { name: 'DevOps', icon: '⚡', color: 'from-yellow-400 to-orange-500', tech: 'Docker, Kubernetes, CI/CD' },
                { name: 'Mobile', icon: '📱', color: 'from-red-400 to-pink-500', tech: 'React Native, Flutter' },
                { name: 'AI/ML', icon: '🤖', color: 'from-indigo-400 to-purple-500', tech: 'TensorFlow, PyTorch' },
                { name: 'Security', icon: '🛡️', color: 'from-teal-400 to-green-500', tech: 'OAuth, JWT, SSL/TLS' },
                { name: 'Testing', icon: '🧪', color: 'from-pink-400 to-rose-500', tech: 'Jest, Cypress, Selenium' },
                { name: 'Monitoring', icon: '📊', color: 'from-indigo-400 to-blue-500', tech: 'Grafana, Prometheus, ELK' }
            ].map((tech, index) => (
                <div key={index} className="glass rounded-xl p-6 text-center hover-glow group flex-shrink-0 w-48">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                  <div className="text-white font-semibold mb-2">{tech.name}</div>
                  <div className="text-xs text-neutral-400">{tech.tech}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Floating Elements - Same as Hero Page */}
      <div className="absolute inset-0 z-0">
        {/* Floating nebula elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-40 h-40 bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-xl animate-pulse animation-delay-4000"></div>
         
        {/* Additional floating elements */}
        <div className="absolute top-3/4 right-1/3 w-28 h-28 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
      </div>
    </section>

    {/* Why Choose Us Section - Outside Video Background */}
    <section className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Choose ArcherDev</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 hover-glow text-left">
            <h4 className="text-xl font-bold text-white mb-4">Expert Team</h4>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Senior developers with 10+ years of experience</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Certified cloud architects and DevOps engineers</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>UI/UX designers focused on user experience</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Project managers ensuring timely delivery</span>
              </li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-8 hover-glow text-left">
            <h4 className="text-xl font-bold text-white mb-4">Quality Assurance</h4>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Comprehensive testing strategies and automation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Code review and pair programming practices</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Performance optimization and scalability testing</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Security audits and penetration testing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section - Outside Video Background */}
    <section className="relative py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Custom Solution?</h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a tailored software solution that drives your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="btn-primary rounded-lg px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a 
              href="#testimonials" 
              className="btn-ghost rounded-lg px-8 py-3 text-base font-semibold hover:bg-white/15 transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Development
