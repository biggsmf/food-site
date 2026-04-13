import { Menu, X } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-earth-500/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl md:text-3xl font-display font-bold text-earth-500">
            Roots
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-body hover:text-earth-500 transition">
              About
            </a>
            <a href="#products" className="text-sm font-body hover:text-earth-500 transition">
              Products
            </a>
            <a href="#videos" className="text-sm font-body hover:text-earth-500 transition">
              Videos
            </a>
            <a href="#contact" className="text-sm font-body hover:text-earth-500 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}
