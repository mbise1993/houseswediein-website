import { Metadata } from 'next';

import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'About | HWDI',
  description: 'About the band',
};

const H2_CLASSES = 'text-3xl font-bold leading-10';

export default function Page() {
  return (
    <div className="prose px-8">
      <SectionHeading>ABOUT</SectionHeading>
      <p>Metalcore from Austin, TX. Est. 2023.</p>

      <SectionHeading className="mt-6">ASSETS</SectionHeading>
      <ul>
        <li>
          <a target="_blank" href="/assets/logo-black.png">
            Logo (black)
          </a>
        </li>
        <li>
          <a target="_blank" href="/assets/logo-white.png">
            Logo (white)
          </a>
        </li>
      </ul>
    </div>
  );
}
