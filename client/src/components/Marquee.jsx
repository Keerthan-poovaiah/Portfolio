import { STACK_MARQUEE } from '../utils/staticData';

export default function Marquee() {
  const items = [...STACK_MARQUEE, ...STACK_MARQUEE];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '0.85rem 0', background: 'var(--surface)', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', gap: '2.5rem', width: 'max-content', animation: 'marquee 38s linear infinite' }}>
        {items.map((t, i) => (
          <span key={i} style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: i % 2 === 1 ? 'var(--accent)' : 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            {i % 2 === 1 ? '✦' : t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
