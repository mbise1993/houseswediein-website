import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/shattered-hands/lyrics';

const TITLE = 'shattered hands';

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
    <SongPage title={TITLE} cursor="/cursors/zombie-hand-cursor.cur">
      <Video src="https://www.youtube.com/embed/R8G27Bl_fmI?si=_jxbcRkb0ODKLPd3" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
