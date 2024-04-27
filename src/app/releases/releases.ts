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
    artworkUrl: '/artwork/ep1-artwork-white-bg.jpg',
    songs: [
      {
        title: 'all we leave behind',
        url: '/releases/faces-of-the-suffering/all-we-leave-behind',
        unreleased: true,
      },
      {
        title: 'apparitions',
        url: '/releases/faces-of-the-suffering/apparitions',
      },
      {
        title: 'shattered hands',
        url: '/releases/faces-of-the-suffering/shattered-hands',
        unreleased: true,
      },
      {
        title: 'political tragedy',
        url: '/releases/faces-of-the-suffering/political-tragedy',
        unreleased: true,
      },
      {
        title: 'restricted veins',
        url: '/releases/faces-of-the-suffering/restricted-veins',
        unreleased: true,
      },
      {
        title: 'predisposed',
        url: '/releases/faces-of-the-suffering/predisposed',
        unreleased: true,
      },
      {
        title: 'lonely grave',
        url: '/releases/faces-of-the-suffering/lonely-grave',
      },
    ],
  },
];
