
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';
import './SurpriseReveal.css';
import React from 'react';

export default function SurpriseReveal() {
  const [isRevealed, setIsRevealed] = React.useState(false);

  return (
    <section className="section surprise-section">
      <div className="container">
        <div className="surprise-container">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="button"
                className="surprise-prompt"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
              >
                <h3 className="font-serif mb-6">There's one more thing.</h3>
                <motion.button 
                  className="btn-primary"
                  onClick={() => setIsRevealed(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Gift size={18} className="mr-2" /> Open it
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                className="surprise-content"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="surprise-photo">
                  <div className="photo-frame">
                    <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" alt="The surprise memory" />
                    <p className="photo-caption font-handwriting">I kept this one just for the end.</p>
                  </div>
                </div>
                <div className="surprise-text mt-8 text-center">
                  <p className="font-serif text-lg">Thank you for being the kind of friend that makes life so much better.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
