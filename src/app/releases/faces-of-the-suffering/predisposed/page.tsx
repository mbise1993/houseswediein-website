import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/faces-of-the-suffering/predisposed/lyrics';

const TITLE = 'predisposed';

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
      cursor="https://cur.cursors-4u.net/others/oth-3/oth208.cur"
    >
      <Video src="https://www.youtube.com/embed/ORLKGcB0Usg?si=jGFYl5EKKSkoEzOw" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
