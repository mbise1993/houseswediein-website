import { Metadata } from 'next';
import Link from 'next/link';
import { PromoPhoto } from '@/components/promo-photo';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'About | HWDI',
  description: 'About the band',
};

export default function Page() {
  return (
    <div className="prose px-8">
      <SectionHeading>ABOUT</SectionHeading>
      <PromoPhoto
        src="/promos/group-orange-sm.jpg"
        alt="Band photo"
        photographer="dylandistance"
      />
      <p className="mt-4">Metalcore from Austin, Texas.</p>
      <p>New EP &quot;A Brief Glimpse of Solace&quot; out now.</p>
      <a
        className="block w-[60px]"
        href="https://papercutrecordings.com"
        target="_blank"
      >
        <img
          className="w-[60px]"
          src="/images/papercut-logo.avif"
          alt="Papercut Recordings logo"
        />
      </a>

      {/* <SectionHeading className="mt-6">LOGOS</SectionHeading>
      <ul className="flex flex-col gap-4">
        {ASSETS.map((asset) => (
          <li key={asset.url} className="mt-2">
            <img className="h-[40px] mb-1" src={asset.url} alt={asset.name} />
            <a target="_blank" href={asset.url}>
              {asset.name}
            </a>
          </li>
        ))}
      </ul> */}

      {/* <SectionHeading className="mt-6">OTHER STUFF</SectionHeading> */}
      <Link href="/epk">EPK</Link>
    </div>
  );
}
