import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/lonely-grave/lyrics';

const TITLE = 'lonely grave';

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
    <SongPage title={TITLE} cursor="/cursors/gravestone-cursor.cur">
      <Video src="https://www.youtube.com/embed/mgckJq8Rtk0?si=yOHhT4WVxWVBdS6v" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
