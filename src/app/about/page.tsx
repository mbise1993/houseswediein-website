import { Metadata } from 'next';

import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'About | HWDI',
  description: 'About the band',
};

export default function Page() {
  return (
    <div className="prose px-8">
      <SectionHeading>ABOUT</SectionHeading>
      <p>
        Metalcore from Austin, TX. FFO: Screaming music, At the Gates riffs,
        panic chords
      </p>

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
