import { Link } from 'react-router-dom'

const columns = [
  {
    heading: 'Product',
    links: [
      { label: 'Sourcing', to: '/product' },
      { label: 'Underwriting', to: '/product' },
      { label: 'Portfolio monitoring', to: '/product' },
      { label: 'Security', to: '/security' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/company' },
      { label: 'News', to: '/news' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M16 5L26 11V21L16 27L6 21V11L16 5Z" stroke="#2B4BF2" strokeWidth="2" />
            </svg>
            <span className="font-serif text-lg">capsa</span>
          </Link>
          <p className="text-muted text-sm max-w-xs leading-relaxed">
            The operating layer for private capital — sourcing, underwriting, and monitoring in one system.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-sm text-paper mb-4">{col.heading}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-muted hover:text-paper transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} Capsa. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/company" className="hover:text-paper">Privacy</Link>
            <Link to="/company" className="hover:text-paper">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
