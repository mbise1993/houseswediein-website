import { getDate, ShowData } from '@/app/shows/visible-shows';

export const ALL_SHOWS: Record<string, ShowData> = {
  '2026-03-tour': {
    title: 'March 2026 Tour w/ Everyone Dies In Utah',
    date: getDate('2026-03-11'),
    flyerUrl: '/flyers/2026-03-tour.jpg',
    venueName: 'California and Arizona',
  },
  '2026-01-01': {
    title: 'FREE WEEK ON 29TH STREET: Houses We Die In, Banged Out, Drip Fed',
    date: getDate('2026-01-01'),
    flyerUrl: '/flyers/2026-01-01.jpg',
    venueName: '29th Street Ballroom',
    venueLink: 'https://www.29thstreetballroom.com/',
  },
  '2025-11-29': {
    title: 'I Promised the World, Houses We Die In, Palefade, Banged Out',
    date: getDate('2025-11-29'),
    flyerUrl: '/flyers/2025-11-29.jpg',
    venueName: 'The Far Out Lounge',
    venueLink: 'https://www.thefaroutaustin.com/',
  },
  '2025-08-30': {
    title: 'Kurama Record Release Show',
    date: getDate('2025-08-30'),
    flyerUrl: '/flyers/2025-08-30.jpg',
    venueName: 'Rubber Gloves (Denton, TX)',
    venueLink: 'https://rubberglovesdenton.com/',
  },
  '2025-08-17': {
    title: 'Houses We Die In, Current Comfort, Postal, Banged Out, Joust',
    date: getDate('2025-08-17'),
    flyerUrl: '/flyers/2025-08-17.jpg',
    venueName: 'The Guillotine (San Antonio, TX)',
    venueLink: 'https://www.instagram.com/the_guillotine_sa/',
  },
  '2025-08-16': {
    title: 'Slam Fest VII',
    date: getDate('2025-08-16'),
    flyerUrl: '/flyers/2025-08-16.jpg',
    venueName: 'House of Rock (Corpus Christi, TX)',
    venueLink: 'https://texashouseofrock.com/',
    ticketLink:
      'https://www.etix.com/ticket/p/69913101/slam-fest-vii-corpus-christi-house-of-rock?partner_id=100&_gl=1*uf6w5n*_ga*MjAwMDczMzUzLjE3NTI2MDc4ODI.*_ga_79S8RZFGX5*czE3NTI2MDc4ODIkbzEkZzEkdDE3NTI2MDc4ODgkajU0JGwwJGgxNDk5NTk3MTI0',
  },
  '2025-08-15': {
    title:
      "Houses We Die In, Current Comfort, Inconvenient Truth, Myuncleisavictimoftheopioidcrisis, Widow's Wine, Fantasma Digital",
    date: getDate('2025-08-15'),
    flyerUrl: '/flyers/2025-08-15.jpg',
    venueName: 'The Gremlin (Mcallen, TX)',
    venueLink: 'https://thegremlintx.com/',
  },
  '2025-08-14-1': {
    title: 'Houses We Die In, Current Comfort, Soul Exchange',
    date: getDate('2025-08-14'),
    flyerUrl: '/flyers/2025-08-14.jpg',
    venueName: "Stubb's Indoor",
    venueLink: 'https://stubbsaustin.com/',
    ticketLink:
      'https://www.ticketmaster.com/current-comfort-houses-we-die-in-austin-texas-08-14-2025/event/3A0062C3E5DA4493',
  },
  '2025-08-tour': {
    title: 'August 2025 Tour w/ Current Comfort',
    date: getDate('2025-08-14'),
    flyerUrl: '/flyers/2025-08-tour.jpg',
    venueName: 'Texas',
  },
  '2025-07-18': {
    title: 'Missouri Executive Order 44, Banged Out, Houses We Die In, Sulk II',
    date: getDate('2025-07-18'),
    flyerUrl: '/flyers/2025-07-18.jpg',
    venueName: 'Alienated Majesty Books',
    venueLink: 'https://www.alienatedmajestybooks.com/',
  },
  '2025-06-17': {
    title:
      'Thus Spoke Zarathustra, Houses We Die In, Rakuyo, Brain Injury Unit, Gooba',
    date: getDate('2025-06-17'),
    flyerUrl: '/flyers/2025-06-17.jpg',
    venueName: 'Empire Garage',
    venueLink: 'https://empireatx.com/',
  },
  '2025-06-tour': {
    title: 'June 2025 Tour w/ Thus Spoke Zarathustra and Brain Injury Unit',
    date: getDate('2025-06-13'),
    flyerUrl: '/flyers/2025-06-tour.jpg',
    venueName: 'Texas, Little Rock, OKC',
  },
  '2025-05-15': {
    title:
      'The Number 12 Looks Like You w/ Lobby Boxer, Houses We Die In, The High Cost of Playing God',
    date: getDate('2025-05-15'),
    flyerUrl: '/flyers/2025-05-15.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://www.comeandtakeitlive.com/',
  },
  '2025-04-19': {
    title:
      'Victim Blamed, Houses We Die In, Ashes at Last, In Which Divides Us, Pink Michigan, Ghosthouse, Trapin Percatory',
    date: getDate('2025-04-19'),
    flyerUrl: '/flyers/2025-04-19.jpg',
    venueName: 'Independence Brewing (Austin)',
    venueLink: 'https://independencebrewing.com/',
  },
  '2025-03-27': {
    title:
      "Don't Fear the End, Houses We Die In, fingerswoventogether, Monterey, andwhentheskywasopened",
    date: getDate('2025-03-27'),
    flyerUrl: '/flyers/2025-03-27.jpg',
    venueName: "Will's Pub (Orlando)",
    venueLink: 'https://willspub.org/',
    ticketLink:
      'https://www.ticketweb.com/event/dont-fear-the-end-with-wills-pub-tickets/14165113',
  },
  '2025-03-26': {
    title: "Don't Fear the End, Houses We Die In, Knife In A Gunfight, Dremm",
    date: getDate('2025-03-26'),
    flyerUrl: '/flyers/2025-03-26.jpg',
    venueName: 'Fred Hampton Free Store (New Orleans)',
    venueLink: 'https://www.instagram.com/gno.cc.eventspace/',
  },
  '2025-03-25': {
    title:
      "Houses We Die In, Don't Fear the End, Kurama, Claymore, xMercyx, Blood Buffet",
    date: getDate('2025-03-25'),
    flyerUrl: '/flyers/2025-03-25.jpg',
    venueName: 'The White Swan (Houston)',
    venueLink: 'https://www.whiteswanlive.com/',
  },
  '2025-03-tour': {
    title: "March 2025 Tour w/ Don't Fear the End",
    date: getDate('2025-03-24'),
    flyerUrl: '/flyers/2025-03-tour.jpg',
    venueName: 'Texas, NOLA, Florida',
  },
  '2025-03-07': {
    title: 'Comeback Kid - Wake the Dead 20th Anniversary Tour',
    date: getDate('2025-03-07'),
    flyerUrl: '/flyers/2025-03-07.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://www.comeandtakeitlive.com/',
  },
  '2025-03-06': {
    title:
      'Destroy All Humans, Houses We Die In, Fear of Loss, Ghosthouse, Nervepoint, Postal, Ricin',
    date: getDate('2025-03-06'),
    flyerUrl: '/flyers/2025-03-06.jpg',
    venueName: 'Private Park (San Marcos)',
  },
  '2025-01-20': {
    title: 'Banged Out, Palefade, Houses We Die In',
    date: getDate('2025-01-20'),
    flyerUrl: '/flyers/2025-01-20.jpg',
    venueName: 'Low Down Lounge',
    venueLink: 'https://www.lowdownlounge.com/',
  },
  '2025-01-19': {
    title: 'Tar Creek, JAW/LINE, Houses We Die In, Born Savage',
    date: getDate('2025-01-19'),
    flyerUrl: '/flyers/2025-01-19.jpg',
    venueName: 'Mohawk',
    venueLink: 'https://mohawkaustin.com/',
    ticketLink: 'https://mohawkaustin.com/event/?id=-2853509351522476205',
  },
  '2025-01-11': {
    title: 'Buckle Bunnies Benefit Show',
    date: getDate('2025-01-11'),
    flyerUrl: '/flyers/2025-01-11.jpg',
    venueName: 'Private Park (San Marcos)',
  },
  '2025-01-02': {
    title: 'FREE WEEK at Mohawk',
    date: getDate('2025-01-02'),
    flyerUrl: '/flyers/2025-01-02.jpg',
    venueName: 'Mohawk',
    venueLink: 'https://mohawkaustin.com/',
  },
  '2024-12-21': {
    title:
      'Ghosthouse, Postal, Houses We Die In, Safely Home, Slum Mafia, Censored, Parasite',
    date: getDate('2024-12-21'),
    flyerUrl: '/flyers/2024-12-21.jpg',
    venueName: 'Galvan Ballroom (Corpus Christi, TX)',
    venueLink: 'http://galvanballroom.com/',
  },
  '2024-12-13': {
    title:
      'The High Cost of Playing God, Houses We Die In, Votive, Missouri Executive Order 44',
    date: getDate('2024-12-13'),
    flyerUrl: '/flyers/2024-12-13.jpg',
    venueName: 'Monkeywrench Books',
    venueLink: 'https://www.monkeywrenchbooks.org/',
  },
  '2024-12-09': {
    title:
      'Lacerated, Houses We Die In, Crooked Life, knifeinagunfight, As My Will Caves',
    date: getDate('2024-12-09'),
    flyerUrl: '/flyers/2024-12-09.jpg',
    venueName: 'The Free Store (New Orleans)',
  },
  '2024-12-06': {
    title: 'No Sleep Fest Pre-show',
    date: getDate('2024-12-06'),
    flyerUrl: '/flyers/2024-12-06.jpg',
    venueName: 'Moontower Inn',
    venueLink: 'https://www.moontowerinn.com/',
  },
  '2024-12-05': {
    title: 'Lacerated, Houses We Die In, Scrape, McBryde, Ten Times Demise',
    date: getDate('2024-12-05'),
    flyerUrl: '/flyers/2024-12-05.jpg',
    venueName: 'Far Out Lounge',
    venueLink: 'http://www.thefaroutaustin.com/',
    ticketLink:
      'https://www.tickettailor.com/events/thefaroutloungestage/1487881',
  },
  '2024-12-04': {
    title:
      'Houses We Die In, Lacerated, True Grit, Ritual Abuse, Misanthrope, Hatred Creation',
    date: getDate('2024-12-04'),
    flyerUrl: '/flyers/2024-12-04.jpg',
    venueName: 'Haltom Theater',
    venueLink: 'https://www.thehaltomtheater.com/',
  },
  '2024-12-03': {
    title:
      'Bosh, Girl of Glass, Thus Spoke Zarathustra, Withpaperwings, Houses We Die In',
    date: getDate('2024-12-03'),
    flyerUrl: '/flyers/2024-12-03.jpg',
    venueName: 'Independence Brewing',
    venueLink: 'https://independencebrewing.com/',
  },
  '2024-11-22': {
    title: 'Houses We Die In, Postal, Havrath, Skabatha, Chained In Sin',
    date: getDate('2024-11-22'),
    flyerUrl: '/flyers/2024-11-22.jpg',
    venueName: 'UTSA MOB',
  },
  '2024-11-04': {
    title:
      'Live Longer Burn Everything, Houses We Die In, Victim Blamed, Postal',
    date: getDate('2024-11-04'),
    flyerUrl: '/flyers/2024-11-04.jpg',
    venueName: 'The Starlighter',
    venueLink: 'https://thestarlighter.com/',
  },
  '2024-11-03': {
    title:
      'Live Longer Burn Everything, Houses We Die In, My Dad Died, Rebecka',
    date: getDate('2024-11-03'),
    flyerUrl: '/flyers/2024-11-03.jpg',
    venueName: 'Chess Club',
    venueLink: 'https://chessclubaustin.com/',
  },
  '2024-10-31': {
    title: '2024 Halloween Havoc',
    date: getDate('2024-10-31'),
    flyerUrl: '/flyers/2024-10-31.jpg',
    venueName: 'The Ballroom',
    venueLink: 'https://www.ballroomtx.com/',
  },
  '2024-10-21': {
    title: 'Glassing, Drip Fed, Tied Up, Houses We Die In',
    date: getDate('2024-10-21'),
    flyerUrl: '/flyers/2024-10-21.jpg',
    venueName: 'Chess Club',
    venueLink: 'https://chessclubaustin.com/',
    ticketLink:
      'https://dice.fm/partner/dice/event/8eap2r-glassing-drip-fed-tied-up-houses-we-die-in-21st-oct-chess-club-austin-tickets?dice_id=4095852&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=mio_marketing&_branch_match_id=1340370699146078524&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1XdMTExMTrZMMTczMravK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQCpQWrUOwAAAA',
  },
  '2024-10-20': {
    title: 'Unity TX, Silly Goose, Soulkeeper, Houses We Die In',
    date: getDate('2024-10-20'),
    flyerUrl: '/flyers/2024-10-20.jpg',
    venueName: 'Empire Control Room',
    venueLink: 'https://empireatx.com/',
    ticketLink: 'https://vor.us/b1c2c',
  },
  '2024-09-28': {
    title: 'The Way It Is Fest (Benefit for Gaza)',
    date: getDate('2024-09-28'),
    flyerUrl: '/flyers/2024-09-28.jpg',
    venueName: 'The Far Out Lounge',
    venueLink: 'http://www.thefaroutaustin.com/',
  },
  '2024-09-22': {
    title:
      'Chernobyl the Secret, DGMA, Speak Slow, Houses We Die In, Blank Slate',
    date: getDate('2024-09-22'),
    flyerUrl: '/flyers/2024-09-22.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://comeandtakeitproductions.com/',
  },
  '2024-09-13': {
    title:
      'Cable, Houses We Die In, War Stories, Sugar, Scissor Tailfly Catcher',
    date: getDate('2024-09-13'),
    flyerUrl: '/flyers/2024-09-13.jpg',
    venueName: '1810 Ojeman (Houston, TX)',
    venueLink: 'https://www.eighteentenojeman.com/',
  },
  '2024-08-17': {
    title: 'Houses We Die In, Rose Ceremony, Sentiments, Recurser, Dattura',
    date: getDate('2024-08-17'),
    flyerUrl: '/flyers/2024-08-17.jpg',
    venueName: 'Chess Club',
    venueLink: 'https://chessclubaustin.com/',
  },
  '2024-08-16': {
    title: 'Y2K Fest',
    date: getDate('2024-08-16'),
    flyerUrl: '/flyers/2024-08-16.jpg',
    venueName: 'Haltom Theater',
    venueLink: 'https://www.instagram.com/thehaltomtheater/?hl=en',
  },
  '2024-07-28': {
    title:
      'I Set My Friends On Fire, 40% Dolomite, Houses We Die In, Crossways.3000, Audacious Absurdist, Ghosthouse',
    date: getDate('2024-07-28'),
    flyerUrl: '/flyers/2024-07-28.jpg',
    venueName: 'Galvan Ballroom (Corpus Christi, TX)',
  },
  '2024-07-27': {
    title: 'Rare Bloom, Rain Check, Lease Agreement, Postal, Houses We Die In',
    date: getDate('2024-07-27'),
    flyerUrl: '/flyers/2024-07-27.jpg',
    venueName: 'The Alley (San Antonio, TX)',
  },
  '2024-07-20': {
    title: 'Clique, Joust, Scathe, Houses We Die In, Weak Spot',
    date: getDate('2024-07-20'),
    flyerUrl: '/flyers/2024-07-20.jpg',
    venueName: 'B-Side (San Antonio, TX)',
  },
  '2024-07-18': {
    title: 'Hot Summer Nights (Banged Out, DGMA, Never Rest, Houses We Die In)',
    date: getDate('2024-07-18'),
    flyerUrl: '/flyers/2024-07-18.jpg',
    venueName: 'Valhalla',
    venueLink: 'https://www.facebook.com/valhallatavern/',
  },
  '2024-07-13': {
    title:
      'Houses We Die In, Virtue, Feed Your Body to the Void, McBryde, Soul Exchange',
    date: getDate('2024-07-13'),
    flyerUrl: '/flyers/2024-07-13.jpg',
    venueName: "Sunny's Backyard",
    venueLink: 'https://www.sunnysbackyard.com/',
  },
  '2024-07-09': {
    title: 'Houses We Die In, Catharsis, Knit, Grovetender',
    date: getDate('2024-07-09'),
    flyerUrl: '/flyers/2024-07-09.jpg',
    venueName: 'Depot DIY Skatepark (Lubbock, TX)',
  },
  '2024-07-06': {
    title: 'VULGARFEST (Day 1)',
    date: getDate('2024-07-06'),
    flyerUrl: '/flyers/2024-07-06.jpg',
    venueName: 'Los Angeles, CA - The American Legion (9026 Sunland Blvd.)',
  },
  '2024-07-03': {
    title:
      'Fatal Wounds, Purest Bond, Lacerated, Houses We Die In, Watch You Fall, Death Whispers',
    date: getDate('2024-07-03'),
    flyerUrl: '/flyers/2024-07-03.jpg',
    venueName: 'San Diego, CA - The Che Cafe',
    venueLink: 'http://thechecafe.blogspot.com/',
  },
  '2024-07-01': {
    title:
      'Houses We Die In, Undissassembled, Rocky Mountain Oysters, Rotten Disgust, Predecessor',
    date: getDate('2024-07-01'),
    flyerUrl: '/flyers/2024-07-01.jpg',
    venueName: "El Paso, TX - Vincent and Melo's",
    venueLink: 'https://vincentandmelos.com/',
  },
  '2024-06-29-1': {
    title:
      'Girl of Glass, Ballista, Victim Blamed, Misanthrope, Houses We Die In, Ghosthouse',
    date: getDate('2024-06-29'),
    flyerUrl: '/flyers/2024-06-29.jpg',
    venueName: '922 Dorthy Dr. Corpus Christi',
  },
  '2024-07-tour': {
    title: 'HOUSES SUMMER TOUR 2024',
    date: getDate('2024-06-29'),
    flyerUrl: '/flyers/2024-07-tour.jpg',
    venueName: 'Southwest USA',
  },
  '2024-06-19': {
    title: 'HOODS w/ Houses We Die In, Born Savage, Los Cabrones',
    date: getDate('2024-06-19'),
    flyerUrl: '/flyers/2024-06-19.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  '2024-06-14': {
    title: 'Everyone Dies In Utah, Cloud Anchor, Houses We Die In, Aeganova',
    date: getDate('2024-06-14'),
    flyerUrl: '/flyers/2024-06-14.jpg',
    venueName: "Sean's Pub (Harker Heights, TX)",
    venueLink: 'https://www.facebook.com/seanspubheights/',
  },
  '2024-05-31': {
    title: 'Burning Years, Houses We Die In, Speak Slow, McBryde',
    date: getDate('2024-05-31'),
    flyerUrl: '/flyers/2024-05-31.jpg',
    venueName: "Sunny's Backyard",
    venueLink: 'https://www.sunnysbackyard.com/',
  },
  '2024-05-24': {
    title: 'BIG TEXAS METAL FEST (Day 1)',
    date: getDate('2024-05-24'),
    flyerUrl: '/flyers/2024-05-24.jpg',
    venueName: 'The Far Out Lounge & Stage',
    venueLink: 'http://www.thefaroutaustin.com/',
    ticketLink: 'https://vor.us/b12fb',
  },
  '2024-05-10': {
    title:
      'Postal EP Release w/ Crossways.3000, Houses We Die In, Fountain Mouth, Faint',
    date: getDate('2024-05-10'),
    flyerUrl: '/flyers/2024-05-10.jpg',
    venueName: 'B-Side',
    venueLink: 'https://www.instagram.com/bsidesatx/',
  },
  '2024-05-02': {
    title: 'UTSA Underground Music Festival',
    date: getDate('2024-05-02'),
    flyerUrl: '/flyers/2024-05-02.jpg',
    venueName: 'UTSA tunnels',
  },
  '2024-03-23': {
    title:
      'Slander, Ghosthouse, May I Die, Houses We Die In, Audacious Absurdist',
    date: getDate('2024-03-23'),
    flyerUrl: '/flyers/2024-03-23.jpg',
    venueName: 'The Red Rabbit',
    venueLink: 'https://www.instagram.com/theredrabbit361/',
  },
  '2024-03-21': {
    title:
      "Lacerated, Don't Fear the End, Fortuna Malvada, Fear of Loss, Houses We Die In",
    date: getDate('2024-03-21'),
    flyerUrl: '/flyers/2024-03-21.jpg',
    venueName: 'Snake Hill Social Club',
    venueLink: 'https://www.instagram.com/snakehill.satx/',
  },
  '2024-03-16': {
    title: 'Palefade, Othiel, Houses We Die In, Larvae, Rose Ceremony',
    date: getDate('2024-03-16'),
    flyerUrl: '/flyers/2024-03-16.jpg',
    venueName: 'Arnold House (DM for address)',
  },
  '2024-03-12': {
    title:
      'SXSE Metal Showcase w/ Never Rest, Reign, Cult Burner, Postal, Deadmouth, Houses We Die In',
    date: getDate('2024-03-12'),
    flyerUrl: '/flyers/2024-03-12.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://www.comeandtakeitlive.com/',
    ticketLink:
      'https://www.etix.com/ticket/p/30695894/disaster-fest-austin-come-and-take-it-live',
  },
  '2024-03-10': {
    title: 'Glassing w/ Throat Piss, God Shell, Houses We Die In',
    date: getDate('2024-03-10'),
    flyerUrl: '/flyers/2024-03-10.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  '2024-03-03': {
    title:
      'Far From It w/ Fear of Loss, Fleishwolf, Houses We Die In, Postal, Dogmad, Voracious Contempt, Deadite',
    date: getDate('2024-03-03'),
    flyerUrl: '/flyers/2024-03-03.jpg',
    venueName: 'B-Side',
    venueLink: 'https://www.instagram.com/bsidesatx/',
  },
  '2024-02-28': {
    title: 'Livid, Noisy Neighbors, Laughing Matter, Houses We Die In',
    date: getDate('2024-02-28'),
    flyerUrl: '/flyers/2024-02-28.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  '2024-02-25': {
    title: 'Slow Pulse, Ritual, The High Cost of Playing God, Houses We Die In',
    date: getDate('2024-02-25'),
    flyerUrl: '/flyers/2024-02-25.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  '2024-02-24': {
    title:
      "Victim Blamed album release show w/ Salvinorin-A, Phonefoot, Houses We Die In, Far of Loss, Larval Therapy, 4waydancebattle, Nicole's Death",
    date: getDate('2024-02-24'),
    flyerUrl: '/flyers/2024-02-24.jpg',
    venueName: '1540 West Harlan Ave. San Antonio, TX',
  },
  '2024-02-09': {
    title: 'CNVCT, Rotten Disgust, Linger, Lament, Houses We Die In',
    date: getDate('2024-02-09'),
    flyerUrl: '/flyers/2024-02-09.jpg',
    venueName: 'Valhalla',
    venueLink: 'https://www.instagram.com/valhallatavern/',
  },
  '2023-12-22': {
    title:
      'End Means (Final Show) w/ Upsurge, Fear of Loss, Lowball, Houses We Die In',
    date: getDate('2023-12-22'),
    flyerUrl: '/flyers/2023-12-22.png',
    venueName: 'Paper Tiger',
    venueLink: 'https://papertigersatx.com/',
  },
  '2023-11-30': {
    title:
      'The High Cost of Playing God and The Vinous w/ Votive & Houses We Die In',
    date: getDate('2023-11-30'),
    flyerUrl: '/flyers/2023-11-30.jpg',
    venueName: 'Independence Brewing',
    venueLink: 'https://independencebrewing.com/',
  },
};
