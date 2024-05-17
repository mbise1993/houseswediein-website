import { Metadata } from 'next';

import { Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/all-we-leave-behind/lyrics';

const TITLE = 'all we leave behind';

export const metadata: Metadata = {
  title: `${TITLE} | HWDI`,
  description: `${TITLE} by Houses We Die In`,
};

export default function Page() {
  return (
    <SongPage title={TITLE} cursor="/cursors/broken-heart-cursor.cur">
      {/* <Video src="https://www.youtube.com/embed/gg899NNIxY4?si=bRh9JIoVjboT0JMy" /> */}
      <Lyrics>{LYRICS}</Lyrics>
    </SongPage>
  );
}
