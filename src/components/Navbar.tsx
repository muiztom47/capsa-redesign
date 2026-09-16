import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/product', label: 'Product' },
  { to: '/security', label: 'Security' },
  { to: '/company', label: 'Company' },
  { to: '/news', label: 'News' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-line">
      <div className="bg-accent text-paper text-sm">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-center gap-2 text-center">
          <span>Capsa closes $18M Series A to build the operating layer for private capital.</span>
          <Link to="/news" className="underline underline-offset-2 hover:opacity-80 whitespace-nowrap">
            Read the announcement
          </Link>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <path d="M16 5L26 11V21L16 27L6 21V11L16 5Z" stroke="#2B4BF2" strokeWidth="2" />
          </svg>
          <span className="font-serif text-xl tracking-tight">capsa</span>
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[15px] transition-colors ${
                  isActive ? 'text-paper' : 'text-muted hover:text-paper'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-sm bg-paper text-ink px-5 py-2.5 text-[15px] font-medium hover:bg-white transition-colors"
          >
            Book a demo
          </Link>
        </div>

        <button
          className="lg:hidden text-paper"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-base text-muted hover:text-paper"
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded-sm bg-paper text-ink px-5 py-3 text-[15px] font-medium mt-2"
          >
            Book a demo
          </Link>
        </div>
      )}
    </header>
  )
}
