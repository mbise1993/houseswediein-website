'use client';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/util/cn';
import React from 'react';

interface SongPageProps {
  className?: string;
  title: string;
  cursor?: string;
  children: React.ReactNode;
}

export const SongPage = ({
  className = '',
  title,
  cursor,
  children,
}: SongPageProps) => {
  React.useEffect(() => {
    if (!cursor) {
      return;
    }

    document.body.style.cursor = `url(${cursor}), auto`;

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [cursor]);

  return (
    <div className={cn('m-auto max-w-xl', className)}>
      <h2 className="px-4 text-center text-3xl font-medium">{title}</h2>
      {children}
    </div>
  );
};

interface VideoProps {
  src: string;
}

export const Video = ({ src }: VideoProps) => {
  return (
    <iframe
      id="video"
      className="mt-4 aspect-video w-full md:px-4"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

interface LyricsProps {
  children: React.ReactNode;
}

export const Lyrics = ({ children }: LyricsProps) => {
  return (
    <div id="lyrics" className="mt-4 px-4">
      <SectionHeading className="text-2xl">LYRICS</SectionHeading>
      <div>{children}</div>
    </div>
  );
};

interface DownloadsProps {
  downloads: { title: string; url: string; fileName: string }[];
}

export const Downloads = ({ downloads }: DownloadsProps) => {
  return (
    <div id="downloads" className="mt-6 px-4">
      <SectionHeading className="text-2xl">DOWNLOADS</SectionHeading>
      <ul>
        {downloads.map((download) => (
          <li key={download.url}>
            {download.title}&nbsp;
            <a
              className="cursor-pointer"
              href={download.url}
              target="_blank"
              download={download.fileName}
            >
              [DOWNLOAD]
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
