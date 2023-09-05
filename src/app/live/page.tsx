import { PAST_SHOWS, Show, UPCOMING_SHOWS } from '@/app/live/shows';

interface ShowDetailsProps {
  show: Show;
}

const ShowDetails = ({ show }: ShowDetailsProps) => {
  return (
    <li>
      <a className="text-lg text-red-700" href={show.ticketLink}>
        {show.title}
      </a>
      <div>WHERE: {show.venueName}</div>
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
      <h2 className="text-3xl font-medium">{heading}</h2>
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
      <ShowSection className="mt-8" heading="PAST" shows={PAST_SHOWS} />
    </div>
  );
}
