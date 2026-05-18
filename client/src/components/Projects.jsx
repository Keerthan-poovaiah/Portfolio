import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal';
import { PROJECTS } from '../utils/staticData';

const TAG_COLORS = {
  'Node.js': 'g','Express.js': 'g','REST APIs': 'g','Socket.IO': 'g','JWT': 'r','RBAC': 'r',
  'MongoDB': 'p','PostgreSQL': 'p','MySQL': 'p','React.js': 'p','React (Vite)': 'p','React (Vite.js)': 'p',
  'TensorFlow': 'o','Scikit-learn': 'o','Flask': 'o','VirusTotal API': 'r',
};

const getTagType = (t) => TAG_COLORS[t] || 'm';

function ProjectCard({ project, index }) {
  const { ref, controls } = useScrollReveal();
  return (
    <motion.div ref={ref} custom={index} variants={fadeUpVariants} initial="hidden" animate={controls}
      style={{ background: 'var(--surface)', border: project.featured ? '1px solid rgba(0,232,122,0.18)' : '1px solid var(--border)', borderRadius: 8, padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', transition: 'all 0.25s' }}
      whileHover={{ y: -4, borderColor: 'var(--border-hi)' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--muted)' }}>{String(index + 1).padStart(2,'0')}{project.featured ? ' — Featured' : ''}</span>
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener" style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--muted)', border: '1px solid var(--border)', padding: '0.28rem 0.65rem', borderRadius: 2, letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'all 0.2s' }}
            onMouseEnter={e=>{e.target.style.color='var(--accent)';e.target.style.borderColor='rgba(0,232,122,0.3)'}}
            onMouseLeave={e=>{e.target.style.color='var(--muted)';e.target.style.borderColor='var(--border)'}}>
              GitHub ↗
            </a>
          )}
        </div>
      </div>
      {project.award && <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', background: 'rgba(0,232,122,0.07)', border: '1px solid rgba(0,232,122,0.2)', padding: '0.3rem 0.7rem', borderRadius: 2, alignSelf: 'flex-start' }}>{project.award}</div>}
      <div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.2rem' }}>{project.name}</h3>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>{project.subtitle}</p>
      </div>
      <p style={{ fontSize: '0.83rem', color: 'rgba(239,239,239,0.58)', lineHeight: 1.75 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
        {project.stack.map(t => <span key={t} className={`tag tag-${getTagType(t)}`}>{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = PROJECTS.find(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">02. Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Production-grade applications — real architecture decisions, real problems solved.</p>

        {/* Featured spans full width */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.4rem' }} className="proj-grid">
          {featured && (
            <div style={{ gridColumn: 'span 2' }} className="proj-full">
              <ProjectCard project={featured} index={0} />
            </div>
          )}
          {rest.map((p, i) => <ProjectCard key={p.id} project={p} index={i + 1} />)}
        </div>
      </div>
      <style>{`@media(max-width:700px){.proj-grid{grid-template-columns:1fr!important}.proj-full{grid-column:1!important}}`}</style>
    </section>
  );
}
