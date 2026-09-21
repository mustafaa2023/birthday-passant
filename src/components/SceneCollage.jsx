import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './SceneCollage.css';

const collagePhotos = [
  "1522851910609-b6329fc8b7a6", "1469334031218-e382a71b716b", 
  "1494548162494-384bba4ab999", "1502086223501-7ea6ecd79368", 
  "1473496169904-658ba7c44d8a", "1511895426328-dc8714191300"
].map((id, i) => ({
  id: `collage-${i}`,
  url: `https://images.unsplash.com/photo-${id}?q=80&w=500&auto=format&fit=crop`,
  // Scatter them randomly for the initial positions
  x: Math.random() * 60 - 30, // -30% to 30% from center
  y: Math.random() * 60 - 30, 
  rotate: Math.random() * 40 - 20, // -20 to 20 degrees
  zIndex: i,
  caption: i === 1 ? "Still makes me laugh." : i === 3 ? "You probably don't remember this." : ""
}));

export default function SceneCollage() {
  const containerRef = useRef(null);
  const [photos, setPhotos] = useState(collagePhotos);

  // Bring a photo to the front when dragged or clicked
  const bringToFront = (id) => {
    setPhotos(prev => {
      const highestZ = Math.max(...prev.map(p => p.zIndex));
      return prev.map(p => 
        p.id === id ? { ...p, zIndex: highestZ + 1 } : p
      );
    });
  };

  return (
    <div className="scene-collage" ref={containerRef}>
      <div className="collage-header pointer-events-none">
        <motion.h2 
          className="font-serif text-main"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          The Messy Desk
        </motion.h2>
        <motion.p 
          className="text-muted mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Grab and toss these around.
        </motion.p>
      </div>

      <div className="drag-container">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="draggable-photo"
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            onDragStart={() => bringToFront(photo.id)}
            onPointerDown={() => bringToFront(photo.id)}
            style={{ zIndex: photo.zIndex }}
            initial={{ 
              opacity: 0, 
              x: 0, 
              y: 0, 
              rotate: 0,
              scale: 0
            }}
            animate={{ 
              opacity: 1, 
              x: `${photo.x}vw`, 
              y: `${photo.y}vh`, 
              rotate: photo.rotate,
              scale: 1
            }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 100,
              delay: index * 0.15 + 0.5
            }}
          >
            <div className="photo-frame">
              <img src={photo.url} alt="Collage moment" draggable="false" />
              {photo.caption && (
                <p className="photo-caption">{photo.caption}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
