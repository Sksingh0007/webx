import Link from 'next/link'
import EmailSignup from './components/EmailSignup'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">AI + FutureTech</span>
            <br />
            <span className="text-light">Without the Hype</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto px-4">
            Clear explanations, real-world examples, and practical guidance on AI and emerging technologies. 
            No noise, just insights that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="/products" className="bg-neon text-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all neon-glow">
              Explore Products
            </Link>
            <Link href="/blog" className="border border-neon text-neon px-8 py-3 rounded-lg font-semibold hover:bg-neon hover:text-dark transition-all">
              Read Latest News
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-4 sm:p-6 border border-gray-800 rounded-lg">
            <div className="text-3xl sm:text-4xl mb-4">🤖</div>
            <h3 className="text-lg sm:text-xl font-semibold text-light mb-2">AI Analysis</h3>
            <p className="text-sm sm:text-base text-gray-400">Deep dives into AI developments, tools, and their real-world impact</p>
          </div>
          <div className="text-center p-4 sm:p-6 border border-gray-800 rounded-lg">
            <div className="text-3xl sm:text-4xl mb-4">🚀</div>
            <h3 className="text-lg sm:text-xl font-semibold text-light mb-2">Tech Disruption</h3>
            <p className="text-sm sm:text-base text-gray-400">Breaking down how emerging technologies reshape industries</p>
          </div>
          <div className="text-center p-4 sm:p-6 border border-gray-800 rounded-lg sm:col-span-2 lg:col-span-1">
            <div className="text-3xl sm:text-4xl mb-4">📦</div>
            <h3 className="text-lg sm:text-xl font-semibold text-light mb-2">Digital Products</h3>
            <p className="text-sm sm:text-base text-gray-400">Practical tools, templates, and resources for your tech journey</p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-gradient-to-r from-neon/10 to-purple/10 border border-neon/20 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-light mb-4">
            AI + FutureTech Briefing: 7 Trends You Must Know in 2025
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6">
            Get our comprehensive analysis of the most important tech trends shaping 2025. 
            Free download, no spam.
          </p>
          <EmailSignup />
        </div>
      </section>

      {/* Digital Products Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-light mb-6 sm:mb-8 text-center">Digital Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-neon/50 transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-light mb-2">AI Tools Pack</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">50+ curated AI tools for productivity and growth</p>
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-neon">$29</span>
              <Link href="/products/ai-tools-pack" className="text-sm sm:text-base text-neon hover:underline">Learn More →</Link>
            </div>
          </div>
          <div className="border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-neon/50 transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-light mb-2">Prompt Packs</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">200+ professional prompts for AI models</p>
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-neon">$19</span>
              <Link href="/products/prompt-packs" className="text-sm sm:text-base text-neon hover:underline">Learn More →</Link>
            </div>
          </div>
          <div className="border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-neon/50 transition-all sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-light mb-2">Disruption Report</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">Monthly tech disruption analysis</p>
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-neon">$39/mo</span>
              <Link href="/products/disruption-report" className="text-sm sm:text-base text-neon hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/products" className="text-neon hover:underline text-lg">
            View All Products →
          </Link>
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-light mb-6 sm:mb-8 text-center">Latest Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((i) => (
            <article key={i} className="border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-neon/50 transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold text-light mb-2">
                AI Article Title {i}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Brief description of the article content and key insights...
              </p>
              <Link href={`/blog/article-${i}`} className="text-sm sm:text-base text-neon hover:underline">
                Read More →
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="text-neon hover:underline text-lg">
            View All Articles →
          </Link>
        </div>
      </section>
    </div>
  )
}