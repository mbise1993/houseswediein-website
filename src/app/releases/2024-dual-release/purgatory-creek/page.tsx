import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/2024-dual-release/purgatory-creek/lyrics';

const TITLE = 'purgatory creek';

const DOWNLOADS = [
  {
    title: 'Tabs (PDF)',
    url: `/tabs/hwdi-${TITLE.replaceAll(' ', '-')}.pdf`,
    fileName: `Houses We Die In - ${TITLE}.pdf`,
  },
  {
    title: 'Tabs (Guitar Pro)',
    url: `/tabs/hwdi-${TITLE.replaceAll(' ', '-')}.gp`,
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
      cursor="https://cur.cursors-4u.net/holidays/hol-1/hol18.cur"
    >
      <Video src="https://www.youtube.com/embed/-tKRsiR3dd0?si=XLxhx1wIvkzkLEHj" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
