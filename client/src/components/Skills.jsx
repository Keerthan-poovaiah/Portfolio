import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal';
import { SKILLS } from '../utils/staticData';

function SkillCard({ skill, index }) {
  const { ref, controls } = useScrollReveal();
  const tagClass = { g: 'tag-g', p: 'tag-p', r: 'tag-r', o: 'tag-o' };
  return (
    <motion.div ref={ref} custom={index} variants={fadeUpVariants} initial="hidden" animate={controls}
      style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '1.4rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.25s, transform 0.25s' }}
      whileHover={{ y: -4, borderColor: 'var(--border-hi)' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: skill.color, transformOrigin: 'left', transform: 'scaleX(0)', transition: 'transform 0.3s' }} className="skill-bar" />
      <div style={{ fontSize: '1.6rem', marginBottom: '0.85rem' }}>{skill.icon}</div>
      <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>{skill.name}</div>
      <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '0.85rem' }}>{skill.desc}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {skill.tags.map(t => <span key={t.label} className={`tag ${tagClass[t.type] || 'tag-m'}`}>{t.label}</span>)}
      </div>
      <style>{`.skill-bar{transform-origin:left}motion div:hover .skill-bar{transform:scaleX(1)}`}</style>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">01. Expertise</div>
        <h2 className="section-title">What I Build With</h2>
        <p className="section-sub">Backend-first engineer comfortable across the full stack — from database design to deployment.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem' }} className="skills-grid">
          {SKILLS.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
        </div>
      </div>
      <style>{`@media(max-width:900px){.skills-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:600px){.skills-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
