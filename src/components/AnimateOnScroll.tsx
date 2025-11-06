'use client';

import { motion, useAnimation, useReducedMotion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, ReactNode } from 'react';

type AnimateOnScrollProps = {
  children: ReactNode;
};

export const AnimateOnScroll = ({ children }: AnimateOnScrollProps) => {
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -15% 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: Variants = shouldReduceMotion 
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1 } },
      }
    : {
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            type: 'spring',
            stiffness: 250, 
            damping: 30,
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};