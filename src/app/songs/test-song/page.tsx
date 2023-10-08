import { Metadata } from 'next';

import { Lyrics, SongPage, Video } from '@/app/songs/song-page';
import { LYRICS } from '@/app/songs/test-song/lyrics';

export const metadata: Metadata = {
  title: 'Test Song | HWDI',
  description: 'Test Song by Houses We Die In',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <SongPage title="Room 409" cursor="/images/rose-cursor.png">
      <Video src="https://www.youtube.com/embed/knS59LtVap8?si=gcSqWPX8gGil1ePK" />
      <Lyrics>{LYRICS}</Lyrics>
    </SongPage>
  );
}
