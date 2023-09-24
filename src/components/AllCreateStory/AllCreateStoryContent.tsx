'use client';
import type { NextPage } from 'next';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { storyIdState } from '@/states/createStoryState';
import { useEffect } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { ResInputState, ResTextareaState } from '@/states/createStoryState';

import { AddStoryMarkerTitle } from '@/recoil/AddStoryMarkerTitle';
import { keywordAllDataState } from '@/states/createStoryState';
import InputTextarea from './InputTextarea';

const AllCreateStoryContent: NextPage = (): any => {
  // const setTime = useRecoilValue(timeState);
  const setStoryId = useSetRecoilState(storyIdState);

  const setInput = useSetRecoilState(ResInputState);
  const setTextarea = useSetRecoilState(ResTextareaState);

  const [keywordAllData, setKeywordAllData] = useRecoilState(keywordAllDataState);

  const title = useRecoilValue(AddStoryMarkerTitle);

  useEffect(() => {
    axios
      .get(`http://api.headfirst.p-e.kr/api/story/search?keyword=${title}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      })
      .then((response) => {
        console.log('키워드 서버 응답 데이터 :', response.data.data);
        setKeywordAllData(response.data.data);
        setStoryId(response.data.data.id);
        setInput(response.data.data.title);
        setTextarea(response.data.data.content);
        // setTime(response.data.data.created_at);
      })
      .catch((error) => {
        console.log('오류 ...', error);
      });
  }, []);

  return (
    <>
      <div className="border-t w-[360px] mt-[15px]"></div>
      {keywordAllData.map((data, index) => (
        <InputTextarea
          key={index}
          resInput={data.title}
          resTextarea={data.content}
          time={data.created_at}
          storyId={data.id}
        />
      ))}
    </>
  );
};

export default AllCreateStoryContent;
