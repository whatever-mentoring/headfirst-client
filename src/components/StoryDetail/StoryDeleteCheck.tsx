'use client';
import type { NextPage } from 'next';
import { storyDeleteModalState } from '@/states/createStoryState';
import { useRecoilState } from 'recoil';
import StoryDeleteModal from '@/components/StoryDetail/StoryDeleteModal';

const StoryDeleteCheck: NextPage = () => {
  const [storyDeleteModal, setStoryDeleteModal] = useRecoilState(storyDeleteModalState);
  return (
    <div className="fixed">
      <div className="w-[361px] h-[630px] ml-[-59.7px] mt-[-265px] bg-[#444444]/70 " />
      <div
        className="flex cursor-pointer  w-[361px] h-[70px] bg-[#FCFCFC] mt-[px] ml-[-59.7px] fixed"
        onClick={() => {
          setStoryDeleteModal(true);
          console.log('storyDeleteCheck????', storyDeleteModal);
        }}
      >
        <text className="text-[#000000] ml-[143px] py-[21px] font-light text-xl ">삭제하기</text>
      </div>
      {storyDeleteModal == true ? <StoryDeleteModal /> : null}
    </div>
  );
};

export default StoryDeleteCheck;
