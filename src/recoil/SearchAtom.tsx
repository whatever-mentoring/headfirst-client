import { atom } from 'recoil';

const SearchAtom = atom({
  key: 'searchState',
  default: '',
});

export { SearchAtom };
