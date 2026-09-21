import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { galleryPhotos } from '../photos';

const col1 = galleryPhotos.filter((_, i) => i % 3 === 0);
const col2 = galleryPhotos.filter((_, i) => i % 3 === 1);
const col3 = galleryPhotos.filter((_, i) => i % 3 === 2);

export default function ParallaxGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -480]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section ref={ref} style={{ background: 'var(--bg)', padding: '9rem 0 18rem', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
            a collection
          </p>
          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: 'var(--text)' }}>
            50 Moments of Us
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            And we're only just getting started.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div style={{ y: y1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {col1.map((p, i) => (
              <motion.div
                key={p.id}
                className="polaroid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                whileHover={{ scale: 1.04, rotate: -1.5, zIndex: 10 }}
                style={{ position: 'relative' }}
              >
                <img src={p.url} alt="" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} draggable="false" />
                {p.caption && <p className="caption">{p.caption}</p>}
              </motion.div>
            ))}
          </motion.div>

          <motion.div style={{ y: y2, display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '120px' }}>
            {col2.map((p, i) => (
              <motion.div
                key={p.id}
                className="polaroid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                whileHover={{ scale: 1.04, rotate: 1.5, zIndex: 10 }}
                style={{ position: 'relative' }}
              >
                <img src={p.url} alt="" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} draggable="false" />
                {p.caption && <p className="caption">{p.caption}</p>}
              </motion.div>
            ))}
          </motion.div>

          <motion.div style={{ y: y3, display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '60px' }}>
            {col3.map((p, i) => (
              <motion.div
                key={p.id}
                className="polaroid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                whileHover={{ scale: 1.04, rotate: -1, zIndex: 10 }}
                style={{ position: 'relative' }}
              >
                <img src={p.url} alt="" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} draggable="false" />
                {p.caption && <p className="caption">{p.caption}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
