import Link from 'next/link';
import { Home, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

// Set the metadata for the page title
export const metadata: Metadata = {
  title: 'Thank You!',
};

export default function ThankYouPage() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Thank You!</h1>
          <p className="text-gray-600 mt-4 text-lg">
            Your message has been sent successfully. We will get back to you as soon as possible.
          </p>
          <Link 
            href="/" 
            className="mt-10 inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-500 transition-colors"
          >
            <Home size={18} />
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}