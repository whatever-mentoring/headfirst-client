import { atom } from 'recoil';

// 객체 형식의 상태를 나타내는 인터페이스
interface MarkerPosition {
  lat: number;
  lng: number;
}

const NewStoryMarkerAtom = atom<MarkerPosition[]>({
  key: 'newStoryState', // 상태의 고유 키
  default: [],
});

export { NewStoryMarkerAtom };
