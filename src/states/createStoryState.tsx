import { atom } from 'recoil';

export const createStoryModalState = atom<string | boolean>({
  key: 'createStoryModalState',
  default: false,
});
