import Image from 'next/image';
import Link from 'next/link';
import { membershipBanners } from '@/data/membershipData';

export const MembershipSection = () => (
  <section className="pt-10 pb-20 bg-gradient-to-r from-blue-500 to-indigo-600"> 
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-2 text-white">Want to become a member of IEEE?</h2>
      <p className="text-blue-100 mb-12 max-w-3xl mx-auto">
        Here are a few benefits of becoming an IEEE member. So what's holding you back? Join IEEE today!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
        {membershipBanners.map((banner) => (
          <div key={banner.altText} className="flex flex-col items-center gap-8">
            <div className="relative w-full rounded-lg shadow-2xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">
              <Image 
                src={banner.imageUrl} 
                alt={banner.altText} 
                width={1200} 
                height={800} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <Link 
              href={banner.buttonLink}
              className="inline-block bg-transparent text-white font-bold py-3 px-10 rounded-full text-base border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              {banner.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);