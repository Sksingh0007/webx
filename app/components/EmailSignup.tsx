'use client'

import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('subscribing')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-dark border border-gray-700 rounded-lg text-light focus:border-neon focus:outline-none text-sm sm:text-base"
      />
      <button
        type="submit"
        disabled={status === 'subscribing'}
        className="bg-neon text-dark px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 text-sm sm:text-base whitespace-nowrap"
      >
        {status === 'subscribing' ? 'Subscribing...' : 'Get Free Report'}
      </button>
      {status === 'success' && (
        <p className="text-green-400 text-xs sm:text-sm mt-2 text-center">Thanks! Check your email for the download link.</p>
      )}
    </form>
  )
}