'use client'

import { FOOTER } from '@/lib/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream py-12 md:py-16">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-cream/20">
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">Roots & Harvest</h3>
            <p className="text-cream/80 max-w-md">{FOOTER.tagline}</p>
          </div>

          <nav className="flex flex-col space-y-4">
            {FOOTER.links.map((link) => (
              <a
                key={link.label}
                href={link.anchor}
                className="text-cream/80 hover:text-earth-500 transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="text-center text-cream/60 text-sm">
          <p>{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
