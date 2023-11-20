export interface Show {
  title: string;
  date: string;
  flyerUrl: string;
  venueName: string;
  venueLink?: string;
  ticketLink?: string;
}

export const UPCOMING_SHOWS: Show[] = [
  {
    title:
      'The High Cost of Playing God and The Vinous w/ Votive & Houses We Die In',
    date: 'Thurs, Nov 30th',
    flyerUrl: '/flyers/2023-11-30.jpg',
    venueName: 'Linton House',
  },
];

export const PAST_SHOWS: Show[] = [];
