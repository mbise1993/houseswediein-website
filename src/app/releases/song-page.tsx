'use client';
import React from 'react';

interface SongPageProps {
  className?: string;
  title: string;
  cursor?: string;
  children: React.ReactNode;
}

export const SongPage = ({
  className,
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
    <div className={className}>
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
  return <div className="mt-4 px-4 md:text-center">{children}</div>;
};
