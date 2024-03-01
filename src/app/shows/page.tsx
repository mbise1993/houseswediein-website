import { ShowDetails } from '@/app/shows/show-details';
import { Show, getShows } from '@/app/shows/shows';
import { SectionHeading } from '@/components/section-heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live | HWDI',
  description: 'Upcoming and past shows',
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
      <ul className="flex flex-col gap-8">
        {shows.map((show) => (
          <ShowDetails key={show.formattedDate} show={show} />
        ))}
      </ul>
    </div>
  );
};

export default function Page() {
  const shows = getShows();

  return (
    <div className="px-8">
      {shows.upcoming.length > 0 && (
        <ShowSection heading="UPCOMING SHOWS" shows={shows.upcoming} />
      )}
      {shows.past.length > 0 && (
        <ShowSection
          className="mt-16"
          heading="PAST SHOWS"
          shows={shows.past}
        />
      )}
      <div className="flex justify-center pt-8">
        <img alt="Globe" src="/images/green-globe.gif" />
      </div>
    </div>
  );
}
