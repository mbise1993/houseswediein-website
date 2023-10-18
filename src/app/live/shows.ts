export interface Show {
  title: string;
  ticketLink: string;
  venueName: string;
  venueLink: string;
  date: string;
}

export const UPCOMING_SHOWS: Show[] = [
  {
    title: 'Coming Soon',
    venueName: 'TBA',
    venueLink: '',
    date: 'Thurs, Nov 30th',
    ticketLink: '',
  },
];

export const PAST_SHOWS: Show[] = [];
