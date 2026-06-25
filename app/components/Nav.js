'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Portfolio' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/about', label: 'About Me' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isStudio = pathname.startsWith('/studio')
  if (isStudio) return null

  const isHome = pathname === '/'
  const dark = isHome

  return (
    <nav className={`border-b ${dark ? 'bg-blue-950 border-blue-800' : 'bg-white border-zinc-200'}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          href="/"
          className={`font-semibold tracking-tight ${dark ? 'text-white' : 'text-zinc-900'}`}
          onClick={() => setOpen(false)}
        >
          Global Point Partners
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                dark
                  ? pathname === href
                    ? 'text-white font-medium'
                    : 'text-zinc-200 hover:text-white'
                  : pathname === href
                  ? 'text-zinc-900 font-medium'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className={`md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 ${dark ? 'text-white' : 'text-zinc-900'}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 transition-all duration-200 ${dark ? 'bg-white' : 'bg-zinc-800'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${dark ? 'bg-white' : 'bg-zinc-800'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${dark ? 'bg-white' : 'bg-zinc-800'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden border-t ${dark ? 'bg-blue-950 border-blue-800' : 'bg-white border-zinc-100'}`}>
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  dark
                    ? pathname === href
                      ? 'text-white'
                      : 'text-zinc-300 hover:text-white'
                    : pathname === href
                    ? 'text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
