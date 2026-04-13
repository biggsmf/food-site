'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MapPin, Mail, CheckCircle } from 'lucide-react'
import { CONTACT } from '@/lib/content'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function ContactSection() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappGreeting)}`

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name || !message) return
    // Build a WhatsApp message from form data
    const wa = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Hello! My name is ${name}.\n\n${message}`
    )}`
    window.open(wa, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setName('')
    setMessage('')
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 bg-cream overflow-hidden"
    >
      {/* Watermark */}
      <div
        className="absolute bottom-0 right-0 font-display font-black leading-none pointer-events-none select-none text-earth-50 translate-x-12 translate-y-8"
        aria-hidden
        style={{ fontSize: 'clamp(8rem, 20vw, 20rem)' }}
      >
        Talk
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="section-badge mb-4 block w-fit"
          >
            {CONTACT.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            {CONTACT.heading.split('\n').map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em className="not-italic text-earth-500">{line}</em> : line}
              </span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-ink/60 text-lg max-w-xl font-light"
          >
            {CONTACT.subtext}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Left: Info + WhatsApp CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* WhatsApp primary CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp group w-full flex justify-center text-base py-5 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#1ebe57] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                <WhatsAppIcon className="w-6 h-6" />
                Chat on WhatsApp
              </span>
            </a>

            {/* Info tiles */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-5 border border-earth-100 bg-white">
                <div className="w-10 h-10 bg-earth-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-earth-600" />
                </div>
                <div>
                  <p className="font-body text-xs text-earth-500 font-bold tracking-widest uppercase mb-1">Location</p>
                  <p className="font-body text-ink font-light">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-5 border border-earth-100 bg-white">
                <div className="w-10 h-10 bg-earth-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-earth-600" />
                </div>
                <div>
                  <p className="font-body text-xs text-earth-500 font-bold tracking-widest uppercase mb-1">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="font-body text-ink hover:text-earth-500 transition-colors font-light">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Response promise */}
            <div className="bg-forest-50 border-l-4 border-forest-500 p-6">
              <p className="font-body text-forest-800 text-sm font-light leading-relaxed">
                <strong className="font-bold">We reply fast.</strong> Most messages are answered within a few hours. Orders placed before noon are processed same day.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white border border-earth-100 p-8 lg:p-10 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-ink mb-2">
                Send a Message
              </h3>
              <p className="font-body text-ink/50 text-sm mb-8 font-light">
                Your message will open directly in WhatsApp.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-forest-500" />
                  <h4 className="font-display text-2xl font-bold text-ink">WhatsApp opened!</h4>
                  <p className="font-body text-ink/60 text-sm font-light">Complete your message in WhatsApp and hit send.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-xs font-bold tracking-widest uppercase text-earth-600 mb-2"
                    >
                      {CONTACT.formFields.name.label}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder={CONTACT.formFields.name.placeholder}
                      required
                      className="w-full px-4 py-4 border-2 border-earth-100 font-body text-ink text-sm bg-cream
                        focus:outline-none focus:border-earth-400 transition-colors placeholder:text-ink/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-body text-xs font-bold tracking-widest uppercase text-earth-600 mb-2"
                    >
                      {CONTACT.formFields.message.label}
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder={CONTACT.formFields.message.placeholder}
                      required
                      rows={5}
                      className="w-full px-4 py-4 border-2 border-earth-100 font-body text-ink text-sm bg-cream
                        focus:outline-none focus:border-earth-400 transition-colors resize-none placeholder:text-ink/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-whatsapp w-full justify-center py-4 text-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Send via WhatsApp
                    <Send className="w-4 h-4 ml-auto" />
                  </button>

                  <p className="font-body text-xs text-ink/30 text-center">
                    Clicking send will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
