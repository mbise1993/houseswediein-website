import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/apparitions/lyrics';

const DOWNLOADS = [
  {
    title: 'Guitar Pro tab',
    url: '/tabs/hwdi-apparitions.gp',
    fileName: 'Houses We Die In - apparitions.gp',
  },
];

export const metadata: Metadata = {
  title: 'apparitions | HWDI',
  description: 'apparitions by Houses We Die In',
};

export default function Page() {
  return (
    <SongPage title="apparitions" cursor="/cursors/ghost-cursor.cur">
      <Video src="https://www.youtube.com/embed/gg899NNIxY4?si=bRh9JIoVjboT0JMy" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
