import { ALL_SHOWS } from '@/app/shows/all-shows';
import * as dateFns from 'date-fns';

export interface ShowData {
  title: string;
  date: Date;
  flyerUrl: string;
  venueName: string;
  venueLink?: string;
  ticketLink?: string;
}

export interface Show extends ShowData {
  formattedDate: string;
}

const SHOWS: ShowData[] = [
  ALL_SHOWS['2026-03-tour'],
  ALL_SHOWS['2026-01-01'],
  ALL_SHOWS['2025-11-29'],
  ALL_SHOWS['2025-08-tour'],
  ALL_SHOWS['2025-06-tour'],
  ALL_SHOWS['2025-05-15'],
  ALL_SHOWS['2025-03-tour'],
  ALL_SHOWS['2025-03-07'],
  ALL_SHOWS['2024-12-03'],
  ALL_SHOWS['2024-10-20'],
  ALL_SHOWS['2024-07-28'],
  ALL_SHOWS['2024-07-tour'],
  ALL_SHOWS['2024-05-24'],
];

export function getDate(day: string) {
  return new Date(`${day}T20:00:00.000`);
}

export function getShows() {
  const upcoming: Show[] = [];
  const past: Show[] = [];
  for (const show of SHOWS) {
    const showForDisplay = {
      ...show,
      formattedDate: dateFns.format(show.date, 'EEEE, MMM do'),
    };

    if (dateFns.isFuture(show.date)) {
      // Use unshift to show soonest shows first
      upcoming.unshift(showForDisplay);
    } else {
      // Use push for regular, reverse-chronological order
      past.push(showForDisplay);
    }
  }

  return { upcoming, past };
}
