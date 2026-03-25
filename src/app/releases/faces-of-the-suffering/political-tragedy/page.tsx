import { Metadata } from 'next';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/political-tragedy/lyrics';
import { Lyrics, SongPage, Video } from '@/app/releases/song-page';

const TITLE = 'political tragedy';

export const metadata: Metadata = {
  title: `${TITLE} | HWDI`,
  description: `${TITLE} by Houses We Die In`,
};

export default function Page() {
  return (
    <SongPage
      title={TITLE}
      cursor="https://ani.cursors-4u.net/others/oth-9/oth889.cur"
    >
      <Video videoId="8KvZ9ak_i-U" />
      <Lyrics>{LYRICS}</Lyrics>
    </SongPage>
  );
}
