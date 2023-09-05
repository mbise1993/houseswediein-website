import { Lyrics, SongPage, Video } from '@/app/songs/song-page';
import { LYRICS } from '@/app/songs/room-409/lyrics';
import styles from './page.module.css';

export default function Page() {
  return (
    <SongPage title="Room 409" cursor="/images/rose-cursor.png">
      <Video src="https://www.youtube.com/embed/knS59LtVap8?si=gcSqWPX8gGil1ePK" />
      <Lyrics>{LYRICS}</Lyrics>
    </SongPage>
  );
}
