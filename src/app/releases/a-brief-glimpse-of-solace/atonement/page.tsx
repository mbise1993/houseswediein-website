import { Metadata } from 'next';

import { Lyrics, SongPage, Video } from '@/app/releases/song-page';

const TITLE = 'atonement';

export const metadata: Metadata = {
  title: `${TITLE} | HWDI`,
  description: `${TITLE} by Houses We Die In`,
};

export default function Page() {
  return (
    <SongPage
      title={TITLE}
      cursor="url(https://cdn.cursors-4u.net/previews/gold-cross-82e7a673-32.webp) 32 32, auto"
    >
      <Video videoId="7e2Ohf_XTdc" />
      <Lyrics>[INSTRUMENTAL]</Lyrics>
    </SongPage>
  );
}
