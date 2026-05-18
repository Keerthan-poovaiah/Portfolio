import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 900) return;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = mouseX + 'px';
        dot.current.style.top = mouseY + 'px';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring.current) {
        ring.current.style.left = ringX + 'px';
        ring.current.style.top = ringY + 'px';
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => ring.current && (ring.current.style.transform = 'translate(-50%,-50%) scale(1.8)');
    const onLeave = () => ring.current && (ring.current.style.transform = 'translate(-50%,-50%) scale(1)');

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    animate();
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 900) return null;

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9999,
        width: 5, height: 5, borderRadius: '50%',
        background: 'var(--accent)', transform: 'translate(-50%,-50%)',
        transition: 'opacity 0.2s',
      }} />
      <div ref={ring} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9998,
        width: 32, height: 32, borderRadius: '50%',
        border: '1px solid rgba(0,232,122,0.5)',
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.3s ease',
      }} />
    </>
  );
}
