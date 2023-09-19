'use client';
import type { NextPage } from 'next';

const AllCreateStoryContent: NextPage = () => {
  return (
    <>
      <div>
        <div className="border-t w-[360px] mt-[15px]"></div>
        <div className="mt-[19px] border-b w-[360px]">
          <div className="font-StoryFont ml-[22px]">사연 1의 제목이 들어갑니다.</div>
          <div className="text-allCreateStoryContentFont mt-[11px] ml-[22px]">
            내용이 들어갑니다.
          </div>
          <div className="mt-[21px] text-allCreateStoryContentDate text-xs ml-[276px] mb-[13px]">
            09/06 23:01
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCreateStoryContent;
