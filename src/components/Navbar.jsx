import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/booking', label: 'Book a Puja' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-maroon-700 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2 text-amber-100 hover:text-gold-400 transition-colors">
          <span className="text-2xl leading-none">ॐ</span>
          <div>
            <p className="text-base font-bold tracking-wide leading-tight">Pundit Alabhaya Tiwari</p>
            <p className="text-xs text-amber-300 tracking-widest uppercase">Hindu Puja Services · London</p>
          </div>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors ${
                    isActive ? 'text-gold-400 border-b-2 border-gold-400 pb-0.5' : 'text-amber-100 hover:text-gold-400'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-amber-100 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-maroon-800 px-4 pb-4 space-y-3">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm font-semibold tracking-wide border-b border-maroon-600 ${
                    isActive ? 'text-gold-400' : 'text-amber-100 hover:text-gold-400'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
