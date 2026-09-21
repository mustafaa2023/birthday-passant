import { motion } from 'framer-motion';
import './AppreciationCards.css';

const appreciationNotes = [
  {
    id: 1,
    text: "You make ordinary days memorable."
  },
  {
    id: 2,
    text: "Some of my favorite memories happened when we weren't even trying to make memories."
  },
  {
    id: 3,
    text: "I'm genuinely grateful that life happened to put you in mine."
  },
  {
    id: 4,
    text: "You always know exactly what to say, and exactly when to say nothing at all."
  }
];

export default function AppreciationCards() {
  return (
    <section className="section appreciation-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-main">Things I Never Say Enough</h2>
        </motion.div>

        <div className="cards-grid">
          {appreciationNotes.map((note, index) => (
            <motion.div 
              key={note.id}
              className="appreciation-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="card-content">
                <p className="font-serif">{note.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
