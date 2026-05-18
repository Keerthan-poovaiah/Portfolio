import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal';
import { ACHIEVEMENTS } from '../utils/staticData';

export default function Achievements() {
  const { ref, controls } = useScrollReveal();
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-label">03. Wins</div>
        <h2 className="section-title">Achievements</h2>
        <p className="section-sub">Competitive results that validate real engineering ability under pressure.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.2rem' }} className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={a.title} ref={ref} custom={i} variants={fadeUpVariants} initial="hidden" animate={controls}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '1.5rem', display: 'flex', gap: '1.1rem', alignItems: 'flex-start', transition: 'border-color 0.2s' }}
              whileHover={{ borderColor: 'var(--border-hi)' }}
            >
              <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{a.icon}</span>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.3rem' }}>{a.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{a.desc}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '0.1em', marginTop: '0.4rem' }}>{a.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:700px){.ach-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
