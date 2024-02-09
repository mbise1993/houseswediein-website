import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/ep1/lonely-grave/lyrics';

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
      <Video src="https://www.youtube.com/embed/knS59LtVap8?si=gcSqWPX8gGil1ePK" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
