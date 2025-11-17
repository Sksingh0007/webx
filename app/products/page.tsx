import Link from 'next/link'

const products = [
  {
    id: 'ai-tools-pack',
    title: 'AI Tools Pack',
    description: 'Curated collection of 50+ AI tools for productivity, creativity, and business growth.',
    price: '$29',
    features: ['50+ AI Tools', 'Regular Updates', 'Use Case Examples', 'Lifetime Access']
  },
  {
    id: 'prompt-packs',
    title: 'Prompt Packs',
    description: 'Professional prompt libraries for ChatGPT, Claude, and other AI models.',
    price: '$19',
    features: ['200+ Prompts', 'Multiple Categories', 'Copy-Paste Ready', 'Bonus Templates']
  },
  {
    id: 'disruption-report',
    title: 'Disruption Report',
    description: 'Monthly analysis of tech disruptions and their business implications.',
    price: '$39/mo',
    features: ['Monthly Reports', 'Industry Analysis', 'Trend Predictions', 'Executive Summary']
  },
  {
    id: 'notion-templates',
    title: 'Notion Templates',
    description: 'AI-powered Notion templates for productivity and project management.',
    price: '$15',
    features: ['10+ Templates', 'AI Integration', 'Setup Guides', 'Video Tutorials']
  },
  {
    id: 'mini-course',
    title: 'AI Fundamentals Course',
    description: 'Complete beginner course on AI concepts, tools, and practical applications.',
    price: '$99',
    features: ['5 Hours Content', 'Practical Exercises', 'Certificate', 'Community Access']
  },
  {
    id: 'newsletter',
    title: 'Premium Newsletter',
    description: 'Weekly deep-dive analysis of AI and tech developments.',
    price: '$9/mo',
    features: ['Weekly Issues', 'Exclusive Content', 'Early Access', 'No Ads']
  }
]

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
          Digital <span className="gradient-text">Products</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Practical tools, templates, and resources to help you navigate the AI and tech landscape
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-800 rounded-lg p-6 hover:border-neon/50 transition-all">
            <h3 className="text-2xl font-semibold text-light mb-3">{product.title}</h3>
            <p className="text-gray-400 mb-4">{product.description}</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-neon">{product.price}</span>
            </div>

            <ul className="space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="text-neon mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <Link 
                href={`/products/${product.id}`}
                className="block w-full bg-neon text-dark text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Learn More
              </Link>
              <button className="w-full border border-neon text-neon px-6 py-3 rounded-lg font-semibold hover:bg-neon hover:text-dark transition-all">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}