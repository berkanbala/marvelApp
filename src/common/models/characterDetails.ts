export interface ICharacterDetails {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: string;
  };
  series: {
    available: string;
  };
  stories: {
    available: string;
  };
  events: {
    available: string;
  };
}
