import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal';
import { submitContactForm } from '../utils/api';

const INPUT_STYLE = {
  width: '100%', background: 'var(--surface2)', border: '1px solid var(--border)',
  borderRadius: 4, padding: '0.85rem 1rem', color: 'var(--text)',
  fontFamily: 'var(--sans)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s',
};

export default function Contact() {
  const { ref, controls } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitContactForm(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.response?.data?.message || 'Something went wrong. Please email me directly.');
    }
  };

  const contactLinks = [
    { icon: '✉️', label: 'Email', value: 'keerthan11poovaiah@gmail.com', href: 'mailto:keerthan11poovaiah@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/keerthan-poovaiah', href: 'https://linkedin.com/in/keerthan-poovaiah' },
    { icon: '⌨️', label: 'GitHub', value: 'github.com/keerthan-poovaiah', href: 'https://github.com/keerthan-poovaiah' },
    { icon: '📱', label: 'Phone', value: '+91 636 424 8737', href: 'tel:+916364248737' },
  ];

  return (
    <section id="contact" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '5.5rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }} className="contact-grid">

        {/* Left — heading + links */}
        <motion.div ref={ref} variants={fadeUpVariants} initial="hidden" animate={controls}>
          <div className="section-label">05. Let's Talk</div>
          <h2 style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.85rem' }}>
            Ready to<br /><span style={{ color: 'var(--accent)' }}>Build</span><br />Something Real
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(239,239,239,0.5)', lineHeight: 1.8, maxWidth: 380, marginBottom: '2rem' }}>
            Actively seeking SDE roles — that involves writing systems that scale.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {contactLinks.map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', padding: '1.1rem 1.3rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--text)', transition: 'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.transform='translateX(4px)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateX(0)'}}
              >
                <span style={{ fontSize: '1.1rem' }}>{l.icon}</span>
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>{l.label}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{l.value}</span>
                </div>
                <span style={{ color: 'var(--muted)' }}>→</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Contact form */}
        <motion.div variants={fadeUpVariants} custom={1} initial="hidden" animate={controls}
          style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 8, padding: '2rem' }}
        >
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Send a Message</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1.5rem', fontFamily: 'var(--mono)' }}>// Stored in MongoDB via Express API</p>

          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--accent)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>Message received! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Name</label>
                <input name="name" value={form.name} onChange={onChange} required placeholder="Your name"
                  style={INPUT_STYLE}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Email</label>
                <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="your@email.com"
                  style={INPUT_STYLE}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Message</label>
                <textarea name="message" value={form.message} onChange={onChange} required placeholder="What's on your mind?" rows={5}
                  style={{ ...INPUT_STYLE, resize: 'vertical', minHeight: 120 }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              {status === 'error' && <p style={{ fontSize: '0.78rem', color: 'var(--accent3)' }}>{errorMsg}</p>}
              <button type="submit" disabled={status === 'loading'}
                style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', background: 'var(--accent)', color: '#000', padding: '0.9rem', border: 'none', borderRadius: 2, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s', opacity: status === 'loading' ? 0.7 : 1 }}
                onMouseEnter={e => { if(status !== 'loading') e.target.style.background = 'var(--accentd)'; }}
                onMouseLeave={e => e.target.style.background = 'var(--accent)'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
