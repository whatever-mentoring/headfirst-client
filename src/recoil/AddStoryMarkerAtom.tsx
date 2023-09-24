import { atom } from 'recoil';

export interface MarkerPosition {
  title: string;
  latlng: {
    lat: number;
    lng: number;
  };
}

export const AddStoryMarkerAtom = atom<MarkerPosition[]>({
  key: 'addStoryMarkerPosition',
  default: [],
});
