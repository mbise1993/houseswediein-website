import { Metadata } from 'next';

import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'JESUS IS COMING | HWDI',
  description: 'Prepare to receive Him',
};

export default function Page() {
  return (
    <div className="prose px-8">
      <SectionHeading>PREPARE</SectionHeading>
      <img
        className="h-[240px]"
        src="/images/jesus-coming-soon.gif"
        alt="Jesus is coming soon"
      />
    </div>
  );
}
