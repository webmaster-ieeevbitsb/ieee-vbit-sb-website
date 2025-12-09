'use client'; 

import { useState, useEffect } from 'react';
import { EventCarouselCard } from '@/components/EventCarouselCard';
import { galleryData } from '@/data/galleryData';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FadeIn } from '@/components/FadeIn';
import { AnimatePresence } from 'framer-motion';
import { Lightbox } from '@/components/Lightbox';
import type { GalleryEventData } from '@/data/galleryData';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function GalleryPage() {
  const [activeLightbox, setActiveLightbox] = useState<{ event: GalleryEventData; initialIndex: number } | null>(null);

  useEffect(() => {
    document.title = 'Gallery | IEEE - VBIT SB';
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (event: GalleryEventData, imageIndex: number) => {
    setActiveLightbox({ event, initialIndex: imageIndex });
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
  };

  return (
    <div className="py-10 pattern-background-light">
      <FadeIn>
        <div className="text-center mb-8 container mx-auto px-8 sm:px-12 lg:px-24">
          <h1 className="text-5xl font-bold text-blue-600">Event Gallery</h1>
          <p className="text-gray-600 mt-4 text-xl">A glimpse into our moments of learning and community.</p>
        </div>
      </FadeIn>
      
      <div>
        {galleryData.map((event, index) => (
          <AnimateOnScroll key={event.slug}>
            <div className="container mx-auto px-8 sm:px-12 lg:px-24 py-10">
              <Breadcrumbs />
              <EventCarouselCard 
                event={event} 
                isReversed={index % 2 !== 0} 
                onImageClick={(imageIndex) => openLightbox(event, imageIndex)} 
              />
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimatePresence>
        {activeLightbox && (
          <Lightbox
            images={activeLightbox.event.images}
            initialIndex={activeLightbox.initialIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}