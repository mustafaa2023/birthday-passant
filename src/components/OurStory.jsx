import React from 'react';
import { motion } from 'framer-motion';
import { storyMilestones } from '../photos';

export default function OurStory() {
  return (
    <section style={{ background: 'var(--bg-alt)', padding: '9rem 0' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '6rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
            chapter by chapter
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--text)' }}>
            Our Story So Far
          </h2>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '980px', margin: '0 auto' }}>
          {/* Center timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, var(--accent) 8%, var(--accent) 92%, transparent)',
            transform: 'translateX(-50%)',
          }} />

          {storyMilestones.map((m, i) => {
            const isLeft = m.side === 'left';
            const hasText = m.text && m.text.trim().length > 0;

            return (
              <motion.div
                key={m.id}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: '70px',
                  position: 'relative',
                }}
                initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.75, delay: 0.1 }}
              >
                {/* Timeline dot */}
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '28px',
                    transform: 'translate(-50%, -50%)',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'var(--accent-deep)',
                    border: '3px solid var(--bg-alt)',
                    zIndex: 2,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                />

                {/* Card */}
                <div style={{
                  width: 'calc(50% - 44px)',
                  background: '#fffdf9',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                }}>
                  {/* Photo */}
                  <div style={{ aspectRatio: hasText ? '16/9' : '4/3', overflow: 'hidden' }}>
                    <motion.img
                      src={m.img}
                      alt={m.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.45 }}
                    />
                  </div>

                  {/* Text body */}
                  <div style={{ padding: hasText ? '20px 24px 26px' : '16px 22px 20px' }}>
                    <p style={{
                      fontFamily: 'var(--font-hand)',
                      fontSize: '1.2rem',
                      color: 'var(--accent-deep)',
                      marginBottom: hasText ? '6px' : 0,
                      fontWeight: 600,
                    }}>
                      {m.title}
                    </p>
                    {hasText && (
                      <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.97rem',
                        lineHeight: 1.8,
                        marginTop: '8px',
                      }}>
                        {m.text}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .story-item { justify-content: center !important; }
          .story-card { width: 90% !important; }
        }
      `}</style>
    </section>
  );
}
