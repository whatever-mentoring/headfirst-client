'use client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { inputValueState, textareaValueState } from '@/states/createStoryState';

const AllCreateStoryContent: NextPage = () => {
  const router = useRouter();

  const inputValue = useRecoilValue(inputValueState);
  const textareaValue = useRecoilValue(textareaValueState);

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
            09/06 23:01
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCreateStoryContent;
