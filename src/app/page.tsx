import { ShowDetails } from '@/app/live/show-details';
import { getShows } from '@/app/live/shows';
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
      <SectionHeading>FACES OF THE SUFFERING SHIRT</SectionHeading>
      <div className="text-lg">
        PRE-ORDER{' '}
        <a
          href="https://houseswedieintx.bandcamp.com/merch/pre-order-faces-of-the-suffering-t-shirt"
          target="_blank"
        >
          HERE
        </a>
      </div>
      <img
        className="mb-4"
        alt="Faces of the Suffering shirt"
        src="/merch/faces-of-the-suffering-shirt.png"
      />
      {nextShow ? (
        <>
          <SectionHeading>NEXT SHOW</SectionHeading>
          <ShowDetails show={nextShow} />
        </>
      ) : (
        <img
          className="mx-auto md:h-[400px] md:w-full"
          src="/images/horizontal-promo-1.jpg"
          alt="full band photo"
        />
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
