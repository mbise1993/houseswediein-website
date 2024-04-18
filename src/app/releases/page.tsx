import { SectionHeading } from '@/components/section-heading';
import { Metadata } from 'next';
import Link from 'next/link';

interface Release {
  title: string;
  type: 'Album' | 'EP';
  artworkUrl: string;
  songs: {
    title: string;
    url: string;
  }[];
}

const RELEASES: Release[] = [
  {
    title: 'Faces of the Suffering',
    type: 'EP',
    artworkUrl: '/artwork/ep1-artwork-white-bg.jpg',
    songs: [
      {
        title: 'apparitions',
        url: '/releases/faces-of-the-suffering/apparitions',
      },
      {
        title: 'lonely grave',
        url: '/releases/faces-of-the-suffering/lonely-grave',
      },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Songs | HWDI',
  description: 'Songs by Houses We Die In',
};

export default function Page() {
  return (
    <div className="px-8">
      {RELEASES.map((release) => (
        <div
          key={release.title}
          className="mt-2 flex flex-col gap-4 md:flex-row"
        >
          <div className="flex flex-shrink-0 justify-center">
            <img
              className="max-h-[550px] md:max-w-[350px]"
              src={release.artworkUrl}
              alt="Flyer"
            />
          </div>
          <div>
            <SectionHeading>
              {release.title} ({release.type})
            </SectionHeading>
            <ul className="list-disc px-8">
              {release.songs.map((song) => (
                <li key={`${release.title}-${song.title}`}>
                  <Link className="text-xl" href={song.url}>
                    {song.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
