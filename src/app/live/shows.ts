import * as dateFns from 'date-fns';

interface ShowData {
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
  {
    title: 'Glassing w/ Throat Piss, God Shell, Houses We Die In',
    date: getDate('2024-03-10'),
    flyerUrl: '/flyers/2024-03-10.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  {
    title: 'Livid, Noisy Neighbors, Laughing Matter, Houses We Die In',
    date: getDate('2024-02-28'),
    flyerUrl: '/flyers/2024-02-28.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  {
    title:
      "VICTIMBLAMED album release show w/ Salvinorin-A, Phonefoot, Houses We Die In, FEAR OF LOSS, larval therapy, 4waydancebattle, Nicole's Death",
    date: getDate('2024-02-24'),
    flyerUrl: '/flyers/2024-02-24.jpg',
    venueName: '1540 West Harlan Ave. San Antonio, TX',
  },
  {
    title: 'CNVCT, Rotten Disgust, Linger, Lament, Houses We Die In',
    date: getDate('2024-02-09'),
    flyerUrl: '/flyers/2024-02-09.jpg',
    venueName: 'Valhalla',
    venueLink: 'https://www.instagram.com/valhallatavern/',
  },
  {
    title:
      'End Means (Final Show) w/ Upsurge, Fear of Loss, Lowball, Houses We Die In',
    date: getDate('2023-12-22'),
    flyerUrl: '/flyers/2023-12-22.png',
    venueName: 'Paper Tiger',
    venueLink: 'https://papertigersatx.com/',
  },
  {
    title:
      'The High Cost of Playing God and The Vinous w/ Votive & Houses We Die In',
    date: getDate('2023-11-30'),
    flyerUrl: '/flyers/2023-11-30.jpg',
    venueName: 'Independence Brewing',
    venueLink: 'https://independencebrewing.com/',
  },
];

export function getDate(day: string) {
  return new Date(`${day}T12:00:00.000-06:00`);
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
