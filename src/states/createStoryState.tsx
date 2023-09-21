import { atom } from 'recoil';

export const createStoryModalState = atom<string | boolean>({
  key: 'createStoryModalState',
  default: false,
});

export const inputValueState = atom({
  key: 'inputValueState',
  default: '',
});

export const textareaValueState = atom({
  key: 'textareaValueState',
  default: '',
});
