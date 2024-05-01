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
    title: 'BIG TEXAS METAL FEST (Day 1)',
    date: getDate('2024-05-24'),
    flyerUrl: '/flyers/2024-05-24.jpg',
    venueName: 'The Far Out Lounge & Stage',
    venueLink: 'http://www.thefaroutaustin.com/',
    ticketLink: 'https://vor.us/b12fb',
  },
  {
    title:
      'Postal EP Release w/ Crossways.3000, Houses We Die In, Fountain Mouth',
    date: getDate('2024-05-10'),
    flyerUrl: '/flyers/2024-05-10.jpg',
    venueName: 'B-Side',
    venueLink: 'https://www.instagram.com/bsidesatx/',
  },
  {
    title: 'UTSA Underground Music Festival',
    date: getDate('2024-05-02'),
    flyerUrl: '/flyers/2024-05-02.jpg',
    venueName: 'UTSA tunnels',
  },
  {
    title:
      'Slander, ghosthouse, Victim Blamed, May I Die, Houses We Die In, Audacious Absurdist',
    date: getDate('2024-03-23'),
    flyerUrl: '/flyers/2024-03-23.jpg',
    venueName: 'The Red Rabbit',
    venueLink: 'https://www.instagram.com/theredrabbit361/',
  },
  {
    title:
      "Lacerated, Don't Fear the End, Fortuna Malvada, Fear of Loss, Houses We Die In",
    date: getDate('2024-03-21'),
    flyerUrl: '/flyers/2024-03-21.jpg',
    venueName: 'Snake Hill Social Club',
    venueLink: 'https://www.instagram.com/snakehill.satx/',
  },
  {
    title: 'Palefade, Othiel, Houses We Die In, Larvae, Rose Ceremony',
    date: getDate('2024-03-16'),
    flyerUrl: '/flyers/2024-03-16.jpg',
    venueName: 'Arnold House (DM for address)',
  },
  {
    title:
      'SXSE Metal Showcase w/ Never Rest, Reign, Cult Burner, Postal, Deadmouth, Houses We Die In',
    date: getDate('2024-03-12'),
    flyerUrl: '/flyers/2024-03-12.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://www.comeandtakeitlive.com/',
    ticketLink:
      'https://www.etix.com/ticket/p/30695894/disaster-fest-austin-come-and-take-it-live',
  },
  {
    title: 'Glassing w/ Throat Piss, God Shell, Houses We Die In',
    date: getDate('2024-03-10'),
    flyerUrl: '/flyers/2024-03-10.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  {
    title:
      'Far From It w/ Fear of Loss, Fleishwolf, Houses We Die In, Postal, Dogmad, Voracious Contempt, Deadite',
    date: getDate('2024-03-03'),
    flyerUrl: '/flyers/2024-03-03.jpg',
    venueName: 'B-Side',
    venueLink: 'https://www.instagram.com/bsidesatx/',
  },
  {
    title: 'Livid, Noisy Neighbors, Laughing Matter, Houses We Die In',
    date: getDate('2024-02-28'),
    flyerUrl: '/flyers/2024-02-28.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  {
    title: 'Slow Pulse, Ritual, The High Cost of Playing God, Houses We Die In',
    date: getDate('2024-02-25'),
    flyerUrl: '/flyers/2024-02-25.jpg',
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
