import Image from 'next/image';
import { grants } from '@/data/grantsData';

export const GrantsSection = () => {
  const hasOddItems = grants.length % 2 !== 0;

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Grants</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 items-center">
          {grants.map((grant, index) => {
            const isFeaturedTop = hasOddItems && index === 0;

            return (
              <div
                key={index} 
                className={isFeaturedTop ? "md:col-span-2 flex justify-center" : "w-full"}
              >
                <div className={isFeaturedTop ? "w-full md:w-1/2" : "w-full"}>
                  <Image 
                    src={grant.imageUrl} 
                    alt={grant.title} 
                    width={600} 
                    height={800} 
                    className="rounded-lg shadow-xl mx-auto transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl w-full h-auto" 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};