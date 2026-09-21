import { motion } from 'framer-motion';
import './MemoriesTimeline.css';

// Placeholder data - you can edit these easily later!
const memories = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop', // Placeholder group/friends photo
    caption: 'That one summer trip...',
    year: '2019',
    align: 'left'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop',
    caption: 'We thought this was a good idea.',
    year: '2020',
    align: 'right'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
    caption: '',
    year: '2021',
    align: 'left'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=800&auto=format&fit=crop',
    caption: 'One of my favorite days.',
    year: '2022',
    align: 'center'
  }
];

export default function MemoriesTimeline() {
  return (
    <section className="section memories-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-main">A collection of moments I wouldn't trade.</h2>
        </motion.div>

        <div className="timeline-container">
          {memories.map((memory, index) => (
            <motion.div 
              key={memory.id}
              className={`timeline-item align-${memory.align}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0.1 : 0.3 }}
            >
              <div className="photo-wrapper">
                <div className="photo-frame">
                  <img src={memory.imageUrl} alt={`Memory from ${memory.year}`} loading="lazy" />
                  {memory.caption && (
                    <p className="photo-caption font-handwriting">{memory.caption}</p>
                  )}
                </div>
                <div className="timeline-year font-serif">{memory.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
