import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-6 py-3 text-lg font-semibold text-white ring-1 ring-inset ring-purple-500/30 mb-6 backdrop-blur-sm">
            ✨ Let's Connect
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Start Your Project
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Tell us about your vision and we'll create something extraordinary together.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Glass Card */}
          <div className="glass rounded-3xl p-10 backdrop-blur-xl max-w-2xl mx-auto border border-white/10 shadow-2xl shadow-purple-500/10">
            {/* Success State */}
            {submitSuccess ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-neutral-300 text-lg">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <div className="mt-6 text-sm text-neutral-400">
                  ✨ Your project journey begins now
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-white/90">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 transition-all duration-300 hover:bg-white/10"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-white/90">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 transition-all duration-300 hover:bg-white/10"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-sm font-semibold text-white/90">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 transition-all duration-300 hover:bg-white/10 cursor-pointer"
                  >
                    <option value="">Choose your project type</option>
                    <option value="web-app">🌐 Web Application</option>
                    <option value="mobile-app">📱 Mobile Application</option>
                    <option value="ecommerce">🛒 E-commerce Platform</option>
                    <option value="erp-crm">🏢 ERP/CRM System</option>
                    <option value="ai-ml">🤖 AI/ML Solution</option>
                    <option value="cloud-migration">☁️ Cloud Migration</option>
                    <option value="consulting">💡 IT Consulting</option>
                    <option value="other">✨ Other</option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-white/90">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 transition-all duration-300 hover:bg-white/10 resize-none"
                    placeholder="Describe your project vision, goals, and what you'd like to achieve..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-lg">Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg">🚀 Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </button>

                {/* Form Footer */}
                <div className="text-center pt-4">
                  <p className="text-sm text-neutral-400">
                    We'll respond within 24 hours • 🔒 Your information is secure
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-sm opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-sm opacity-60"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact
