import { PAST_SHOWS, Show, UPCOMING_SHOWS } from '@/app/live/shows';
import { SectionHeading } from '@/components/section-heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live | HWDI',
  description: 'Upcoming and past shows',
};

interface ShowDetailsProps {
  show: Show;
}

const ShowDetails = ({ show }: ShowDetailsProps) => {
  const titleProps = {
    className: 'text-lg text-red-700',
  };

  return (
    <li>
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
          <a href={show.venueLink}>{show.venueName}</a>
        ) : (
          <span>{show.venueName}</span>
        )}
      </div>
      <div>WHEN: {show.date}</div>
    </li>
  );
};

interface ShowSectionProps {
  className?: string;
  heading: string;
  shows: Show[];
}

const ShowSection = ({ className, heading, shows }: ShowSectionProps) => {
  return (
    <div className={className}>
      <SectionHeading>{heading}</SectionHeading>
      <ul className="flex flex-col gap-4">
        {shows.map((show) => (
          <ShowDetails key={show.date} show={show} />
        ))}
      </ul>
    </div>
  );
};

export default function Page() {
  return (
    <div className="px-8">
      <ShowSection heading="UPCOMING" shows={UPCOMING_SHOWS} />
      {/* <ShowSection className="mt-8" heading="PAST" shows={PAST_SHOWS} /> */}
      <div className="flex justify-center pt-8">
        <img alt="Globe" src="/images/green-globe.gif" />
      </div>
    </div>
  );
}
