'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HERO, SITE } from '@/lib/content'

// Animated decorative leaf SVG
function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" className={className} fill="currentColor" aria-hidden>
      <path d="M40 0C20 20 0 40 10 70C20 100 40 120 40 120C40 120 60 100 70 70C80 40 60 20 40 0Z" />
      <path d="M40 10C40 10 40 110 40 118" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax transforms
  const bgY      = useTransform(scrollY, [0, 600], [0, 180])
  const textY    = useTransform(scrollY, [0, 600], [0, -60])
  const opacity  = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* ── Parallax Background ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 scale-110"
      >
        {/* Replace src with your real image — keeping gradient as fallback */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${HERO.fallbackGradient}`}
          style={{
            backgroundImage: `url(${HERO.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Colour overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* ── Decorative elements ── */}
      <div className="absolute top-32 left-8 lg:left-24 opacity-20 pointer-events-none">
        <LeafDecoration className="w-12 h-20 text-forest-400 rotate-12 animate-float" />
      </div>
      <div className="absolute bottom-40 right-8 lg:right-24 opacity-15 pointer-events-none" style={{ animationDelay: '2s' }}>
        <LeafDecoration className="w-16 h-24 text-earth-400 -rotate-20 animate-float" />
      </div>

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Accent tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-accent text-earth-400 text-2xl tracking-wide">
            {SITE.tagline}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-cream leading-none mb-8"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          {HERO.headline.split('\n').map((line, i) => (
            <span key={i} className="block">
              {i === 1
                ? <em className="not-italic text-earth-400">{line}</em>
                : line
              }
            </span>
          ))}
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-body text-cream/75 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={HERO.ctaAnchor}
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10">{HERO.cta}</span>
            <span className="absolute inset-0 bg-earth-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#about"
            className="text-cream/70 hover:text-cream text-sm font-bold tracking-widest uppercase border-b border-cream/30 hover:border-cream pb-0.5 transition-all duration-300"
          >
            Our Story ↓
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-cream/10 pt-8"
        >
          {[
            { n: '100%', l: 'Natural' },
            { n: '30+',  l: 'Years' },
            { n: '4',    l: 'Products' },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl font-black text-earth-400">{n}</div>
              <div className="font-body text-xs text-cream/50 tracking-widest uppercase mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-cream/40">
          <span className="text-[10px] tracking-[0.3em] uppercase font-body">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-cream"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
    </section>
  )
}
