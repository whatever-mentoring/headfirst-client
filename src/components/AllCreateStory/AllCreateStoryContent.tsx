'use client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { ResMemberId, timeState } from '@/states/createStoryState';
import { useEffect } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { ResInputState, ResTextareaState } from '@/states/createStoryState';

const AllCreateStoryContent: NextPage = () => {
  const router = useRouter();

  // const inputValue = useRecoilValue(inputValueState);
  // const textareaValue = useRecoilValue(textareaValueState);
  const time = useRecoilValue(timeState);

  const resInput = useRecoilValue(ResInputState);
  const resTextarea = useRecoilValue(ResTextareaState);
  const resMemberId = useRecoilValue(ResMemberId);

  useEffect(() => {
    axios
      .get(`http://api.headfirst.p-e.kr/api/story/search/${resMemberId}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      })
      .then((response) => {
        console.log('서버 응답 데이터 :', response.data);
      })
      .catch((error) => {
        console.log('오류 ...', error);
      });
  }, []);

  return (
    <>
      <div>
        <div className="border-t w-[360px] mt-[15px]"></div>
        <div
          className="mt-[19px] border-b w-[360px] cursor-pointer"
          onClick={() => router.push('/storyDetail')}
        >
          <div className="font-StoryFont ml-[22px]">{resInput}</div>
          <div className="text-allCreateStoryContentFont mt-[11px] ml-[22px]">{resTextarea}</div>
          <div className="mt-[21px] text-allCreateStoryContentDate text-xs ml-[276px] mb-[13px]">
            {time}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCreateStoryContent;
