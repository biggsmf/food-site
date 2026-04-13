'use client'

import { motion } from 'framer-motion'
import { VIDEOS } from '@/lib/content'

export default function VideoSection() {
  return (
    <section id="videos" className="section-padding bg-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-accent text-earth-500 mb-2">{VIDEOS.badge}</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">
              {VIDEOS.heading}
            </h2>
            <p className="text-lg text-ink/60 mt-4 max-w-2xl mx-auto">{VIDEOS.subtext}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {VIDEOS.items.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative bg-gradient-to-br from-earth-900 to-forest-900 aspect-video flex items-center justify-center">
                  <div className="text-6xl">📹</div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-display font-bold text-ink mb-2">{video.title}</h3>
                  <p className="text-ink/60">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
