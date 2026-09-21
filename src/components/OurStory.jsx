import React from 'react';
import { motion } from 'framer-motion';
import { storyMilestones } from '../photos';

export default function OurStory() {
  return (
    <section className="story-section">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '5rem' }}
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

        <div className="story-timeline">
          {/* Center timeline line */}
          <div className="story-timeline-line" />

          {storyMilestones.map((m, i) => {
            const isLeft = m.side === 'left';
            const hasText = m.text && m.text.trim().length > 0;

            return (
              <motion.div
                key={m.id}
                className={`story-item ${isLeft ? 'story-left' : 'story-right'}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: 0.05 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="story-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                />

                {/* Card */}
                <div className="story-card">
                  {/* Photo */}
                  <div className="story-img-wrap" style={{ aspectRatio: hasText ? '16/9' : '4/3' }}>
                    <motion.img
                      src={m.img}
                      alt={m.title}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.45 }}
                    />
                  </div>

                  {/* Text body */}
                  <div className="story-card-body">
                    <p className="story-card-title">
                      {m.title}
                    </p>
                    {hasText && (
                      <p className="story-card-text">
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
    </section>
  );
}
