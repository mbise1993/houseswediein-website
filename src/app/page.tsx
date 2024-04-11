import { ShowDetails } from '@/app/shows/show-details';
import { getShows } from '@/app/shows/shows';
import { SectionHeading } from '@/components/section-heading';

interface LinkButtonProps {
  href: string;
  src: string;
  alt: string;
}

const LinkButton = ({ href, src, alt }: LinkButtonProps) => {
  return (
    <a href={href} target="_blank">
      <img className="w-[240px]" alt={alt} src={src} />
    </a>
  );
};

export default function Page() {
  const shows = getShows();
  const nextShow = shows.upcoming.length > 0 ? shows.upcoming[0] : undefined;

  return (
    <div className="px-8">
      <SectionHeading>ANNOUNCEMENTS/LINKS</SectionHeading>
      <ul className="list-disc pl-4">
        <li>
          <span>
            <a href="http://url2734.distrokid.com/ls/click?upn=u001.a0grtTtFNGObbwv02PitCPUodymsTWKXNsD1pT7nhD0Oh0brJVDD6-2Fa0pC2fX-2FvxgASg2gLofhc7ddepUno1CdPIZ53plWrpiiZJY1O0onYwEAIq1SfJr8x-2BMgFCInDSW0F1FQEl9Gpkkz7zgBVke-2FhIPnR-2FmaDu2bQ5VJdL1Wc-3DTiT0_WM3-2BY8aipBgOqNhHvQu-2Bb6lfl88tZdKCo82R7tDqWjkDU6yQxVB3j501GmwqlN-2BOSzhbJ3pUGAHGxieNpTO-2BqSdeOldEhbJ6C3k9P9sMI99d5JsviofpGDzTc-2FW4v3TOHwTHJ3V2cEOauCxm7X06GzkxRZThzejjqqipI6BdqdqM-2B1L6vrOu2cZV7ayKtLFGoQ2KvTZXaGaxuyW0qjMRgbqx7j2GZk7iW5M6g8up12w-3D">
              PRE-SAVE OUR NEXT SINGLE &quot;APPARITIONS&quot;
            </a>
          </span>
        </li>
        <li>
          <span>
            BIG TEXAS METAL FEST TICKETS -{' '}
            <a href="https://vor.us/b12fb">CLICK HERE!!!</a>
          </span>
        </li>
      </ul>
      <SectionHeading className="mt-4">LIVE</SectionHeading>
      <iframe
        id="video"
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/Tqw6LdpF7fE?si=SwAiU_pw5MOEsI84"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {nextShow && (
        <>
          <SectionHeading className="my-6">NEXT SHOW</SectionHeading>
          <ShowDetails show={nextShow} />
        </>
      )}
      <SectionHeading className="my-6">LINKS</SectionHeading>
      <div className="flex flex-col flex-wrap gap-2">
        <LinkButton
          href="https://www.instagram.com/houseswedieintx"
          src="/images/instagram-button.gif"
          alt="Instagram link"
        />
        <LinkButton
          href="https://twitter.com/houseswedieintx"
          src="/images/twitter-button.gif"
          alt="X/Twitter link"
        />
        <LinkButton
          href="https://open.spotify.com/artist/5p62veiIRA1sgEM1miwamk?si=jqQkXMeTRhKiJ3iUxYxJ-A"
          src="/images/spotify-button.gif"
          alt="Spotify link"
        />
        <LinkButton
          href="https://www.youtube.com/@houseswedieintx"
          src="/images/youtube-button.gif"
          alt="YouTube link"
        />
      </div>
      <SectionHeading className="mb-1 mt-6">BOOKING</SectionHeading>
      <span>
        Email us at{' '}
        <a href="mailto:houseswedieintx@gmail.com">houseswedieintx@gmail.com</a>{' '}
        or DM us on Instagram
      </span>
    </div>
  );
}
