'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { PRODUCTS, CONTACT } from '@/lib/content'

function ProductImagePlaceholder({ name, className }: { name: string; className?: string }) {
  // Unique gradient per product
  const gradients: Record<string, string> = {
    peanuts:     'from-sand-200 via-earth-100 to-sand-300',
    'coconut-oil': 'from-earth-50 via-sand-100 to-forest-100',
    guava:       'from-terracotta-50 via-sand-100 to-earth-100',
    vegetables:  'from-forest-100 via-forest-50 to-sand-100',
  }
  const icons: Record<string, string> = {
    peanuts:     '🥜',
    'coconut-oil': '🥥',
    guava:       '🍈',
    vegetables:  '🥦',
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[name] || 'from-earth-100 to-sand-200'}`} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-6xl mb-3" role="img" aria-label={name}>{icons[name] || '🌿'}</span>
        {/* Replace with real <Image /> */}
        <p className="text-xs tracking-widest uppercase font-body font-bold text-earth-400/50">Photo Coming Soon</p>
      </div>
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hi! I'd like to order: ${product.name}`
  )}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`product-card group ${product.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${product.featured ? 'h-72 lg:h-80' : 'h-56'}`}>
        <ProductImagePlaceholder name={product.id} className="w-full h-full" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-earth-500 text-cream text-xs font-bold tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 bg-white">
        <p className="font-body text-xs text-earth-500 font-bold tracking-widest uppercase mb-2">
          {product.subtitle}
        </p>
        <h3 className="font-display text-2xl font-bold text-ink mb-3 group-hover:text-earth-600 transition-colors">
          {product.name}
        </h3>
        <p className="font-body text-ink/65 text-sm leading-relaxed mb-6 font-light">
          {product.description}
        </p>

        {/* Action row */}
        <div className="flex items-center gap-4">
          {product.whatsapp && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs py-3 px-5 flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </a>
          )}
          <button className="text-ink/50 hover:text-earth-500 transition-colors ml-auto">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="products" className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fef9f0 0%, #f9edda 50%, #fef9f0 100%)' }}
    >
      {/* Background watermark */}
      <div
        className="absolute top-0 right-0 font-display font-black leading-none pointer-events-none select-none text-earth-100 -translate-y-8 translate-x-8"
        aria-hidden
        style={{ fontSize: 'clamp(8rem, 20vw, 20rem)' }}
      >
        Roots
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-badge mb-4 block w-fit"
            >
              What We Grow
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-ink leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              From Field<br />
              <em className="not-italic text-earth-500">to Your Table</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 text-ink/50"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-body text-sm tracking-wide">Order direct via WhatsApp</span>
          </motion.div>
        </div>

        {/* Products grid — featured peanuts spans 2 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured product — full width on first slot */}
          <div className="md:col-span-2 lg:col-span-1">
            <ProductCard product={PRODUCTS[0]} index={0} />
          </div>
          {/* Rest */}
          {PRODUCTS.slice(1).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-ink text-cream p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
              Can't find what you need?
            </h3>
            <p className="font-body text-cream/60 font-light">
              Message us directly — we take custom orders and bulk requests.
            </p>
          </div>
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappGreeting)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-shrink-0"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
