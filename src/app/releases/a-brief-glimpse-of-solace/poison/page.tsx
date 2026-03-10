import { Metadata } from 'next';

import { Downloads, Lyrics, SongPage, Video } from '@/app/releases/song-page';
import { LYRICS } from './lyrics';

const TITLE = 'poison';
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
      cursor="url('https://cdn.cursors-4u.net/previews/bio-hazard-sign-ddd2600b-32.webp') 34 32, auto"
    >
      <Video src="https://www.youtube.com/embed/Q5hx-wDFXgE?si=U7dJUoXaR_W2G2Ee" />
      <Lyrics>{LYRICS}</Lyrics>
      <Downloads downloads={DOWNLOADS} />
    </SongPage>
  );
}
