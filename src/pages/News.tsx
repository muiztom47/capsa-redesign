const posts = [
  { date: 'This year', title: 'Capsa raises $18M Series A to build the operating layer for private capital' },
  { date: 'Earlier this year', title: 'Introducing portfolio monitoring, generally available' },
  { date: 'Last year', title: 'Capsa reaches SOC 2 Type II compliance' },
]

export default function News() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="text-sm text-accent mb-3">News</p>
      <h1 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl">Updates from Capsa</h1>

      <div className="mt-16 max-w-2xl divide-y divide-line">
        {posts.map((post) => (
          <div key={post.title} className="py-8">
            <p className="text-sm text-muted mb-2">{post.date}</p>
            <h2 className="font-serif text-2xl leading-snug">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
