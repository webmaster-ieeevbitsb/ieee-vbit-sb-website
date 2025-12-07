"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { activities, Activity } from '@/data/activityCatalogueData';
import { AnimatePresence } from 'framer-motion';
import type { ActivityModalProps } from './ActivityModal';

const ActivityModal = dynamic<ActivityModalProps>(() => 
  import('./ActivityModal').then(mod => mod.ActivityModal),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 z-[110]" />,
  }
);

export const ActivityCatalogue = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Activity Catalogue</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="lg:hidden embla -mx-2" ref={emblaRef}>
          <div className="embla__container">
            {activities.map((activity, index) => (
              <div className="embla__slide_activity" key={activity.title}>
                <div className="bg-white rounded-lg shadow-md border h-full flex flex-col overflow-hidden">
                  <div className="relative w-full h-64 bg-slate-100 p-4">
                    <Image 
                      src={activity.imageUrl} 
                      alt={activity.title} 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 768px) 90vw, 40vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-6 text-left flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 flex-grow">{activity.title}</h3>
                    <button onClick={() => setSelectedActivity(activity)} className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md self-start hover:bg-blue-500 transition-colors">Know More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
          {activities.map((activity, index) => (
            <div key={activity.title} onClick={() => setSelectedActivity(activity)} className="cursor-pointer group">
              <div className="w-full max-w-[220px] mx-auto border bg-gray-100 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                <Image 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  width={300} 
                  height={420}
                  className="object-cover w-full h-full"
                  sizes="20vw"
                  priority={index === 0}
                />
              </div>
              <p className="mt-4 font-semibold text-gray-800 group-hover:text-blue-600 text-sm text-center">{activity.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedActivity && <ActivityModal activity={selectedActivity} onClose={() => setSelectedActivity(null)} />}
      </AnimatePresence>
    </section>
  );
};