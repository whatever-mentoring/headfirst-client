import { atom } from 'recoil';

const SearchXAtom = atom<number>({
  key: 'searchXState',
  default: 0,
});

export { SearchXAtom };
