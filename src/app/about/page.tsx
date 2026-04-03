import { Metadata } from 'next';
import Link from 'next/link';
import { PromoPhoto } from '@/components/promo-photo';
import { SectionHeading } from '@/components/section-heading';

const ASSETS = [
  {
    name: 'Main logo',
    url: '/assets/script-logo.png',
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
      <PromoPhoto
        src="/promos/willow-bw-1.jpg"
        alt="Band photo"
        photographer="reillysbadphotos"
      />
      <p className="mt-4">Metalcore from Austin, Texas.</p>
      <p>
        New EP &quot;A Brief Glimpse of Solace&quot; out now on Paper Wings
        Records.
      </p>

      <SectionHeading className="mt-6">LOGOS</SectionHeading>
      <ul className="flex flex-col gap-4">
        {ASSETS.map((asset) => (
          <li key={asset.url} className="mt-2">
            <img className="h-[40px] mb-2" src={asset.url} alt={asset.name} />
            <a target="_blank" href={asset.url}>
              {asset.name}
            </a>
          </li>
        ))}
      </ul>

      <SectionHeading className="mt-6">OTHER STUFF</SectionHeading>
      <Link href="/epk">EPK</Link>
    </div>
  );
}
