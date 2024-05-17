import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/restricted-veins/lyrics';

const TITLE = 'restricted veins';

const DOWNLOADS = [
  {
    title: 'Guitar Pro tab',
    url: `/tabs/hwdi-${TITLE}.gp`,
    fileName: `Houses We Die In - ${TITLE}.gp`,
  },
];

export const metadata: Metadata = {
  title: `${TITLE} | HWDI`,
  description: `${TITLE} by Houses We Die In`,
};

export default function Page() {
  return (
    <SongPage title={TITLE} cursor="/cursors/bloody-x-cursor.cur">
      {/* <Video src="https://www.youtube.com/embed/gg899NNIxY4?si=bRh9JIoVjboT0JMy" /> */}
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
