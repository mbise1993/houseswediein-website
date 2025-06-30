import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from '@/app/releases/saint-valentines-day-massacre/cigarette-burned-visions/lyrics';

const TITLE = 'cigarette burned visions';

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
      cursor="https://cur.cursors-4u.net/others/oth-1/oth3.png"
    >
      <Video src="https://www.youtube.com/embed/xjpYQlTvUG8?si=2RKgLJBSNLDuJoWs" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
