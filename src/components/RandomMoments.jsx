import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './RandomMoments.css';

const captions = {
  1: "We really thought this was a good idea.",
  5: "You probably don't remember this.",
  9: "Unplanned chaos at its finest.",
  14: "The face you make when I start singing.",
  18: "Pure happiness right here."
};

// 20 images scattered across the vertical space
const deskPhotos = Array.from({ length: 20 }).map((_, i) => ({
  id: `desk-photo-${i}`,
  url: `https://picsum.photos/seed/desk-photo-${i + 1}/400/500`,
  x: ((i % 4) * 22) - 33, // neat initial horizontal distribution across width (-33% to +33%)
  y: (i * 150) + 40, // spread down vertically
  rotate: (i % 2 === 0 ? 1 : -1) * ((i * 7) % 25 + 5),
  zIndex: i + 1,
  caption: captions[i] || ""
}));

export default function RandomMoments() {
  const containerRef = useRef(null);
  const [photos, setPhotos] = useState(deskPhotos);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Gentle vertical movement while scrolling
  const yDrift = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const bringToFront = (id) => {
    setPhotos(prev => {
      const highestZ = Math.max(...prev.map(p => p.zIndex));
      return prev.map(p => 
        p.id === id ? { ...p, zIndex: highestZ + 1 } : p
      );
    });
  };

  return (
    <section className="section random-section" ref={containerRef}>
      <div className="container pointer-events-none sticky-header">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-main">The Messy Desk</h2>
          <p className="text-muted mt-4">20 polaroids scattered around. Drag, pick up, and toss them.</p>
        </motion.div>
      </div>

      <motion.div className="desk-container" style={{ y: yDrift }}>
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="desk-photo"
            drag
            dragConstraints={containerRef}
            whileDrag={{ scale: 1.08, cursor: "grabbing" }}
            onDragStart={() => bringToFront(photo.id)}
            onPointerDown={() => bringToFront(photo.id)}
            style={{ 
              zIndex: photo.zIndex,
              left: `calc(50% + ${photo.x}%)`,
              top: `${photo.y}px`,
              rotate: photo.rotate,
              x: "-50%"
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <div className="photo-frame">
              <img src={photo.url} alt="Desk moment" draggable="false" />
              {photo.caption && (
                <p className="photo-caption">{photo.caption}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

