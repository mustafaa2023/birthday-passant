import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import Opening from './components/Opening';
import ParallaxGallery from './components/ParallaxGallery';
import MessyDesk from './components/MessyDesk';
import Envelopes from './components/Envelopes';
import OurStory from './components/OurStory';
import Wishes from './components/Wishes';
import FinalMessage from './components/FinalMessage';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="app-root">
      <AnimatePresence>
        {isOpened && (
          <motion.button
            className="music-btn"
            onClick={() => setIsMusicPlaying(p => !p)}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            title={isMusicPlaying ? 'Mute' : 'Play music'}
          >
            {isMusicPlaying ? <Music size={18} /> : <VolumeX size={18} />}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <Opening key="opening" onOpen={handleOpen} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <ParallaxGallery />
            <MessyDesk />
            <Envelopes />
            <OurStory />
            <Wishes />
            <FinalMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
