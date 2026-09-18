import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { id: 'platform', label: 'Product' },
  { id: 'security', label: 'Security' },
  { id: 'stories', label: 'Client Stories' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
]

const IconArrowRight = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M14 5l7 7-7 7" />
  </svg>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY

    // Above the hero, nothing is active.
    if (scrollY < 100) {
      setActiveId('')
      return
    }

    // A section is "active" once its top crosses this line.
    // 140px gives a comfortable margin below the sticky navbar.
    const activationLine = scrollY + 140

    // Find the last section whose top is above the activation line.
    let current = ''
    for (const l of links) {
      const el = document.getElementById(l.id)
      if (!el) continue
      if (el.offsetTop <= activationLine) {
        current = l.id
      }
    }

    setActiveId(current)
  }

  // Run once on mount so the state matches wherever the user lands.
  handleScroll()

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
  }
}, [])

  const handleAnchorClick = (id) => (e) => {
    setOpen(false)
    if (window.location.pathname === '/') {
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', `/#${id}`)
      }
    }
  }

  return (
    <header
  className={`sticky top-0 z-40 transition-all duration-500 ${
    scrolled
      ? 'bg-[#05050F] backdrop-blur-xl border-b border-white/[0.08] shadow-[0_1px_0_rgba(255,255,255,0.04)]'
      : 'bg-[#05050F] border-b border-white/[0.06]'
  }`}
>
      <nav className="mx-auto max-w-[100rem] px-6 md:px-12 h-[76px] flex items-center justify-between">

    {/* Logo — restored to original image lockup */}
<Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
  <img
    src="/images/capsalogo.svg"
    alt="Capsa"
    className="h-7 w-auto"
    draggable={false}
  />
</Link>

        {/* Links — active state gets underline + colour, not just colour */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const isActive = activeId === l.id
            return (
            <Link
  key={l.id}
  to={`/#${l.id}`}
  onClick={handleAnchorClick(l.id)}
  className="group relative py-2 text-[13.5px] font-medium transition-colors duration-300"
  style={{
    color: '#FFFFFF',
    opacity: isActive ? 1 : 0.75,
    letterSpacing: '0.02em',
  }}
>
  {l.label}
  <span
    className={`absolute left-0 -bottom-[1px] h-[1.5px] bg-[#0508B3] transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`}
  ></span>
</Link>
            )
          })}
        </div>

        {/* CTA — matches hero button: rounded, signal blue, arrow, hover lift */}
        <div className="hidden lg:block">
      <a
  href="https://capsa.ai/contact"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-lg bg-[#0508B3] hover:bg-[#2a3ad4] text-white px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-300 shadow-[0_4px_16px_-6px_rgba(5,8,179,0.5)] hover:shadow-[0_6px_20px_-6px_rgba(5,8,179,0.65)]"
>
  Book a demo
  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#05050F] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => {
            const isActive = activeId === l.id
            return (
              <Link
                key={l.id}
                to={`/#${l.id}`}
                onClick={handleAnchorClick(l.id)}
                className="text-base font-medium transition-colors duration-300"
                style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.55)', letterSpacing: '0.02em' }}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            to="/#contact"
            onClick={handleAnchorClick('contact')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0508B3] text-white px-5 py-3 text-[14.5px] font-semibold mt-2"
          >
            Book a demo <IconArrowRight />
          </Link>
        </div>
      )}
    </header>
  )
}