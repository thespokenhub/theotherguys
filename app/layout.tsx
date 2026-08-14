import type { Metadata } from 'next';
import { Caveat, IBM_Plex_Mono, Instrument_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Other Guys — B2B SaaS content studio',
    template: '%s — The Other Guys',
  },
  description:
    'We make content for the buyer, and for the machines that now recommend you. A two-person B2B SaaS content studio taking four clients at a time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSans.variable} ${ibmPlexMono.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
