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
  {
    title: 'Kurama Record Release Show',
    date: getDate('2025-08-30'),
    flyerUrl: '/flyers/2025-08-30.jpg',
    venueName: 'Rubber Gloves (Denton, TX)',
    venueLink: 'https://rubberglovesdenton.com/',
  },
  {
    title: 'Houses We Die In, Current Comfort, Postal, Banged Out, Joust',
    date: getDate('2025-08-17'),
    flyerUrl: '/flyers/2025-08-17.jpg',
    venueName: 'The Guillotine (San Antonio, TX)',
    venueLink: 'https://www.instagram.com/the_guillotine_sa/',
  },
  {
    title: 'Slam Fest VII',
    date: getDate('2025-08-16'),
    flyerUrl: '/flyers/2025-08-16.jpg',
    venueName: 'House of Rock (Corpus Christi, TX)',
    venueLink: 'https://texashouseofrock.com/',
    ticketLink:
      'https://www.etix.com/ticket/p/69913101/slam-fest-vii-corpus-christi-house-of-rock?partner_id=100&_gl=1*uf6w5n*_ga*MjAwMDczMzUzLjE3NTI2MDc4ODI.*_ga_79S8RZFGX5*czE3NTI2MDc4ODIkbzEkZzEkdDE3NTI2MDc4ODgkajU0JGwwJGgxNDk5NTk3MTI0',
  },
  {
    title:
      "Houses We Die In, Current Comfort, Inconvenient Truth, Myuncleisavictimoftheopioidcrisis, Widow's Wine, Fantasma Digital",
    date: getDate('2025-08-15'),
    flyerUrl: '/flyers/2025-08-15.jpg',
    venueName: 'The Gremlin (Mcallen, TX)',
    venueLink: 'https://thegremlintx.com/',
  },
  {
    title: 'Houses We Die In, Current Comfort, Soul Exchange',
    date: getDate('2025-08-14'),
    flyerUrl: '/flyers/2025-08-14.jpg',
    venueName: "Stubb's Indoor",
    venueLink: 'https://stubbsaustin.com/',
    ticketLink:
      'https://www.ticketmaster.com/current-comfort-houses-we-die-in-austin-texas-08-14-2025/event/3A0062C3E5DA4493',
  },
  {
    title: 'August 2025 Tour w/ Current Comfort',
    date: getDate('2025-08-14'),
    flyerUrl: '/flyers/2025-08-tour.jpg',
    venueName: 'Texas',
  },
  {
    title: 'Missouri Executive Order 44, Banged Out, Houses We Die In, Sulk II',
    date: getDate('2025-07-18'),
    flyerUrl: '/flyers/2025-07-18.jpg',
    venueName: 'Alienated Majesty Books',
    venueLink: 'https://www.alienatedmajestybooks.com/',
  },
  {
    title: 'June 2025 Tour w/ Thus Spoke Zarathustra and Brain Injury Unit',
    date: getDate('2025-06-13'),
    flyerUrl: '/flyers/2025-06-tour.jpg',
    venueName: 'Texas, Little Rock, OKC',
  },
  {
    title:
      'The Number 12 Looks Like You w/ Lobby Boxer, Houses We Die In, The High Cost of Playing God',
    date: getDate('2025-05-15'),
    flyerUrl: '/flyers/2025-05-15.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://www.comeandtakeitlive.com/',
  },
  {
    title: "March 2025 Tour w/ Don't Fear the End",
    date: getDate('2025-03-24'),
    flyerUrl: '/flyers/2025-03-tour.jpg',
    venueName: 'Texas, NOLA, Florida',
  },
  {
    title: 'Comeback Kid - Wake the Dead 20th Anniversary Tour',
    date: getDate('2025-03-07'),
    flyerUrl: '/flyers/2025-03-07.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://www.comeandtakeitlive.com/',
  },
  {
    title:
      'Bosh, Girl of Glass, Thus Spoke Zarathustra, Withpaperwings, Houses We Die In',
    date: getDate('2024-12-03'),
    flyerUrl: '/flyers/2024-12-03.jpg',
    venueName: 'Independence Brewing',
    venueLink: 'https://independencebrewing.com/',
  },
  {
    title: 'Unity TX, Silly Goose, Soulkeeper, Houses We Die In',
    date: getDate('2024-10-20'),
    flyerUrl: '/flyers/2024-10-20.jpg',
    venueName: 'Empire Control Room',
    venueLink: 'https://empireatx.com/',
    ticketLink: 'https://vor.us/b1c2c',
  },
  {
    title:
      'I Set My Friends On Fire, 40% Dolomite, Houses We Die In, Crossways.3000, Audacious Absurdist, Ghosthouse',
    date: getDate('2024-07-28'),
    flyerUrl: '/flyers/2024-07-28.jpg',
    venueName: 'Galvan Ballroom (Corpus Christi, TX)',
  },
  {
    title: 'HOUSES SUMMER TOUR 2024',
    date: getDate('2024-06-29'),
    flyerUrl: '/flyers/2024-07-tour.jpg',
    venueName: 'Southwest USA',
  },
  {
    title: 'BIG TEXAS METAL FEST (Day 1)',
    date: getDate('2024-05-24'),
    flyerUrl: '/flyers/2024-05-24.jpg',
    venueName: 'The Far Out Lounge & Stage',
    venueLink: 'http://www.thefaroutaustin.com/',
    ticketLink: 'https://vor.us/b12fb',
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
      // @ts-expect-error
      formattedDate: dateFns.format(show.date, 'EEEE, MMM do'),
    };

    // @ts-expect-error
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
