import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './InteractiveEnvelopes.css';

const messages = [
  {
    id: 1,
    title: "To open when you need a reminder",
    text: "You make ordinary days memorable. The way you can turn a boring Tuesday afternoon into a core memory is something I'll never take for granted."
  },
  {
    id: 2,
    title: "To open when you're doubting yourself",
    text: "I'm genuinely grateful that life happened to put you in mine. You are stronger, smarter, and kinder than you give yourself credit for."
  },
  {
    id: 3,
    title: "To open when you miss our adventures",
    text: "Some of my favorite memories happened when we weren't even trying to make memories. Getting lost, laughing at absolutely nothing. I wouldn't trade them for the world."
  }
];

export default function InteractiveEnvelopes() {
  const [openEnvelopes, setOpenEnvelopes] = useState({});

  const toggleEnvelope = (id) => {
    setOpenEnvelopes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="section envelopes-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-main">Things I Never Say Enough</h2>
          <p className="text-muted mt-4">Click to open.</p>
        </motion.div>

        <div className="envelopes-grid">
          {messages.map((msg, index) => {
            const isOpen = openEnvelopes[msg.id];
            
            return (
              <motion.div 
                key={msg.id}
                className="envelope-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onClick={() => toggleEnvelope(msg.id)}
              >
                <p className="envelope-label font-serif">{msg.title}</p>
                
                <div className={`envelope-wrapper ${isOpen ? 'is-open' : ''}`}>
                  <div className="envelope-back"></div>
                  
                  <div className="letter">
                    <p className="font-serif">{msg.text}</p>
                  </div>
                  
                  <div className="envelope-front"></div>
                  <div className="envelope-flap"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
