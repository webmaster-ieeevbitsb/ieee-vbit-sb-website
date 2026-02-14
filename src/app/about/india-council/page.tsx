import Image from "next/image";
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FadeIn } from '@/components/FadeIn';
import { FeatureCard } from "@/components/FeatureCard";
import { Globe, Users, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IEEE India Council",
};

export default function AboutIndiaCouncilPage() {
  return (
    <div className="bg-white text-gray-800">
      <FadeIn>
        <section className="py-12">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                IEEE India Council
              </h1>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
              <p className="text-gray-700 leading-relaxed text-justify text-lg">
                The IEEE India Council is the umbrella organization that coordinates IEEE activities in India. 
                It assists the IEEE Sections in India in their activities and coordinates inter-section 
                events. Established on <strong>May 20, 1976</strong>, the IEEE India Council is one of the 
                most active councils in the Asia Pacific Region (Region 10). It represents the 
                collective interests of the diverse technical community across the country.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="https://ieeeindiacouncil.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md text-base hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Visit Official Website
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/placeholders/ieee_india_council_logo.webp"
                alt="IEEE India Council Logo"
                width={500}
                height={300}
                objectFit="contain"
                className="drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>
      
      {/* Detailed Info Section */}
      <AnimateOnScroll>
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <FeatureCard 
                icon={<Globe size={40} className="text-blue-600" />} 
                title="13 Sections"
              >
                The Council coordinates the activities of 13 Sections: Bangalore, Bombay, Calcutta, Delhi, 
                Gujarat, Hyderabad, Kerala, Kharagpur, Madras, Pune, Uttar Pradesh, Vizag Bay, and Roorkee.
              </FeatureCard>

              <FeatureCard 
                icon={<Calendar size={40} className="text-blue-600" />} 
                title="INDICON"
              >
                <strong>INDICON</strong> is the flagship annual conference of the IEEE India Council. 
                It brings together professionals, researchers, and students to discuss the latest 
                advancements in technology and engineering.
              </FeatureCard>

              <FeatureCard 
                icon={<Users size={40} className="text-blue-600" />} 
                title="Student Activities"
              >
                The Council organizes the All India Student-Young Professionals-Women in Engineering Congress (AISYWC), 
                a massive annual gathering that fosters networking and leadership among students across India.
              </FeatureCard>

            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24 max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Mission & Objectives
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify text-lg">
              <p>
                To be the platform for the IEEE Sections in India to collaborate and work together for the 
                advancement of technology and for the benefit of humanity. The Council aims to encourage 
                and support the Sections in their efforts to engage members, students, and professionals 
                in technical activities, continuing education, and community service.
              </p>
              <p>
                The Council also publishes a newsletter, <strong>"IEEE India Info,"</strong> which circulates 
                news regarding the activities of Sections and Student Branches, keeping the community connected 
                and informed about opportunities and achievements.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}