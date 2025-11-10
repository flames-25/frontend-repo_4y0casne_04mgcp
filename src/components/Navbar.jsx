import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#home" className="font-semibold tracking-tight text-gray-900">
          <span className="text-blue-600">/</span>portfolio
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
