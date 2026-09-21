import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const THINGS = [
  { id: 1, emoji: '🌙', title: 'The late night talks', text: 'The ones that go until 3am when neither of us planned to be awake. Those conversations are some of my most treasured things.' },
  { id: 2, emoji: '😂', title: 'The inside jokes', text: 'We have years of references and callbacks now. I genuinely forget sometimes that other people have no idea what we\'re laughing about.' },
  { id: 3, emoji: '💌', title: 'The little check-ins', text: 'The random "thinking of you" messages. The "are you okay?" when I could just feel something was off. That\'s real friendship.' },
  { id: 4, emoji: '🗺️', title: 'Every adventure, even the terrible ones', text: 'Especially the terrible ones, honestly. The things that go wrong make the best stories. We have a very good collection.' },
  { id: 5, emoji: '🤝', title: 'Being understood without explaining', text: 'You just get it. I don\'t always have to find the words. That\'s rarer than I think people realize.' },
  { id: 6, emoji: '🌸', title: 'How you show up', text: 'Not just on the good days — on the awkward, messy, uncertain days too. You\'ve shown up every single time. I see that.' },
];

export default function Appreciation() {
  const [active, setActive] = useState(null);

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
            what i love most
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--text)' }}>
            The Things About You
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.05rem' }}>
            Tap each one to read more.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '980px',
          margin: '0 auto',
        }}>
          {THINGS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setActive(active === item.id ? null : item.id)}
              style={{
                background: active === item.id ? '#fffdf9' : 'var(--bg-alt)',
                borderRadius: '16px',
                padding: '28px 26px',
                cursor: 'pointer',
                border: active === item.id ? '1px solid var(--accent)' : '1px solid transparent',
                boxShadow: active === item.id ? 'var(--shadow-md)' : 'none',
                transition: 'background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{item.emoji}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '10px', color: 'var(--text)' }}>
                {item.title}
              </h3>
              <AnimatePresence>
                {active === item.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.75, overflow: 'hidden' }}
                  >
                    {item.text}
                  </motion.p>
                )}
              </AnimatePresence>
              {active !== item.id && (
                <p style={{ color: 'var(--accent-deep)', fontSize: '0.87rem', fontWeight: 500, marginTop: '4px' }}>
                  tap to read →
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
