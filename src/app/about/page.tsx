import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | HWDI',
  description: 'About the band',
};

export default function Page() {
  return <div className="px-8">Metalcore from Austin, TX. Est. 2023.</div>;
}
