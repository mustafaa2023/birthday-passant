import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SceneCarousel.css';

const cards = [
  {
    id: 1,
    type: "quote",
    text: "You make ordinary days memorable."
  },
  {
    id: 2,
    type: "story",
    date: "August 2018",
    title: "How it started",
    text: "The day we randomly ended up sitting next to each other. Neither of us realized it was the beginning of everything.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    type: "quote",
    text: "Some of my favorite memories happened when we weren't even trying to make memories."
  },
  {
    id: 4,
    type: "story",
    date: "December 2019",
    title: "The first road trip",
    text: "Four hours of getting lost, singing way too loud, and eating terrible gas station food. Perfection.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    type: "quote",
    text: "I'm genuinely grateful that life happened to put you in mine."
  }
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    };
  }
};

export default function SceneCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = Math.abs(page % cards.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const activeCard = cards[activeIndex];

  return (
    <div className="scene-carousel">
      <div className="carousel-header">
        <motion.h2 
          className="font-serif text-main"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Things I Never Say Enough
        </motion.h2>
      </div>

      <div className="carousel-container">
        <button className="carousel-nav prev" onClick={() => paginate(-1)}>
          <ChevronLeft size={32} />
        </button>

        <div className="carousel-viewport">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className={`carousel-card type-${activeCard.type}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) paginate(1);
                else if (swipe > 10000) paginate(-1);
              }}
            >
              {activeCard.type === "quote" ? (
                <div className="quote-content">
                  <p className="font-serif">{activeCard.text}</p>
                </div>
              ) : (
                <div className="story-content">
                  <div className="story-image">
                    <img src={activeCard.image} alt={activeCard.title} draggable="false" />
                  </div>
                  <div className="story-text">
                    <span className="story-date">{activeCard.date}</span>
                    <h3 className="font-serif">{activeCard.title}</h3>
                    <p>{activeCard.text}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="carousel-nav next" onClick={() => paginate(1)}>
          <ChevronRight size={32} />
        </button>
      </div>
      
      <div className="carousel-dots">
        {cards.map((_, idx) => (
          <div key={idx} className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}
