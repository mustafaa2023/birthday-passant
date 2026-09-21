import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { finalPhoto, finalMessageName, finalMessageText } from '../photos';

function Confetti() {
  const colors = ['#f9c74f', '#f3722c', '#90be6d', '#43aa8b', '#577590', '#f8961e', '#d4a0a0', '#c9b49a'];
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998 }}>
      {Array.from({ length: 70 }, (_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${6 + (i % 4) * 3}px`,
            height: `${6 + (i % 3) * 3}px`,
            borderRadius: i % 3 === 0 ? '50%' : '2px',
            background: colors[i % colors.length],
            left: `${(i * 1.45) % 100}%`,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '115vh'],
            x: [(i % 2 === 0 ? 40 : -40), (i % 2 === 0 ? -25 : 25)],
            rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2.5 + (i % 6) * 0.35,
            delay: (i % 12) * 0.06,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
}

export default function FinalMessage() {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  // Split the message into paragraphs for nicer rendering
  const paragraphs = finalMessageText.split('\n\n').map(p => p.trim()).filter(Boolean);

  return (
    <section style={{ background: 'var(--bg-dark)', padding: '10rem 0', position: 'relative', overflow: 'hidden' }}>
      {showConfetti && <Confetti />}

      {/* Warm glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 60%, rgba(201,180,154,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '780px' }}>
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.6 } }}
              transition={{ duration: 0.9 }}
            >
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.4rem', color: 'var(--accent)', marginBottom: '1.2rem' }}>
                one last thing
              </p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--text-light)', marginBottom: '2.5rem', fontStyle: 'italic' }}>
                There's a message waiting for you, {finalMessageName}.
              </h2>
              <motion.button
                className="btn"
                style={{ background: 'var(--accent)', color: 'var(--text)', margin: '0 auto' }}
                onClick={handleReveal}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.93 }}
              >
                🎁 Open it
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              {/* Final polaroid */}
              <motion.div
                className="polaroid"
                style={{ display: 'inline-block', maxWidth: '360px', marginBottom: '4rem' }}
                initial={{ opacity: 0, rotate: -4 }}
                animate={{ opacity: 1, rotate: -1.5 }}
                transition={{ duration: 1.1, delay: 0.3 }}
              >
                <div className="polaroid-img-wrap" style={{ aspectRatio: '6/5' }}>
                  <img
                    src={finalPhoto.url}
                    alt="Our favorite"
                  />
                </div>
                <div className="polaroid-caption-wrap">
                  <p className="caption">
                    {finalPhoto.caption}
                  </p>
                </div>
              </motion.div>

              {/* Birthday heading */}
              <motion.h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.6rem, 6vw, 4.6rem)',
                  color: 'var(--text-light)',
                  fontStyle: 'italic',
                  marginBottom: '2.5rem',
                  lineHeight: 1.15,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Happy Birthday, {finalMessageName}! 🎂
              </motion.h1>

              {/* Message body */}
              <motion.div
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '18px',
                  padding: '44px 48px',
                  border: '1px solid rgba(255,255,255,0.09)',
                  marginBottom: '3rem',
                  textAlign: 'left',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, delay: 1 }}
              >
                {paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      lineHeight: 2,
                      color: 'rgba(240,235,225,0.92)',
                      fontStyle: 'italic',
                      marginBottom: i < paragraphs.length - 1 ? '1.6rem' : 0,
                      whiteSpace: 'pre-line',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2 + i * 0.15 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </motion.div>

              {/* Closing */}
              <motion.p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.6rem',
                  color: 'var(--accent)',
                  lineHeight: 1.6,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                Here's to everything we've already lived —<br />and everything we haven't yet. 🌸
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
