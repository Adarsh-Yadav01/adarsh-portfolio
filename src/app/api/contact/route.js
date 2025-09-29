
"use client";

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/data/personal-info'
import { socialLinks } from '@/data/social-links'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }

  return (
    <div className="relative py-12 sm:py-16 md:py-20 bg-background">
      {/* Optional Background Video */}
      {personalInfo.introVideo && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            src={personalInfo.introVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-10"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground focus:ring-primary focus:border-primary focus:ring-2 transition-colors"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground focus:ring-primary focus:border-primary focus:ring-2 transition-colors"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground focus:ring-primary focus:border-primary focus:ring-2 transition-colors"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground focus:ring-primary focus:border-primary focus:ring-2 transition-colors"
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 sm:py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label={isSubmitting ? 'Submitting form' : 'Send message'}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fade-in">
                  <span className="text-green-800 mr-2">✅</span>
                  <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center animate-fade-in">
                  <span className="text-red-800 mr-2">❌</span>
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <div className="bg-muted rounded-lg p-6 sm:p-8 shadow">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="w-6 h-6 text-primary mr-3">📧</span>
                  <span className="text-muted-foreground">{personalInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 text-primary mr-3">📍</span>
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Visit ${link.name} profile`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">Response Time</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to reach out via social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
