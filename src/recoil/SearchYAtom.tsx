import { atom } from 'recoil';

const SearchYAtom = atom<number>({
  key: 'searchYState',
  default: 0,
});

export { SearchYAtom };
