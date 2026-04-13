'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Heart, Share2, MessageCircle } from 'lucide-react'
import { ENGAGEMENT } from '@/lib/content'

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

// Facebook SVG icon
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

// Floating heart particle
function HeartParticle({ id }: { id: number }) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      animate={{
        opacity: 0,
        y: -80,
        x: (Math.random() - 0.5) * 60,
        scale: 0.5,
      }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute pointer-events-none text-terracotta-400"
      style={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}
    >
      ♥
    </motion.div>
  )
}

export default function EngagementSection() {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(47) // Seed number; hook to Supabase for real data
  const [hearts, setHearts] = useState<number[]>([])
  const [shared, setShared] = useState<string | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleLike = () => {
    if (!liked) {
      setLiked(true)
      setLikeCount(n => n + 1)
      // Spawn heart particles
      const id = Date.now()
      setHearts(prev => [...prev, id])
      setTimeout(() => setHearts(prev => prev.filter(h => h !== id)), 1100)
    }
  }

  const shareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(ENGAGEMENT.whatsappMsg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setShared('whatsapp')
    setTimeout(() => setShared(null), 2500)
  }

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(ENGAGEMENT.shareUrl)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setShared('facebook')
    setTimeout(() => setShared(null), 2500)
  }

  const shareNative = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Roots & Harvest',
        text:  ENGAGEMENT.shareText,
        url:   ENGAGEMENT.shareUrl,
      })
    }
  }

  return (
    <section
      id="engage"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3d7535 0%, #2e5c28 50%, #173016 100%)' }}
    >
      {/* Top and bottom texture edges */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-cream"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-cream"
        style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-8">
        {/* Leaf deco */}
        <div className="absolute top-16 left-8 opacity-10 pointer-events-none">
          <svg viewBox="0 0 80 120" className="w-20 h-32 text-forest-200 fill-current rotate-12">
            <path d="M40 0C20 20 0 40 10 70C20 100 40 120 40 120C40 120 60 100 70 70C80 40 60 20 40 0Z" />
          </svg>
        </div>
        <div className="absolute bottom-16 right-8 opacity-10 pointer-events-none">
          <svg viewBox="0 0 80 120" className="w-20 h-32 text-forest-200 fill-current -rotate-12">
            <path d="M40 0C20 20 0 40 10 70C20 100 40 120 40 120C40 120 60 100 70 70C80 40 60 20 40 0Z" />
          </svg>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-cream leading-tight mb-4"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          {ENGAGEMENT.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-cream/60 text-lg mb-16 font-light max-w-xl mx-auto"
        >
          {ENGAGEMENT.subtext}
        </motion.p>

        {/* Like + Share cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >

          {/* Like button */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 flex flex-col items-center gap-4 min-w-[200px]">
            <div className="relative">
              {/* Heart particles */}
              <AnimatePresence>
                {hearts.map(id => <HeartParticle key={id} id={id} />)}
              </AnimatePresence>

              <motion.button
                onClick={handleLike}
                whileTap={{ scale: 0.85 }}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  liked
                    ? 'bg-terracotta-500 shadow-lg shadow-terracotta-900/40'
                    : 'bg-white/10 border-2 border-white/30 hover:bg-white/20'
                }`}
                aria-label={liked ? 'Liked!' : 'Like this page'}
              >
                <Heart
                  className={`w-9 h-9 transition-all ${liked ? 'text-cream fill-cream' : 'text-cream/70'}`}
                />
              </motion.button>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-cream">{likeCount}</p>
              <p className="font-body text-xs text-cream/50 tracking-widest uppercase mt-1">
                {liked ? 'You liked this!' : 'Love this brand'}
              </p>
            </div>
          </div>

          {/* Share buttons */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 flex flex-col items-center gap-6 min-w-[240px]">
            <div className="flex items-center gap-2 text-cream/60">
              <Share2 className="w-4 h-4" />
              <span className="font-body text-xs tracking-widest uppercase font-bold">Share with friends</span>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {/* WhatsApp */}
              <button
                onClick={shareWhatsApp}
                className={`flex items-center gap-3 px-5 py-3.5 font-body text-sm font-bold tracking-wide w-full transition-all duration-300 ${
                  shared === 'whatsapp'
                    ? 'bg-[#25D366] text-white'
                    : 'bg-[#25D366]/20 text-[#7CEB9E] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white'
                }`}
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                {shared === 'whatsapp' ? 'Shared! ✓' : 'Share on WhatsApp'}
              </button>

              {/* Facebook */}
              <button
                onClick={shareFacebook}
                className={`flex items-center gap-3 px-5 py-3.5 font-body text-sm font-bold tracking-wide w-full transition-all duration-300 ${
                  shared === 'facebook'
                    ? 'bg-[#1877F2] text-white'
                    : 'bg-[#1877F2]/20 text-[#7FB3FF] border border-[#1877F2]/40 hover:bg-[#1877F2] hover:text-white'
                }`}
              >
                <FacebookIcon className="w-5 h-5 flex-shrink-0" />
                {shared === 'facebook' ? 'Shared! ✓' : 'Share on Facebook'}
              </button>

              {/* Native share (mobile) */}
              {'share' in navigator && (
                <button
                  onClick={shareNative}
                  className="flex items-center gap-3 px-5 py-3.5 font-body text-sm font-bold tracking-wide w-full bg-white/10 text-cream border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  More options…
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <p className="font-accent text-2xl lg:text-3xl text-sand-300/70">
            "Best peanuts I've ever tasted — and I grew up in Antigua."
          </p>
          <p className="font-body text-xs text-cream/30 tracking-widest uppercase mt-3">
            — Local customer
          </p>
        </motion.div>
      </div>
    </section>
  )
}
