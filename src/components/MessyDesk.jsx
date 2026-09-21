import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { deskPhotos as rawPhotos } from '../photos';

// Fixed scatter layout — 4 "lanes" across the width, photos spaced vertically
const LANE_X = [-38, -13, 13, 38]; // percent offsets from center
const ROTATIONS = [-14, 9, -6, 16, -10, 13, -18, 7, -4, 17, -12, 5, -8, 15, -3, 11, -16, 6, -9, 14];

const initialPhotos = rawPhotos.map((p, i) => ({
  ...p,
  x: LANE_X[i % 4],
  y: i * 160 + 60,
  rotate: ROTATIONS[i] ?? 0,
  zIndex: i + 1,
}));

export default function MessyDesk() {
  const containerRef = useRef(null);
  const [photos, setPhotos] = useState(initialPhotos);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const bringToFront = (id) => {
    setPhotos(prev => {
      const maxZ = Math.max(...prev.map(p => p.zIndex));
      return prev.map(p => p.id === id ? { ...p, zIndex: maxZ + 1 } : p);
    });
  };

  return (
    <section
      ref={containerRef}
      style={{
        background: 'var(--bg-alt)',
        position: 'relative',
        minHeight: `${initialPhotos.length * 160 + 700}px`,
        overflow: 'hidden',
      }}
    >
      {/* Sticky header */}
      <div style={{
        position: 'sticky',
        top: '80px',
        zIndex: 200,
        textAlign: 'center',
        pointerEvents: 'none',
        padding: '0 24px 2rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
            scattered
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--text)' }}>
            The Messy Desk
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.6rem', fontSize: '1rem' }}>
            Drag them around. Toss them aside. Just like real memories.
          </p>
        </motion.div>
      </div>

      {/* Draggable photos */}
      <motion.div style={{ position: 'absolute', inset: 0, y: bgY }}>
        {photos.map(photo => (
          <motion.div
            key={photo.id}
            className="polaroid"
            drag
            dragConstraints={containerRef}
            dragElastic={0.08}
            dragMomentum={false}
            whileDrag={{ scale: 1.08, cursor: 'grabbing', zIndex: 1000 }}
            onPointerDown={() => bringToFront(photo.id)}
            style={{
              position: 'absolute',
              left: `calc(50% + ${photo.x}%)`,
              top: `${photo.y}px`,
              x: '-50%',
              rotate: photo.rotate,
              zIndex: photo.zIndex,
              cursor: 'grab',
              width: '210px',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '80px' }}
            transition={{ type: 'spring', stiffness: 130, damping: 16 }}
          >
            <div className="polaroid-img-wrap">
              <img
                src={photo.url}
                alt=""
                draggable="false"
              />
            </div>
            {photo.caption && (
              <div className="polaroid-caption-wrap">
                <p className="caption">{photo.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
