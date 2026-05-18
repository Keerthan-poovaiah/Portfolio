import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal';
import { PERSONAL } from '../utils/staticData';

export default function Education({ data }) {
  const { ref, controls } = useScrollReveal();
  const d = data || PERSONAL;
  return (
    <section id="education" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="section-label">04. Education</div>
        <h2 className="section-title">Background</h2>
        <p className="section-sub" style={{ marginBottom: '1.5rem' }}>Strong CS fundamentals — the backbone of every system I build.</p>
        <motion.div ref={ref} variants={fadeUpVariants} initial="hidden" animate={controls}
          style={{ background: 'var(--surface)', border: '1px solid rgba(0,232,122,0.2)', borderRadius: 8, padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}
        >
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{d.degree}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>{d.college} · Bengaluru, Karnataka</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(239,239,239,0.55)', lineHeight: 1.7 }}>
              Relevant Coursework: Data Structures & Algorithms &nbsp;·&nbsp; DBMS &nbsp;·&nbsp; Operating Systems &nbsp;·&nbsp; Computer Networks &nbsp;·&nbsp; OOP &nbsp;·&nbsp; Software Engineering
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '2.5rem', color: 'var(--accent)', fontWeight: 700, lineHeight: 1 }}>{d.cgpa}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>CGPA / 10.0</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.6rem' }}>Dec 2022 – Jun 2026</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
