import Link from 'next/link'

const articles = [
  {
    id: 'ai-revolution-2025',
    title: 'The AI Revolution: What 2025 Holds for Businesses',
    excerpt: 'Analyzing the key AI trends that will reshape industries in 2025, from autonomous agents to multimodal AI systems.',
    date: '2024-01-15',
    category: 'AI Analysis',
    readTime: '8 min read'
  },
  {
    id: 'chatgpt-vs-claude',
    title: 'ChatGPT vs Claude vs Gemini: The Ultimate Comparison',
    excerpt: 'A comprehensive breakdown of the leading AI models, their strengths, weaknesses, and best use cases.',
    date: '2024-01-12',
    category: 'Tool Reviews',
    readTime: '12 min read'
  },
  {
    id: 'quantum-computing-breakthrough',
    title: 'Quantum Computing Breakthrough: What It Means for Tech',
    excerpt: 'Google\'s latest quantum chip achievement and its implications for cryptography, AI, and computing.',
    date: '2024-01-10',
    category: 'Tech News',
    readTime: '6 min read'
  },
  {
    id: 'ai-automation-jobs',
    title: 'AI Automation: Which Jobs Are Safe and Which Aren\'t',
    excerpt: 'Data-driven analysis of job displacement and creation in the age of AI automation.',
    date: '2024-01-08',
    category: 'Future of Work',
    readTime: '10 min read'
  },
  {
    id: 'startup-ai-tools',
    title: '15 AI Tools Every Startup Should Use in 2024',
    excerpt: 'Essential AI tools for marketing, development, design, and operations that can give startups a competitive edge.',
    date: '2024-01-05',
    category: 'Startup Tools',
    readTime: '7 min read'
  },
  {
    id: 'deepfake-detection',
    title: 'Deepfakes in 2024: Detection Tools and Ethical Concerns',
    excerpt: 'How to identify deepfakes, the latest detection technologies, and the ethical implications.',
    date: '2024-01-03',
    category: 'AI Ethics',
    readTime: '9 min read'
  },
  {
    id: 'ai-coding-assistants',
    title: 'GitHub Copilot vs Cursor vs Replit: AI Coding Showdown',
    excerpt: 'Comparing the top AI coding assistants and their impact on developer productivity.',
    date: '2024-01-01',
    category: 'Developer Tools',
    readTime: '11 min read'
  },
  {
    id: 'tech-predictions-2025',
    title: '10 Bold Tech Predictions for 2025',
    excerpt: 'Our data-backed predictions for the biggest tech trends and disruptions coming in 2025.',
    date: '2023-12-28',
    category: 'Predictions',
    readTime: '13 min read'
  },
  {
    id: 'ai-content-creation',
    title: 'AI Content Creation: Tools, Ethics, and Best Practices',
    excerpt: 'A comprehensive guide to using AI for content creation while maintaining quality and authenticity.',
    date: '2023-12-25',
    category: 'Content Strategy',
    readTime: '8 min read'
  },
  {
    id: 'blockchain-ai-convergence',
    title: 'When Blockchain Meets AI: The Next Tech Frontier',
    excerpt: 'Exploring the intersection of blockchain and AI technologies and their combined potential.',
    date: '2023-12-22',
    category: 'Emerging Tech',
    readTime: '10 min read'
  }
]

const categories = ['All', 'AI Analysis', 'Tech News', 'Tool Reviews', 'Future of Work', 'Startup Tools']

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
          Tech <span className="gradient-text">Insights</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Clear analysis of AI developments, tech disruptions, and digital trends that matter
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:border-neon hover:text-neon transition-all"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="border border-gray-800 rounded-lg p-6 hover:border-neon/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-neon bg-neon/10 px-2 py-1 rounded">
                {article.category}
              </span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>
            
            <h3 className="text-xl font-semibold text-light mb-3 hover:text-neon transition-colors">
              <Link href={`/blog/${article.id}`}>
                {article.title}
              </Link>
            </h3>
            
            <p className="text-gray-400 mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{article.date}</span>
              <Link 
                href={`/blog/${article.id}`}
                className="text-neon hover:underline text-sm"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="border border-neon text-neon px-8 py-3 rounded-lg font-semibold hover:bg-neon hover:text-dark transition-all">
          Load More Articles
        </button>
      </div>
    </div>
  )
}