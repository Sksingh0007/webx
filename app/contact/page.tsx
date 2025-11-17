'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-gray-400">
          Have questions about AI, tech trends, or our products? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-light focus:border-neon focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-light focus:border-neon focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-light mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-light focus:border-neon focus:outline-none"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="products">Product Question</option>
                <option value="partnership">Partnership</option>
                <option value="media">Media Inquiry</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-light focus:border-neon focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-neon text-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center">
                Thanks for your message! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-light mb-4">Quick Response</h3>
            <p className="text-gray-400 mb-4">
              We typically respond to inquiries within 24 hours during business days.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@webspherx.com</p>
              <p>🕒 Mon-Fri, 9AM-6PM EST</p>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-light mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest AI and tech insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">YouTube</a>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-light mb-4">Media Inquiries</h3>
            <p className="text-gray-400">
              For press inquiries, interviews, or collaboration opportunities, 
              please use the contact form with "Media Inquiry" as the subject.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}