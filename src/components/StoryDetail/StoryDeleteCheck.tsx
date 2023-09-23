'use client';
import type { NextPage } from 'next';

const StoryDeleteCheck: NextPage = () => {
  return (
    <div className="bg-pink-100 fixed">
      <div className="cursor-pointer fixed w-[361px] h-[70px] bg-[#FCFCFC] mt-[350px] ml-[-59.7px] ">
        <div>
          <text className="text-[#000000] ml-[143px] pt-[21px] pt-[21px] font-light">삭제하기</text>
        </div>
      </div>
    </div>
  );
};

export default StoryDeleteCheck;
