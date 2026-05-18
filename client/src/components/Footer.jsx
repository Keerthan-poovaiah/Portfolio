import { PERSONAL } from '../utils/staticData';

export default function Footer({ data }) {
  const d = data || PERSONAL;
  return (
    <footer style={{ textAlign: 'center', padding: '1.8rem 2.5rem', fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', borderTop: '1px solid var(--border)', letterSpacing: '0.04em' }}>
      Designed & coded by&nbsp;<span style={{ color: 'var(--accent)' }}>Keerthan Poovaiah M M</span>
      &nbsp;·&nbsp;<span style={{ color: 'var(--accent)' }}>2026</span>
      &nbsp;·&nbsp;Bengaluru, India
      &nbsp;·&nbsp;
      <a href={d.github} target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>GitHub</a>
      &nbsp;·&nbsp;
      <a href={d.linkedin} target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>LinkedIn</a>
    </footer>
  );
}
