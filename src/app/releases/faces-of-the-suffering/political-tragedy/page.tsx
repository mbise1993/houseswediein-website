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
    <SongPage title={TITLE} cursor="/cursors/statue-of-liberty-cursor.cur">
      {/* <Video src="https://www.youtube.com/embed/gg899NNIxY4?si=bRh9JIoVjboT0JMy" /> */}
      <Lyrics>{LYRICS}</Lyrics>
    </SongPage>
  );
}
