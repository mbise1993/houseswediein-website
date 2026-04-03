import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from './lyrics';

const TITLE = 'flowers in february';
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
      cursor="url('https://cdn.cursors-4u.net/previews/orange-cat-dd3fd578-32.webp') 32 32, auto"
    >
      <Video videoId="bUaryqG22YU" />
      <Lyrics>{LYRICS}</Lyrics>
      {/* <img
        className="mt-4 inline-block"
        src="/images/weasley.png"
        alt="Weasley"
        height={100}
        width={100}
      /> */}
      <img
        className="mt-4 ml-4 inline-block"
        src="/images/weasley-paw-print.png"
        alt="Weasley paw print"
        height={80}
        width={80}
      />
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
