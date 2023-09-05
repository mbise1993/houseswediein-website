export interface Show {
  title: string;
  ticketLink: string;
  venueName: string;
  venueLink: string;
  date: string;
}

export const UPCOMING_SHOWS: Show[] = [
  {
    title: 'Big Headliner, Someone Somewhere, Houses We Die In',
    venueName: 'Mohawk',
    venueLink: 'https://mohawkaustin.com/',
    date: 'Wed, Nov 11th at 7pm',
    ticketLink: 'https://seetickets.com',
  },
  {
    title: 'Woooahhao, Houses We Die In',
    venueName: 'Empire Garage',
    venueLink: 'https://empireatx.com/',
    date: 'Sat, Dec 21st at 7pm',
    ticketLink: 'https://seetickets.com',
  },
];

export const PAST_SHOWS: Show[] = [
  {
    title: 'Houses We Die In, Another Band, One More',
    venueName: 'Chess Club',
    venueLink: 'https://chessclubaustin.com/',
    date: 'Friday, June 13th at 9pm',
    ticketLink: 'https://seetickets.com',
  },
];
