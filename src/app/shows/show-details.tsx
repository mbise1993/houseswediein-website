import * as dateFns from 'date-fns';

import { Show } from '@/app/shows/visible-shows';

interface ShowDetailsProps {
  show: Show;
}

export const ShowDetails = ({ show }: ShowDetailsProps) => {
  const titleProps = {
    className: 'text-xl text-red-700 leading-snug',
  };

  return (
    <li className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-shrink-0 justify-center">
        <img
          className="max-h-[550px] md:max-w-[350px]"
          src={show.flyerUrl}
          alt="Flyer"
        />
      </div>
      <div>
        {show.ticketLink && dateFns.isFuture(show.date) ? (
          <a {...titleProps} href={show.ticketLink} target="_blank">
            {show.title}
          </a>
        ) : (
          <div {...titleProps}>{show.title}</div>
        )}
        <div>
          <b>WHEN:</b> {show.formattedDate}
        </div>
        <div>
          <b>WHERE:</b>{' '}
          {show.venueLink ? (
            <a href={show.venueLink} target="_blank">
              {show.venueName}
            </a>
          ) : (
            <span>{show.venueName}</span>
          )}
        </div>
      </div>
    </li>
  );
};
