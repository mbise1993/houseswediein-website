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
  return (
    <div className="px-8">
      <div className="flex flex-col items-center">
        <img src="/images/coming-soon.gif" alt="Coming soon" />
        <img src="/extras/construction-wide.gif" alt="Under construction" />
        <div className="text-xl">Until then...</div>
      </div>
      <iframe
        className="mt-4 aspect-video w-full"
        src="https://www.youtube.com/embed/ny-POamiHf0?si=lmVi7DRKVJfZ7VR1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col items-center gap-4 pt-8">
        {/* <LinkButton
          href="https://spotify.com"
          src="/images/spotify-button.gif"
          alt="Spotify link"
        /> */}
        <LinkButton
          href="https://twitter.com/houseswedieintx"
          src="/images/twitter-button.gif"
          alt="X/Twitter link"
        />
        <LinkButton
          href="https://www.instagram.com/houseswedieintx"
          src="/images/instagram-button.gif"
          alt="Instagram link"
        />
        {/* <LinkButton
          href="https://youtube.com"
          src="/images/youtube-button.gif"
          alt="YouTube link"
        /> */}
        <div>houseswedieintx@gmail.com</div>
      </div>
    </div>
  );
}
