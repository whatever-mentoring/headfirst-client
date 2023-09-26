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

export const tokenState = atom({
  key: 'tokenState',
  default: '',
});

export const ResInputState = atom({
  key: 'ResInputState',
  default: '',
});

export const ResTextareaState = atom({
  key: 'ResTextareaState',
  default: '',
});

export const ResMemberId = atom({
  key: 'ResMemberId',
  default: 0,
});

export const keywordAllDataState = atom({
  key: 'keywordAllDataState',
  default: [],
});

export const storyIdState = atom({
  key: 'storyIdState',
  default: 0,
});

export const idState = atom({
  key: 'idState',
  default: 0,
});

export const detailStoryTitleState = atom({
  key: 'detailStoryTitleState',
  default: '',
});

export const detailStoryContentState = atom({
  key: 'detailStoryContentState',
  default: '',
});

export const storyidState = atom({
  key: 'storyidState',
  default: 0,
});
