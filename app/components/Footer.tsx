import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Webspherx</h3>
            <p className="text-gray-400">Understand AI & the Future of Tech — without hype or noise.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-light mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products/ai-tools-pack" className="hover:text-neon">AI Tools Pack</Link></li>
              <li><Link href="/products/prompt-packs" className="hover:text-neon">Prompt Packs</Link></li>
              <li><Link href="/products/disruption-report" className="hover:text-neon">Disruption Report</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-light mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blog" className="hover:text-neon">Blog</Link></li>
              <li><Link href="/about" className="hover:text-neon">About</Link></li>
              <li><Link href="/contact" className="hover:text-neon">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-light mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/legal/privacy" className="hover:text-neon">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-neon">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Webspherx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}