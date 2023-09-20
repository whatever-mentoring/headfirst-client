'use client';
import type { NextPage } from 'next';

import Image from 'next/image';
import storyDetailOptionBtn from '@/../public/assets/storyDetailOptionBtn.svg';
import contentHeart from '@/../public/assets/contentHeart.svg';
import contentPost from '@/../public/assets/contentPost.svg';

const Content: NextPage = () => {
  return (
    <>
      <div className="w-[350px] h-[407px] bg-indigo0-10 ml-[7.5px] overflow-scroll">
        <div className="">
          <div className="">
            <div className="flex ">
              <text className="mt-[24px] ml-[32px] font-medium text-base">닉네임 1</text>
              <Image
                className="mt-[25px] w-[24px] h-[24px] ml-[229.2px]"
                src={storyDetailOptionBtn}
                alt="storyDetailOptionBtn"
              ></Image>
            </div>
            <div className="mt-[5px] text-xs text-[#878B93] ml-[33px]">09/06 23:01</div>
            <div className="text-sm w-[286px] h-[36px] ml-[32px] mt-[8px] overflow-scroll">
              댓글 내용들이 이만큼 들어가요. 댓글 내용들이 이만큼 들어가요.댓글 내용들이 이만큼
              들어가요.댓글 내용들이 이만큼 들어가요.
            </div>
            <div className="flex">
              <Image
                className="w-[12.87px] h-[11.29px] ml-[32px] mt-[14px]"
                src={contentHeart}
                alt="contentHeart"
              ></Image>
              <div className="text-[#878B93] font-normal text-xs ml-[4.13px] mt-[11px]">
                좋아요 1
              </div>
            </div>
            <div className="border-y-[0.23px] mt-[24px]"></div>
          </div>
          <div className="">
            <div className="flex ">
              <text className="mt-[24px] ml-[32px] font-medium text-base">닉네임 1</text>
              <Image
                className="mt-[25px] w-[24px] h-[24px] ml-[229.2px]"
                src={storyDetailOptionBtn}
                alt="storyDetailOptionBtn"
              ></Image>
            </div>
            <div className="mt-[5px] text-xs text-[#878B93] ml-[33px]">09/06 23:01</div>
            <div className="text-sm w-[286px] h-[36px] ml-[32px] mt-[8px] overflow-scroll">
              댓글 내용들이 이만큼 들어가요. 댓글 내용들이 이만큼 들어가요.댓글 내용들이 이만큼
              들어가요.댓글 내용들이 이만큼 들어가요.
            </div>
            <div className="flex">
              <Image
                className="w-[12.87px] h-[11.29px] ml-[32px] mt-[14px]"
                src={contentHeart}
                alt="contentHeart"
              ></Image>
              <div className="text-[#878B93] font-normal text-xs ml-[4.13px] mt-[11px]">
                좋아요 1
              </div>
            </div>
            <div className="border-y-[0.23px] mt-[24px]"></div>
          </div>
        </div>
      </div>
      <div className="flex shadow-2xl w-[325px] h-[48px] ml-[20px] rounded-lg">
        <input type="checkbox" className="w-[24px] h-[24px] ml-[28px] mt-[14px]" />{' '}
        <label className="ml-[4px] mt-[15px] text-[#A9A9A9] text-sm">익명</label>
        <input
          className="w-[127px] h-[19px] ml-[17px] mt-[15px]"
          type="text"
          placeholder="댓글을 입력하세요"
        />
        <Image
          className="w-[24px] h-[24px] mt-[14px] ml-[60px]"
          src={contentPost}
          alt="contentPost"
        ></Image>
      </div>
    </>
  );
};

export default Content;
