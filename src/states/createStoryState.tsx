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

export const heartCountState = atom({
  key: 'heartCountState',
  default: 0,
});

export const timeState = atom({
  key: 'timeState',
  default: '',
});

export const commentState = atom({
  key: 'commentState',
  default: [],
});

export const dataCommentState = atom({
  key: 'dataCommentState',
  default: [],
});

export const commentHeartState = atom({
  key: 'commentHeartState',
  default: 0,
});

export const storyDeleteCheckState = atom({
  key: 'storyDeleteCheckState',
  default: false,
});

export const storyDeleteModalState = atom({
  key: 'storyDeleteModalState',
  default: false,
});

export const keywordState = atom({
  key: 'keywordState',
  default: '',
});
