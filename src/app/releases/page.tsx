import { RELEASES } from '@/app/releases/releases';
import { SectionHeading } from '@/components/section-heading';
import { Metadata } from 'next';
import Link from 'next/link';

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
              height={550}
              width={350}
              src={release.artworkUrl}
              alt="Flyer"
            />
          </div>
          <div>
            <SectionHeading>{release.title}</SectionHeading>
            <ol className="list-decimal px-8">
              {release.songs.map((song) => (
                <li key={`${release.title}-${song.title}`}>
                  <Link
                    className={`text-xl ${
                      song.unreleased
                        ? 'pointer-events-none text-neutral-400 no-underline'
                        : ''
                    }`}
                    href={song.url}
                  >
                    {song.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}
