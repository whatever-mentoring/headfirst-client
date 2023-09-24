'use client';

// import { commentState } from '@/states/createStoryState';

import Image from 'next/image';
import storyDetailOptionBtn from '@/../public/assets/storyDetailOptionBtn.svg';
import contentHeart from '@/../public/assets/contentHeart.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentHeartState } from '@/states/createStoryState';

import { timeState } from '@/states/createStoryState';

interface CommentTextProps {
  comment: any;
}

const CommentText: React.FC<CommentTextProps> = ({ comment }) => {
  const [commentHeart, setCommentHeart] = useRecoilState(commentHeartState);
  const time = useRecoilValue(timeState);

  return (
    <>
      <div className="bg-slate-50">
        <div className="flex">
          <text className="mt-[24px] ml-[32px] font-medium text-base">닉네임 1</text>
          <Image
            className="mt-[25px] w-[24px] h-[24px] ml-[229.2px] cursor-pointer"
            src={storyDetailOptionBtn}
            alt="storyDetailOptionBtn"
          ></Image>
        </div>
        <div className="mt-[5px] text-xs text-[#878B93] ml-[33px]">{time}</div>
        <div className="text-sm w-[286px] h-[36px] ml-[32px] mt-[8px] overflow-scroll">
          {comment}
        </div>
        <div className="flex cursor-pointer	" onClick={() => setCommentHeart(commentHeart + 1)}>
          <Image
            className="w-[12.87px] h-[11.29px] ml-[32px] mt-[14px]"
            src={contentHeart}
            alt="contentHeart"
          ></Image>
          <div className="text-[#878B93] font-normal text-xs ml-[4.13px] mt-[11px]">
            좋아요 {commentHeart}
          </div>
        </div>
        <div className="border-y-[0.23px] mt-[24px]"></div>
      </div>
    </>
  );
};

export default CommentText;
