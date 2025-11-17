'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-dark border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Webspherx
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-light hover:text-neon transition-colors">Home</Link>
            <Link href="/products" className="text-light hover:text-neon transition-colors">Products</Link>
            <Link href="/blog" className="text-light hover:text-neon transition-colors">Blog</Link>
            <Link href="/about" className="text-light hover:text-neon transition-colors">About</Link>
            <Link href="/contact" className="text-light hover:text-neon transition-colors">Contact</Link>
          </div>

          <button 
            className="md:hidden text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/" className="block text-light hover:text-neon">Home</Link>
            <Link href="/products" className="block text-light hover:text-neon">Products</Link>
            <Link href="/blog" className="block text-light hover:text-neon">Blog</Link>
            <Link href="/about" className="block text-light hover:text-neon">About</Link>
            <Link href="/contact" className="block text-light hover:text-neon">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}