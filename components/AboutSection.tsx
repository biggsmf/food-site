'use client'

import { motion } from 'framer-motion'
import { ABOUT } from '@/lib/content'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-accent text-earth-500 mb-2">{ABOUT.badge}</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6 whitespace-pre-line">
              {ABOUT.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {ABOUT.body.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-ink/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <blockquote className="text-2xl font-accent text-forest-500 italic border-l-4 border-earth-500 pl-6 py-4">
                {ABOUT.mission}
              </blockquote>
            </div>

            <div className="bg-gradient-to-br from-forest-500 to-earth-500 rounded-lg h-96 flex items-center justify-center text-cream text-center p-8">
              <div className="text-6xl">🌾</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-earth-500/20">
            {ABOUT.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-earth-500">
                  {stat.value}
                </p>
                <p className="text-sm text-ink/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
