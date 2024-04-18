import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/lonely-grave/lyrics';

const DOWNLOADS = [
  {
    title: 'Guitar Pro tab',
    url: '/tabs/hwdi-lonely-grave.gp',
    fileName: 'Houses We Die In - lonely grave.gp',
  },
];

export const metadata: Metadata = {
  title: 'lonely grave | HWDI',
  description: 'lonely grave by Houses We Die In',
};

export default function Page() {
  return (
    <SongPage title="lonely grave" cursor="/cursors/gravestone-cursor.cur">
      <Video src="https://www.youtube.com/embed/mgckJq8Rtk0?si=yOHhT4WVxWVBdS6v" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
