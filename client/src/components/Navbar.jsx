import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Wins' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.1rem 2.5rem',
        background: scrolled ? 'rgba(8,9,14,0.92)' : 'rgba(8,9,14,0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s',
      }}
    >
      <button
        onClick={() => scrollTo('#hero')}
        style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--accent)', background: 'none', border: 'none', letterSpacing: '0.04em' }}
      >
        &lt;keerthan /&gt;
      </button>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="nav-desktop">
        {links.map(l => (
          <li key={l.href}>
            <button onClick={() => scrollTo(l.href)} style={{
              fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--muted)', background: 'none',
              border: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href="mailto:keerthan11poovaiah@gmail.com" style={{
          fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)',
          border: '1px solid var(--accent)', padding: '0.45rem 1.1rem', borderRadius: '2px',
          letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#000'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
        >
          Hire Me
        </a>
        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)}
          style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', padding: '4px' }}
        >
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text)' }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'fixed', top: 56, left: 0, right: 0,
            background: 'rgba(8,9,14,0.97)', padding: '2rem',
            display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none',
            borderBottom: '1px solid var(--border)', zIndex: 99,
          }}
        >
          {links.map(l => (
            <li key={l.href}>
              <button onClick={() => scrollTo(l.href)} style={{
                fontFamily: 'var(--mono)', fontSize: '0.9rem', color: 'var(--text)',
                background: 'none', border: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                {l.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
