'use client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { inputValueState, textareaValueState, timeState } from '@/states/createStoryState';
import { useEffect } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const AllCreateStoryContent: NextPage = () => {
  const router = useRouter();

  const inputValue = useRecoilValue(inputValueState);
  const textareaValue = useRecoilValue(textareaValueState);
  const time = useRecoilValue(timeState);

  const memberId = 2;
  useEffect(() => {
    axios
      .get(`http://api.headfirst.p-e.kr/api/story/search/${memberId}`, {
        headers: {
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
          <div className="font-StoryFont ml-[22px]">{inputValue}</div>
          <div className="text-allCreateStoryContentFont mt-[11px] ml-[22px]">{textareaValue}</div>
          <div className="mt-[21px] text-allCreateStoryContentDate text-xs ml-[276px] mb-[13px]">
            {time}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCreateStoryContent;
