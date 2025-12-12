export interface Release {
  title: string;
  artworkUrl: string;
  songs: {
    title: string;
    url: string;
    unreleased?: boolean;
  }[];
}

export const RELEASES: Release[] = [
  {
    title: "i'll stay as long as you do",
    artworkUrl: '/artwork/2026-ep-alt-artwork.jpg',
    songs: [
      {
        title: "i'll stay as long as you do",
        url: '/releases/2026-ep/ill-stay-as-long-as-you-do',
      },
    ],
  },
  {
    title: "Saint Valentine's Day Massacre",
    artworkUrl: '/artwork/saint-valentines-day-massacre-artwork.jpg',
    songs: [
      {
        title: 'cigarette burned visions',
        url: '/releases/saint-valentines-day-massacre/cigarette-burned-visions',
      },
      {
        title: 'see you on the other side',
        url: '/releases/saint-valentines-day-massacre/see-you-on-the-other-side',
      },
    ],
  },
  {
    title: 'portraits of you // purgatory creek',
    artworkUrl: '/artwork/2024-dual-release-artwork.jpg',
    songs: [
      {
        title: 'portraits of you',
        url: '/releases/2024-dual-release/portraits-of-you',
      },
      {
        title: 'purgatory creek',
        url: '/releases/2024-dual-release/purgatory-creek',
      },
    ],
  },
  {
    title: 'Faces of the Suffering',
    artworkUrl: '/artwork/fots-artwork.jpg',
    songs: [
      {
        title: 'all we leave behind',
        url: '/releases/faces-of-the-suffering/all-we-leave-behind',
      },
      {
        title: 'apparitions',
        url: '/releases/faces-of-the-suffering/apparitions',
      },
      {
        title: 'shattered hands',
        url: '/releases/faces-of-the-suffering/shattered-hands',
      },
      {
        title: 'political tragedy',
        url: '/releases/faces-of-the-suffering/political-tragedy',
      },
      {
        title: 'restricted veins',
        url: '/releases/faces-of-the-suffering/restricted-veins',
      },
      {
        title: 'predisposed',
        url: '/releases/faces-of-the-suffering/predisposed',
      },
      {
        title: 'lonely grave',
        url: '/releases/faces-of-the-suffering/lonely-grave',
      },
    ],
  },
];
