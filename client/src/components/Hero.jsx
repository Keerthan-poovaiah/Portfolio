import { motion } from 'framer-motion';
import { PERSONAL } from '../utils/staticData';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25,0.4,0.25,1] } } };

export default function Hero({ data }) {
  const d = data || PERSONAL;

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '8rem 2.5rem 4rem', maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">

        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)',
            border: '1px solid rgba(0,232,122,0.25)', background: 'rgba(0,232,122,0.05)',
            padding: '0.35rem 0.8rem', borderRadius: '2px', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: '1.4rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 1.6s infinite' }} />
            Open to SDE-1 Opportunities
          </motion.div>

          <motion.h1 variants={item} style={{ fontSize: 'clamp(2.6rem,5.5vw,4.8rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.5em', fontWeight: 400, fontFamily: 'var(--mono)', display: 'block', marginBottom: '0.3rem', letterSpacing: '0.1em' }}>// hello, world</span>
            <span style={{ color: 'var(--accent)' ,letterSpacing
              : '-0.001em' }}>Keerthan<br />Poovaiah</span>
          </motion.h1>

          <motion.p variants={item} style={{ fontFamily: 'var(--mono)', fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '1.4rem', letterSpacing: '0.04em' }}>
            Software Developer &nbsp;·&nbsp; MERN Stack &nbsp;·&nbsp; REST APIs &nbsp;·&nbsp; ML-integrated Systems
          </motion.p>

          <motion.p variants={item} style={{ fontSize: '0.97rem', color: 'rgba(239,239,239,0.65)', lineHeight: 1.85, maxWidth: 460, marginBottom: '2.2rem' }}>
            I turn ideas into systems that don't break at 3am.
Software developer enthusiast who obsesses over clean APIs, fast queries, and code that scales — with a knack for shipping full-stack products that actually work. Always building.
          </motion.p>

          <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo('#projects')} style={{
              fontFamily: 'var(--mono)', fontSize: '0.75rem', background: 'var(--accent)', color: '#000',
              padding: '0.85rem 1.8rem', border: 'none', borderRadius: '2px', letterSpacing: '0.1em',
              textTransform: 'uppercase', fontWeight: 700, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--accentd)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)'; }}
            >
              View Projects
            </button>
            <button onClick={() => scrollTo('#contact')} style={{
              fontFamily: 'var(--mono)', fontSize: '0.75rem', background: 'transparent', color: 'var(--text)',
              padding: '0.85rem 1.8rem', border: '1px solid var(--border-hi)', borderRadius: '2px',
              letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border-hi)'; e.target.style.color = 'var(--text)'; }}
            >
              Let's Connect
            </button>
          </motion.div>
        </motion.div>

        {/* Terminal Card */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          style={{ background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 10, overflow: 'hidden', fontFamily: 'var(--mono)' }}
        >
          <div style={{ background: 'var(--surface2)', padding: '0.7rem 1rem', display: 'flex', alignItems: 'center', gap: '0.45rem', borderBottom: '1px solid var(--border)' }}>
            {['#ff5f57','#ffbd2e','#28c840'].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'block' }} />)}
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', margin: '0 auto', letterSpacing: '0.05em' }}>keerthan.json</span>
          </div>
          <div style={{ padding: '1.4rem', fontSize: '0.76rem', lineHeight: 2.1 }}>
            <div style={{ color: 'var(--muted)' }}>{'{'}</div>
            <div style={{ paddingLeft: '1.1rem' }}>
              {[
                ['"name"', '"Keerthan Poovaiah M M"', 'str'],
                ['"role"', '"Software Development Engineer"', 'str'],
                ['"location"', '"Bengaluru, IN"', 'str'],
                ['"cgpa"', String(d.cgpa), 'val'],
                ['"openToWork"', 'true', 'val'],
              ].map(([k,v,type]) => (
                <div key={k}>
                  <span style={{ color: 'var(--accent2)' }}>{k}</span>
                  <span style={{ color: 'var(--muted)' }}>: </span>
                  <span style={{ color: type === 'val' ? 'var(--accent)' : '#ff9d6c' }}>{v}</span>
                  <span style={{ color: 'var(--muted)' }}>,</span>
                </div>
              ))}
              <div><span style={{ color: 'var(--accent2)' }}>"stack"</span><span style={{ color: 'var(--muted)' }}>: [</span></div>
              <div style={{ paddingLeft: '1.1rem' }}>
                {['"Node.js"','"Express"','"MongoDB"','"React"','"Socket.IO"'].map((s,i,arr) => (
                  <div key={s}><span style={{ color: '#ff9d6c' }}>{s}</span>{i < arr.length-1 && <span style={{ color: 'var(--muted)' }}>,</span>}</div>
                ))}
              </div>
              <div><span style={{ color: 'var(--muted)' }}>]</span></div>
            </div>
            <div style={{ color: 'var(--muted)' }}>{'}'}</div>
            <div style={{ marginTop: '0.7rem' }}>
              <span style={{ color: 'var(--accent)' }}>$</span>&nbsp;
              <span style={{ display: 'inline-block', width: 7, height: 13, background: 'var(--accent)', verticalAlign: 'middle', animation: 'pulse 1s infinite' }} />
            </div>
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid var(--border)' }}>
            {[['8.97','CGPA'],['3+','Projects'],['#1','Hackathon'],['2026','Graduating']].map(([n,l]) => (
              <div key={l} style={{ flex: 1, textAlign: 'center', padding: '0.9rem 0.5rem', borderRight: '1px solid var(--border)' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent)', display: 'block', lineHeight: 1 }}>{n}</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem', display: 'block' }}>{l}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.2} }
        @media(max-width:900px){.hero-grid{grid-template-columns:1fr !important;gap:2.5rem !important}}
      `}</style>
    </section>
  );
}
