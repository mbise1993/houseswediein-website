import { Metadata } from 'next';

import { Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/political-tragedy/lyrics';

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
      <Video src="https://www.youtube.com/embed/8KvZ9ak_i-U?si=gXk9pMLKQw90NAZ_" />
      <Lyrics>{LYRICS}</Lyrics>
    </SongPage>
  );
}
