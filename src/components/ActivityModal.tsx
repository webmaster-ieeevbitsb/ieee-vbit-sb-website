'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import type { Activity } from '@/data/activityCatalogueData';

export interface ActivityModalProps {
  activity: Activity;
  onClose: () => void;
}

export const ActivityModal = ({ activity, onClose }: ActivityModalProps) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-[110] p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white rounded-lg shadow-xl max-w-5xl w-full relative max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"><X size={24} /></button>
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="w-full h-full relative min-h-[400px]">
            <Image src={activity.modalContent.imageUrl} alt={activity.modalContent.title} fill className="object-contain rounded-md" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">{activity.modalContent.title}</h2>
            <p className="text-blue-600 font-semibold mb-4">{activity.modalContent.date}</p>
            <p className="text-gray-700 leading-relaxed text-justify">{activity.modalContent.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
);