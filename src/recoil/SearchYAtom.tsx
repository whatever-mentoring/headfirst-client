import { atom } from 'recoil';

const SearchYAtom = atom<number[]>({
  key: 'searchYState',
  default: [],
});

export { SearchYAtom };
