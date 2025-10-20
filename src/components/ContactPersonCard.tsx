import Image from 'next/image';
import type { ContactPerson } from '@/data/contactData';

export const ContactPersonCard = ({ name, role, email, imageUrl }: ContactPerson) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 text-center text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
      
      <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/50">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-3xl font-bold">{name}</h3>
      <p className="text-blue-200 font-semibold text-xl mt-2">{role}</p>
      <a 
        href={`mailto:${email}`} 
        className="text-lg text-gray-300 hover:text-white transition-colors mt-4 inline-block break-all"
      >
        {email}
      </a>
    </div>
  );
};