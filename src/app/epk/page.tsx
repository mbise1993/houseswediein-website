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
            &quot;Faces of the Suffering&quot; EP
          </a>{' '}
          (May 2024) - Released on CD via{' '}
          <a href="https://www.instagram.com/dsfprecords/" target="_blank">
            ds//fp records
          </a>{' '}
          and on cassette via{' '}
          <a href="https://www.instagram.com/owtg.tx/" target="_blank">
            ...out with the goons
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/album/6u6fugNTVWhavspu2yYb5d?si=gGvtNfSBQLGVXyuoeJ87pg"
            target="_blank"
          >
            &quot;portraits of you // purgatory creek&quot; singles
          </a>{' '}
          (December 2024)
        </li>
        <li>
          <a
            href="https://open.spotify.com/album/1ZU4WHoH80cnuqPN6GR8Mw?si=eYHFtlYlTCqec2A1jQCc-w"
            target="_blank"
          >
            &quot;Saint Valentine&apos;s Day Massacre&quot; single
          </a>{' '}
          (February 2025)
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
        At The White Swan (Houston, TX)
        <iframe
          id="video"
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/WUBqaz-rR3Y?si=JY0e3x1wiWYVLUD9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
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
      <SectionHeading className="mt-8">NOTABLE SHOWS</SectionHeading>
      <ul className="list-disc pl-4">
        <li>
          <b>May 2024</b> - Opened day 1 of Big Texas Metal Fest in Austin, TX
        </li>
        <li>
          <b>July 2024</b> - Two-week DIY southwest tour (to LA and back)
        </li>
        <li>
          <b>December 2024</b> - No Sleep Fest pre-show + Texas/New Orleans run
          with Lacerated
        </li>
        <li>
          <b>March 2025</b> - Two-week DIY southeast tour (to Florida and back)
          with Don&apos;t Fear the End
        </li>
        <li>
          <b>June 2025</b> - Two-week Texas tour supporting Thus Spoke
          Zarathustra&apos;s album release + a couple of headlining dates in
          Little Rock, AR and Oklahoma City, OK
        </li>
        <li>
          <b>August 2025</b> - DIY Texas run with Current Comfort
        </li>
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
        src="/promos/red-group-promo.png"
        alt="Red group promo"
        photographer="dylandistance"
      />
      <PromoPhoto
        className="mt-4"
        src="/promos/group-1.jpg"
        alt="Group photo 1"
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
        src="/promos/indy-brewing-1.jpg"
        alt="Indy Brewing 1"
        photographer="dylandistance"
      />
      <PromoPhoto
        className="mt-4"
        src="/promos/mohawk-1.jpg"
        alt="Mohawk 1"
        photographer="dylandistance"
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
