export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
          About <span className="gradient-text">Webspherx</span>
        </h1>
        <p className="text-xl text-gray-400">
          Understanding AI & the Future of Tech — without hype or noise
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="bg-gradient-to-r from-neon/10 to-purple/10 border border-neon/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-light mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            In a world flooded with AI hype and tech noise, Webspherx cuts through the clutter to deliver 
            clear, factual analysis of artificial intelligence and emerging technologies. We believe in 
            making complex tech accessible to everyone — from curious beginners to seasoned professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-light mb-4">What We Do</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Analyze AI developments and their real-world impact</li>
              <li>• Break down tech disruptions in plain language</li>
              <li>• Create practical digital products and tools</li>
              <li>• Provide news without sensationalism</li>
            </ul>
          </div>
          
          <div className="border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-light mb-4">Who We Serve</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Students learning about AI</li>
              <li>• Tech professionals staying current</li>
              <li>• Founders and creators</li>
              <li>• AI-curious beginners</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-light mb-6">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-light mb-2">Clear & Factual</h3>
              <p className="text-gray-400 text-sm">No hype, no noise. Just clear explanations of complex topics.</p>
            </div>
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="font-semibold text-light mb-2">Real-World Focus</h3>
              <p className="text-gray-400 text-sm">We focus on practical applications and real business impact.</p>
            </div>
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-light mb-2">Future-Oriented</h3>
              <p className="text-gray-400 text-sm">Helping you prepare for what's coming next in tech.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark border border-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-light mb-4">Join Our Community</h2>
          <p className="text-gray-400 mb-6">
            Get weekly insights on AI and tech developments. No spam, just valuable content.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 bg-dark border border-gray-700 rounded-l-lg text-light focus:border-neon focus:outline-none"
            />
            <button className="bg-neon text-dark px-6 py-3 rounded-r-lg font-semibold hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}