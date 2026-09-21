import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MESSAGES = [
  {
    id: 1,
    label: 'To open when you need a reminder',
    color: '#e8d5c0',
    text: 'You make ordinary days extraordinary. The way you turn a boring Tuesday afternoon into a core memory is something I\'ll never stop being grateful for. You don\'t need to be anything more than what you already are.',
  },
  {
    id: 2,
    label: 'To open when you doubt yourself',
    color: '#d4c8e0',
    text: 'Listen to me — you are smarter, kinder, and more capable than you give yourself credit for. I have watched you handle things that would have broken most people. You are genuinely extraordinary, and I\'m not just saying that.',
  },
  {
    id: 3,
    label: 'To open when you miss our adventures',
    color: '#c8d8c0',
    text: 'Some of my favorite memories happened when we weren\'t even trying. Getting completely lost, laughing until our stomachs hurt at absolutely nothing, sitting in comfortable silence. I wouldn\'t trade any of it.',
  },
  {
    id: 4,
    label: 'To open on hard days',
    color: '#e0d0c0',
    text: 'Hard days don\'t define you. You\'ve come so far and handled so much with so much grace, even when it didn\'t feel graceful. I\'m always in your corner. Always.',
  },
  {
    id: 5,
    label: 'To open when you feel far away',
    color: '#c0d4d8',
    text: 'Distance is just geography. Wherever we end up, whatever we\'re doing, you\'re one of the first people I think about when something great happens — and the first one I want to call when something doesn\'t.',
  },
];

export default function Envelopes() {
  const [opened, setOpened] = useState({});

  const toggle = (id) => setOpened(prev => ({ ...prev, [id]: !prev[id] }));

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
            letters
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--text)' }}>
            Things I Never Say Enough
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.05rem' }}>
            Tap to open each one.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '680px', margin: '0 auto' }}>
          {MESSAGES.map((msg, i) => {
            const isOpen = !!opened[msg.id];
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={() => toggle(msg.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Envelope flap / header */}
                <div style={{
                  background: msg.color,
                  padding: '18px 26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--text)' }}>
                    {msg.label}
                  </p>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: '1.2rem', opacity: 0.6 }}
                  >
                    ↓
                  </motion.span>
                </div>

                {/* Message body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        background: '#fffdf9',
                        padding: '28px 30px',
                        borderTop: `1px solid ${msg.color}`,
                      }}>
                        <p style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.1rem',
                          lineHeight: 1.85,
                          color: 'var(--text)',
                          fontStyle: 'italic',
                        }}>
                          "{msg.text}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
