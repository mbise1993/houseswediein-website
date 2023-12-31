import { Metadata } from 'next';

import { SectionHeading } from '@/components/section-heading';

const ASSETS = [
  {
    name: 'Logo (black)',
    url: '/assets/logo-black.png',
  },
  {
    name: 'Logo (white)',
    url: '/assets/logo-white.png',
  },
  {
    name: 'Logo alt (black)',
    url: '/assets/logo-alt-black.png',
  },
  {
    name: 'Logo alt (white)',
    url: '/assets/logo-alt-white.png',
  },
];

export const metadata: Metadata = {
  title: 'About | HWDI',
  description: 'About the band',
};

export default function Page() {
  return (
    <div className="prose px-8">
      <SectionHeading>ABOUT</SectionHeading>
      <img
        className="md:h-[400px] md:w-full"
        src="/images/horizontal-promo-1.jpg"
        alt="full band photo"
      />
      <p className="mt-4">Metalcore from Austin, Texas.</p>

      <SectionHeading className="mt-6">LOGOS</SectionHeading>
      <ul className="flex flex-col gap-4">
        {ASSETS.map((asset) => (
          <li key={asset.url}>
            <img className="h-[60px]" src={asset.url} alt={asset.name} />
            <a target="_blank" href={asset.url}>
              {asset.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
