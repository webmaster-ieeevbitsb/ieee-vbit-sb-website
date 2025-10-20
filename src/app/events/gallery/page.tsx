'use client';

import { useEffect } from 'react';
import { EventCarouselCard } from '@/components/EventCarouselCard';
import { galleryData } from '@/data/galleryData';

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery | IEEE - VBIT SB';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-10 pattern-background-light">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-blue-600">Event Gallery</h1>
        <p className="text-gray-600 mt-4 text-xl">A glimpse into our moments of learning and community.</p>
      </div>

      <div>
        {galleryData.map((event, index) => (
          <EventCarouselCard 
            key={event.slug} 
            event={event} 
            isReversed={index % 2 !== 0} 
          />
        ))}
      </div>
    </div>
  );
}