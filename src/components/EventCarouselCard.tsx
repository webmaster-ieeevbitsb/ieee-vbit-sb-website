'use client';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { Lightbox } from './Lightbox';
import type { GalleryEventData } from '@/data/galleryData';

type EventCarouselCardProps = {
  event: GalleryEventData;
  isReversed?: boolean;
};

export const EventCarouselCard = ({ event, isReversed = false }: EventCarouselCardProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true })]);

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            
            <div className={`w-full md:w-1/2 ${isReversed ? 'md:order-last' : ''}`}>
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {event.images.map((src, index) => (
                    <div className="embla__slide_event_card_final" key={index}>
                      <button onClick={() => setSelectedImageIndex(index)} className="w-full h-full block">
                        {/* 
                          THIS IS THE DEFINITIVE FIX:
                          We are manually creating a 16:9 aspect ratio container using the "padding-bottom" trick.
                          This does not rely on any plugins and is guaranteed to work.
                        */}
                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                          <div className="absolute inset-0 rounded-lg overflow-hidden shadow-md group">
                            <Image
                              src={src}
                              alt={`${event.title} image ${index + 1}`}
                              layout="fill"
                              objectFit="contain"
                              className="transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">{event.title}</h2>
              <p className="text-blue-500 mt-3 text-lg sm:text-xl font-semibold">{event.year}</p>
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <Lightbox 
            key={selectedImageIndex}
            images={event.images} 
            initialIndex={selectedImageIndex} 
            onClose={() => setSelectedImageIndex(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};