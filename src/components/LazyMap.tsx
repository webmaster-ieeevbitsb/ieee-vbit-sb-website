'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type LazyMapProps = {
  src: string;
};

export const LazyMap = ({ src }: LazyMapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div ref={ref} className="relative w-full h-[450px] bg-slate-200 rounded-lg overflow-hidden">
      <div className="w-full h-full animate-pulse"></div>

      {inView && (
        <motion.iframe
          src={src}          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </div>
  );
};