import React from 'react';
import { motion } from 'framer-motion';
import { galleryPhotos } from '../photos';

export default function ParallaxGallery() {
  return (
    <section style={{ background: 'var(--bg)', padding: '6rem 0 10rem', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
            a collection
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: 'var(--text)' }}>
            50 Moments of Us
          </h2>
          <p style={{ marginTop: '0.8rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            And we're only just getting started.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryPhotos.map((p, i) => (
            <motion.div
              key={p.id}
              className="polaroid"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? -1.5 : 1.5, zIndex: 10 }}
            >
              <div className="polaroid-img-wrap">
                <img src={p.url} alt="" draggable="false" />
              </div>
              <div className="polaroid-caption-wrap">
                {p.caption ? (
                  <p className="caption">{p.caption}</p>
                ) : (
                  <div style={{ height: '6px' }} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
