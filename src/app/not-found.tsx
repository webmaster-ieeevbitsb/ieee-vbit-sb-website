import Link from 'next/link';
import { Home, Frown } from 'lucide-react';
import type { Metadata } from 'next';

// Set the metadata for the page title
export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFoundPage() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Frown className="w-20 h-20 text-blue-500 mx-auto mb-6" strokeWidth={1.5} />
          <h1 className="text-8xl md:text-9xl font-bold text-blue-600">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Sorry, we couldn't find the page you were looking for. It might have been moved, deleted, or you may have typed the address incorrectly.
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