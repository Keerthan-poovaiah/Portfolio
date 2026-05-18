import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScrollReveal = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return { ref, controls };
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};
