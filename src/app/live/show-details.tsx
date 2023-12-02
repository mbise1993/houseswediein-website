import { ShowData } from '@/app/live/shows';

interface ShowDetailsProps {
  show: ShowData;
}

export const ShowDetails = ({ show }: ShowDetailsProps) => {
  const titleProps = {
    className: 'text-xl text-red-700 leading-snug',
  };

  return (
    <li className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-shrink-0 justify-center">
        <a href={show.flyerUrl}>
          <img className="h-[400px]" src={show.flyerUrl} alt="Flyer" />
        </a>
      </div>
      <div>
        {show.ticketLink ? (
          <a {...titleProps} href={show.ticketLink}>
            {show.title}
          </a>
        ) : (
          <div {...titleProps}>{show.title}</div>
        )}
        <div>
          WHERE:{' '}
          {show.venueLink ? (
            <a href={show.venueLink} target="_blank">
              {show.venueName}
            </a>
          ) : (
            <span>{show.venueName}</span>
          )}
        </div>
        <div>WHEN: {show.formattedDate}</div>
      </div>
    </li>
  );
};
