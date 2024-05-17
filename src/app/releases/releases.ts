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
