import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Opening({ onOpen }) {
  return (
    <motion.div
      className="opening-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2 } }}
    >
      {/* Floating petals */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="petal"
          style={{
            left: `${8 + i * 8}%`,
            top: `${10 + (i % 4) * 20}%`,
            fontSize: `${0.8 + (i % 3) * 0.4}rem`,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 15, -10, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3 + (i % 3),
            delay: i * 0.25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {['✿', '❀', '✾', '❁'][i % 4]}
        </motion.span>
      ))}

      <div className="opening-content">
        <motion.p
          className="opening-eyebrow font-hand"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          something i made for you
        </motion.p>

        <motion.h1
          className="opening-title font-serif"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          For you.
        </motion.h1>

        <motion.p
          className="opening-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          I wanted to make you something instead of just saying Happy Birthday.
        </motion.p>

        <motion.button
          className="btn btn-dark opening-btn"
          onClick={onOpen}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.8 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          Open it <ArrowDown size={16} />
        </motion.button>
      </div>

      <style>{`
        .opening-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }
        .petal {
          position: absolute;
          color: var(--accent-rose);
          user-select: none;
          pointer-events: none;
        }
        .opening-content {
          text-align: center;
          max-width: 560px;
          padding: 0 28px;
          position: relative;
          z-index: 2;
        }
        .opening-eyebrow {
          font-size: 1.4rem;
          color: var(--text-muted);
          margin-bottom: 0.8rem;
          letter-spacing: 0.02em;
        }
        .opening-title {
          font-size: clamp(4rem, 10vw, 7rem);
          color: var(--text);
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        .opening-sub {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 420px;
          margin: 0 auto 2.5rem;
        }
        .opening-btn {
          margin: 0 auto;
        }
      `}</style>
    </motion.div>
  );
}
