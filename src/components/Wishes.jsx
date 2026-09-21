import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WISHES = [
  {
    id: 1,
    icon: '🌅',
    color: '#f9e8d4',
    title: 'I wish you mornings that feel like something good is coming',
    text: 'The kind where you wake up and, for no particular reason, you just know it\'s going to be a good one.',
  },
  {
    id: 2,
    icon: '🌊',
    color: '#d4e8f4',
    title: 'I wish you the confidence to trust yourself completely',
    text: 'You already know the answers most of the time. I hope this year you stop second-guessing them.',
  },
  {
    id: 3,
    icon: '🌿',
    color: '#d8ecda',
    title: 'I wish you peace with where you are right now',
    text: 'Not every season is the destination. Some are just the journey — and that\'s okay too.',
  },
  {
    id: 4,
    icon: '✨',
    color: '#eee8f4',
    title: 'I wish you moments that make time slow down',
    text: 'The kind you want to hold onto. Where you think — this is it. This is exactly where I\'m supposed to be.',
  },
  {
    id: 5,
    icon: '🎲',
    color: '#f4d4d4',
    title: 'I wish you some beautiful, unplanned chaos',
    text: 'The best things rarely go according to plan. Say yes more. Let things surprise you.',
  },
  {
    id: 6,
    icon: '🔥',
    color: '#f9e8cc',
    title: 'I wish you a year that actually feels like yours',
    text: 'Not what anyone else expected. Not what you thought you were supposed to want. Just yours.',
  },
];

export default function Wishes() {
  const [flipped, setFlipped] = useState({});

  const toggle = (id) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section style={{ background: 'var(--bg)', padding: '9rem 0' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
            for the year ahead
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--text)' }}>
            What I Wish For You
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.05rem' }}>
            Flip each card to read.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '24px',
          maxWidth: '980px',
          margin: '0 auto',
          perspective: '1000px',
        }}>
          {WISHES.map((wish, i) => {
            const isFlipped = !!flipped[wish.id];
            return (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ height: '220px', perspective: '800px', cursor: 'pointer' }}
                onClick={() => toggle(wish.id)}
              >
                <motion.div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Front */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    background: wish.color,
                    borderRadius: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '28px 24px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <div style={{ fontSize: '2.6rem', marginBottom: '14px' }}>{wish.icon}</div>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      color: 'var(--text)',
                      lineHeight: 1.5,
                    }}>
                      {wish.title}
                    </h3>
                    <p style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', opacity: 0.7 }}>
                      tap to read →
                    </p>
                  </div>

                  {/* Back */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: '#fffdf9',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '28px 28px',
                    boxShadow: 'var(--shadow-md)',
                    border: `1px solid ${wish.color}`,
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      lineHeight: 1.85,
                      color: 'var(--text)',
                      fontStyle: 'italic',
                      textAlign: 'center',
                    }}>
                      "{wish.text}"
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
