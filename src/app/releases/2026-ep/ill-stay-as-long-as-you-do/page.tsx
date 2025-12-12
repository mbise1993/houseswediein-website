import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/2026-ep/ill-stay-as-long-as-you-do/lyrics';

const TITLE = "i'll stay as long as you do";
const URL_SAFE_TITLE = TITLE.replaceAll(' ', '-').replaceAll("'", '');

const DOWNLOADS = [
  {
    title: 'Tabs (PDF)',
    url: `/tabs/hwdi-${URL_SAFE_TITLE}.pdf`,
    fileName: `Houses We Die In - ${TITLE}.pdf`,
  },
  {
    title: 'Tabs (Guitar Pro)',
    url: `/tabs/hwdi-${URL_SAFE_TITLE}.gp`,
    fileName: `Houses We Die In - ${TITLE}.gp`,
  },
];

export const metadata: Metadata = {
  title: `${TITLE} | HWDI`,
  description: `${TITLE} by Houses We Die In`,
};

export default function Page() {
  return (
    <SongPage
      title={TITLE}
      cursor="https://cur.cursors-4u.net/holidays/hol-3/hol246.png"
    >
      <Video src="https://www.youtube.com/embed/bUaryqG22YU?si=07AORxIkxndgxBLJ" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
