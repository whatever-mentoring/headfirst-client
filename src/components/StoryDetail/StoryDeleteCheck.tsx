'use client';
import type { NextPage } from 'next';

const StoryDeleteCheck: NextPage = () => {
  return (
    <>
      <div className="cursor-pointer fixed w-[361px] h-[70px] bg-[#FCFCFC] mt-[757px]">
        <div>
          <text className="text-[#000000] ml-[143px] mt-[21px]"> 삭제하기 </text>
        </div>
      </div>
    </>
  );
};

export default StoryDeleteCheck;
