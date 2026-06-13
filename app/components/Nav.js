'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Portfolio' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/about', label: 'About Me' },
]

export default function Nav() {
  const pathname = usePathname()
  const isStudio = pathname.startsWith('/studio')
  if (isStudio) return null

  return (
    <nav className="border-b border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-semibold text-zinc-900 tracking-tight">
          Your Brand
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
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
