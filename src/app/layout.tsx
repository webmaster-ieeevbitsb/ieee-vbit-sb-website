import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Favicon from './favicon.png';
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://ieeevbitsb.in'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'IEEE - VBIT SB | Advancing Technology for Humanity',
    template: '%s | IEEE - VBIT SB',
  },
  description: "The official website for the IEEE Student Branch at Vignana Bharathi Institute of Technology.",  
  icons: [{ rel: 'icon', url: Favicon.src }], 
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'IEEE VBIT Student Branch',
  'alternateName': 'IEEE VBIT SB',
  'url': 'https://ieeevbitsb.in',
  'logo': 'https://ieeevbitsb.in/ieee-vbit-sb.png',
  'contactPoint': {
    '@type': 'ContactPoint',
    'email': 'ieeevbitsbdoc@gmail.com',
    'contactType': 'Customer Service',
  },
  'sameAs': [
    'https://www.facebook.com/ieeevbitsb',
    'https://www.instagram.com/ieee_vbitsb/',
    'https://www.linkedin.com/company/ieee-vbit-sb',
    'https://whatsapp.com/channel/0029Vb6F16ALdQekr3hPVz3D',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}