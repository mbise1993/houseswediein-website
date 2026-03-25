import { Metadata } from 'next';

import { Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from './lyrics';

const TITLE = 'all we leave behind';

export const metadata: Metadata = {
  title: `${TITLE} | HWDI`,
  description: `${TITLE} by Houses We Die In`,
};

export default function Page() {
  return (
    <SongPage
      title={TITLE}
      cursor="https://cur.cursors-4u.net/holidays/hol-2/hol114.cur"
    >
      <Video videoId="98U0qxoZSgk" />
      <Lyrics>{LYRICS}</Lyrics>
    </SongPage>
  );
}
