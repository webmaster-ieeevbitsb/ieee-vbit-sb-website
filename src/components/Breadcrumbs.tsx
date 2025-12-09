'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BreadcrumbItem = {
  title: string;
  href: string;
};

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);
  
  const breadcrumbs: BreadcrumbItem[] = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const title = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return { title, href };
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
      <ol className="flex items-center space-x-2">
        <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <span className="mx-2">/</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="font-semibold text-gray-700">{crumb.title}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-blue-600">{crumb.title}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};