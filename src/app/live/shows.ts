export interface Show {
  title: string;
  venueName: string;
  venueAddress: string;
  date: string;
  ticketLink: string;
}

export const UPCOMING_SHOWS: Show[] = [
  {
    title: 'Big Headliner, Someone Somewhere, Houses We Die In',
    venueName: 'Mohawk',
    venueAddress: '456 Red River St Austin, TX 78741',
    date: 'Wed, Nov 11th at 7pm',
    ticketLink: 'https://seetickets.com',
  },
];

export const PAST_SHOWS: Show[] = [
  {
    title: 'Houses We Die In, Another Band, One More',
    venueName: 'Chess Club',
    venueAddress: '123 Red River St Austin, TX 78741',
    date: 'Friday, June 13th at 9pm',
    ticketLink: 'https://seetickets.com',
  },
];
