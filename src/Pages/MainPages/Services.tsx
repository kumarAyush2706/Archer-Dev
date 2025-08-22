import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      icon: '⚛️',
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Vue, and Angular. We create intuitive user interfaces that deliver exceptional user experiences.',
      features: ['Responsive Design', 'Progressive Web Apps', 'Component Architecture', 'Performance Optimization'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🔧',
      title: 'Backend Development',
      description: 'Robust server-side solutions using Node.js, Python, and .NET. Scalable APIs and microservices that power your applications.',
      features: ['RESTful APIs', 'Microservices', 'Database Design', 'Authentication & Security'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android. Native performance with React Native and Flutter.',
      features: ['Cross-platform', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure and DevOps services. We help you scale, secure, and optimize your applications in the cloud.',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'CI/CD Pipelines', 'Monitoring & Logging'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that leverage artificial intelligence and machine learning to automate and optimize your business processes.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems'],
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your applications, data, and infrastructure from threats.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      color: 'from-teal-400 to-green-500'
    }
  ]

  return (
    <section id="services" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-300 ring-1 ring-inset ring-white/10 mb-6">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We deliver end-to-end software solutions that drive innovation and business growth. From concept to deployment, we're with you every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 hover-glow group transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-neutral-300 text-center mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neutral-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Development Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery', 
                description: 'Understanding your business needs and technical requirements',
                color: 'from-blue-400 to-cyan-500'
              },
              { 
                step: '02', 
                title: 'Planning', 
                description: 'Creating detailed project roadmap and architecture',
                color: 'from-purple-400 to-pink-500'
              },
              { 
                step: '03', 
                title: 'Development', 
                description: 'Building your solution with agile methodology',
                color: 'from-green-400 to-emerald-500'
              },
              { 
                step: '04', 
                title: 'Delivery', 
                description: 'Deploying and maintaining your solution',
                color: 'from-orange-400 to-red-500'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {phase.title}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that perfectly fits your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="btn-primary rounded-lg px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
            <a 
              href="#about" 
              className="btn-ghost rounded-lg px-8 py-3 text-base font-semibold hover:bg-white/15 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
