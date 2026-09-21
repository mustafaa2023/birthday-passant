import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './SceneMemoryWall.css';

// Generating a bunch of high-quality placeholder images for the wall
const photos = Array.from({ length: 12 }).map((_, i) => ({
  id: `wall-photo-${i}`,
  url: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?q=80&w=600&auto=format&fit=crop`,
  caption: i % 3 === 0 ? "One of the best days." : ""
}));

// We'll replace the unsplash URLs with specific ones just so they actually load real images
const realPhotos = [
  "1522851910609-b6329fc8b7a6", "1469334031218-e382a71b716b", "1494548162494-384bba4ab999",
  "1502086223501-7ea6ecd79368", "1473496169904-658ba7c44d8a", "1511895426328-dc8714191300",
  "1529333166437-7750a6dd5a70", "1517457373958-b7bdd4587205", "1531747118685-ca8fa6e08806",
  "1521737604893-d14cc237f11d", "1469854523086-cc02fe5d8800", "1449844908441-8829872d2607"
].map((id, i) => ({
  id: `wall-photo-${i}`,
  url: `https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`,
  caption: i === 0 ? "You always know how to make me laugh." : i === 5 ? "The trip we still talk about." : ""
}));

export default function SceneMemoryWall() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="scene-memory-wall">
      <div className="wall-header">
        <motion.h2 
          className="font-serif text-main"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A Collection of Moments
        </motion.h2>
        <motion.p 
          className="text-muted mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Click any photo to remember.
        </motion.p>
      </div>

      <div className="wall-grid-container">
        <motion.div 
          className="wall-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8
              }
            }
          }}
        >
          {realPhotos.map((photo) => (
            <motion.div 
              key={photo.id}
              layoutId={`container-${photo.id}`}
              className="wall-item"
              onClick={() => setSelectedId(photo.id)}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 50 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ scale: 1.05, zIndex: 10, filter: "brightness(1.1)" }}
            >
              <div className="photo-frame">
                <motion.img 
                  layoutId={`img-${photo.id}`}
                  src={photo.url} 
                  alt="Memory" 
                  loading="lazy" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="wall-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.button 
              className="close-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              exit={{ opacity: 0 }}
            >
              <X size={32} />
            </motion.button>
            
            {realPhotos.filter(p => p.id === selectedId).map(photo => (
              <motion.div 
                key={photo.id}
                layoutId={`container-${photo.id}`}
                className="wall-expanded-card"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="photo-frame">
                  <motion.img 
                    layoutId={`img-${photo.id}`}
                    src={photo.url} 
                    alt="Memory" 
                  />
                  {photo.caption && (
                    <motion.p 
                      className="photo-caption expanded-caption"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.4 } }}
                      exit={{ opacity: 0 }}
                    >
                      {photo.caption}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
