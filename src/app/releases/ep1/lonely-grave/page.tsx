import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/ep1/lonely-grave/lyrics';

const DOWNLOADS = [
  {
    title: 'HWDI - Lonely Grave.gp',
    url: '',
  },
];

export const metadata: Metadata = {
  title: 'Test Song | HWDI',
  description: 'Test Song by Houses We Die In',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <SongPage title="Lonely Grave" cursor="/cursors/gravestone-cursor.cur">
      {/* <Video src="https://www.youtube.com/embed/knS59LtVap8?si=gcSqWPX8gGil1ePK" /> */}
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
