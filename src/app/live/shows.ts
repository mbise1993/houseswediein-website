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
    date: 'Thursday, Nov 30th',
    flyerUrl: '/flyers/2023-11-30.jpg',
    venueName: 'Linton House',
  },
  {
    title:
      'End Means (Final Show) w/ Upsurge, Fear of Loss, Lowball, Houses We Die In',
    date: 'Friday, Dec 22nd',
    flyerUrl: '/flyers/2023-12-22.png',
    venueName: 'Paper Tiger',
    venueLink: 'https://papertigersatx.com/',
  },
];

export const PAST_SHOWS: Show[] = [];
