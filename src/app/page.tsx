import { ShowDetails } from '@/app/live/show-details';
import { UPCOMING_SHOWS } from '@/app/live/shows';
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
  const nextShow = UPCOMING_SHOWS.length > 0 ? UPCOMING_SHOWS[0] : undefined;

  return (
    <div className="px-8">
      {nextShow && (
        <>
          <SectionHeading className="">UP NEXT</SectionHeading>
          <ShowDetails show={nextShow} />
        </>
      )}
      <SectionHeading className="my-4">CONNECT</SectionHeading>
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
        <a className="text-lg" href="mailto:houseswedieintx@gmail.com">
          houseswedieintx@gmail.com
        </a>
      </div>
      {/* <iframe
        className="mt-4 aspect-video w-full"
        src="https://www.youtube.com/embed/ny-POamiHf0?si=lmVi7DRKVJfZ7VR1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
    </div>
  );
}
