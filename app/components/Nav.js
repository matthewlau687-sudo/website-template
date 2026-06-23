'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const isStudio = pathname.startsWith('/studio')
  if (isStudio) return null

  const isHome = pathname === '/'
  const dark = isHome

  return (
    <nav className={`border-b ${dark ? 'bg-blue-950 border-blue-800' : 'bg-white border-zinc-200'}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className={`font-semibold tracking-tight ${dark ? 'text-white' : 'text-zinc-900'}`}>
          Global Point Partners
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                dark
                  ? pathname === href
                    ? 'text-white font-medium'
                    : 'text-blue-200 hover:text-white'
                  : pathname === href
                  ? 'text-zinc-900 font-medium'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
