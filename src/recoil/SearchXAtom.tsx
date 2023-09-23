import { atom } from 'recoil';

const SearchXAtom = atom<number[]>({
  key: 'searchXState',
  default: [],
});

export { SearchXAtom };
