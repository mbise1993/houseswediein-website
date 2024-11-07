import { Metadata } from 'next';

import { SectionHeading } from '@/components/section-heading';
import { PromoPhoto } from '@/components/promo-photo';

const ASSETS = [
  {
    name: 'Main Logo',
    url: '/assets/main-logo.png',
    height: '60px',
  },
  {
    name: 'Alt Logo',
    url: '/assets/alt-logo.png',
    height: '120px',
  },
];

export const metadata: Metadata = {
  title: 'EPK | HWDI',
  description: 'Electronic Press Kit for Houses We Die In',
};

export default function Page() {
  return (
    <div className="prose px-8">
      <SectionHeading>BIO</SectionHeading>
      <div>
        Houses We Die In formed in 2023 as a six-piece metalcore band in Austin,
        Texas. Sonically, they are a modern take on the golden era of metalcore
        from the early to mid 2000s. They also strive to pay homage to the
        forefathers of the genre in their live shows, bringing an infectious
        energy and stage presence to match the intensity of the music.
      </div>
      <SectionHeading className="mt-6">MUSIC</SectionHeading>
      <ul className="list-disc pl-4">
        <li>
          <a
            href="https://open.spotify.com/album/5gFVZHrUvH7B9oeNdmCyzp?si=vZ_3UcMYQryCIU0x5dGszg"
            target="_blank"
          >
            Faces of the Suffering EP
          </a>{' '}
          (May 2024) - Released on CD via{' '}
          <a href="https://www.instagram.com/dsfprecords/" target="_blank">
            ds//fp records
          </a>{' '}
          and on cassette via{' '}
          <a href="https://www.instagram.com/owtg.tx/" target="_blank">
            ...out with the goons
          </a>
          .
        </li>
      </ul>
      <SectionHeading className="mt-6">
        INFLUENCES & SIMILAR ARTISTS
      </SectionHeading>
      <div>
        Misery Signals, On Broken Wings, Unearth, Parkway Drive,
        SeeYouSpaceCowboy, Dying Wish, Counterparts
      </div>
      <SectionHeading className="mt-6">LIVE FOOTAGE</SectionHeading>
      <div>
        March 2024 at Arnold House (Austin, TX)
        <iframe
          id="video"
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/Tqw6LdpF7fE?si=SwAiU_pw5MOEsI84"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4">
        July 2024 at The Che Cafe (San Diego, CA)
        <iframe
          id="video"
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/6IWw8wBijnE?si=yPDuCFXT7W7bma1Z"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <SectionHeading className="mt-8">NOTABLE SHOWS</SectionHeading>
      <ul className="list-disc pl-4">
        <li>May 2024 - Opened day 1 of Big Texas Metal Fest in Austin, TX</li>
        <li>July 2024 - Two-week DIY southwest tour (to LA and back)</li>
        <li>
          July 2024 - Opened for I Set My Friends on Fire in Corpus Christi, TX
        </li>
        <li>
          October 2024 - Opened for Unity TX, Silly Goose, and Soulkeeper at
          Empire Control Room in Austin, TX
        </li>
        {/* <li>December 2024 - No Sleep Fest + Texas run with Lacerated</li> */}
      </ul>
      <SectionHeading className="mt-6">LOGOS</SectionHeading>
      <ul className="flex flex-col gap-4">
        {ASSETS.map((asset) => (
          <li key={asset.url}>
            <img
              style={{ height: asset.height }}
              src={asset.url}
              alt={asset.name}
            />
            <a target="_blank" href={asset.url}>
              {asset.name}
            </a>
          </li>
        ))}
      </ul>
      <SectionHeading className="mt-6">PROMO PHOTOS</SectionHeading>
      <PromoPhoto
        src="/promos/group-1.jpg"
        alt="Group photo 1"
        photographer="reillysbadphotos"
      />
      <PromoPhoto
        className="mt-4"
        src="/promos/group-2.jpg"
        alt="Group photo 2"
        photographer="reillysbadphotos"
      />
      <PromoPhoto
        className="mt-4"
        src="/promos/chess-club-1.jpg"
        alt="Chess Club"
        photographer="coreylaynephoto"
      />
      <PromoPhoto
        className="mt-4"
        src="/promos/utsa-1.jpg"
        alt="UTSA 1"
        photographer="glombroski"
      />
      <PromoPhoto
        className="mt-4"
        src="/promos/valhalla-2.jpg"
        alt="Valhalla 2"
        photographer="reillysbadphotos"
      />
      <SectionHeading className="mt-6">LINKS & CONTACT INFO</SectionHeading>
      <ul className="list-disc pl-4">
        <li>
          Main contact: Email <b>houseswedieintx@gmail.com</b> or DM us on
          Instagram
        </li>
        <li>
          <a href="https://www.instagram.com/houseswedieintx/" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.x.com/houseswedieintx/" target="_blank">
            X
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/artist/5p62veiIRA1sgEM1miwamk?si=6XCcBDyIRrq190Cv9doUYw"
            target="_blank"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCJ1qOlHOO03LOrp3Kb7zluA"
            target="_blank"
          >
            YouTube
          </a>
        </li>
      </ul>
      <SectionHeading className="mt-6">THE TEAM</SectionHeading>
      <ul className="list-disc pl-4">
        <li>
          <a href="https://www.instagram.com/hopeless.optimist/">
            Matthew Gonzalez
          </a>{' '}
          - Vocals
        </li>
        <li>
          <a href="https://www.instagram.com/matthew.bise/" target="_blank">
            Matthew Bise
          </a>{' '}
          - Guitar
        </li>
        <li>
          <a href="https://www.instagram.com/toscan00/" target="_blank">
            Matthew Toscano
          </a>{' '}
          - Guitar
        </li>
        <li>
          <a href="https://www.instagram.com/ampsvsslamps/" target="_blank">
            Jake Reeves
          </a>{' '}
          - Guitar
        </li>
        <li>
          <a href="https://www.instagram.com/ethnthyr/" target="_blank">
            Ethan Thayer
          </a>{' '}
          - Bass
        </li>
        <li>
          <a href="https://www.instagram.com/a.r.y.l/" target="_blank">
            Lucky Trejo
          </a>{' '}
          - Drums
        </li>
        <li>
          <a href="https://www.instagram.com/helloarjana/" target="_blank">
            Arjana Almaneih
          </a>{' '}
          - Management, booking, merch
        </li>
      </ul>
    </div>
  );
}
