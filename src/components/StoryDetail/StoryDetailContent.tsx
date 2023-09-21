'use client';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Image from 'next/image';
import storyDetailHeart from '@/../public/assets/storyDetailHeart.svg';
import storyDetailOptionBtn from '@/../public/assets/storyDetailOptionBtn.svg';

const StoryDetailContent: NextPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div className="">
        <div className="w-[303px] h-[428px] shadow-2xl mt-[12px] ml-[30px] rounded-[18.18px] ">
          <div className="text-base font-bold font-[StoryDetailFont] w-[212px] h-[21px] pt-[31px] text-[#242424] ml-[29px] ">
            <text>닉네임 1</text>
            <text className="text-storyDetailNickname"> 님의 이야기</text>

            <p className="mt-[-49px] ml-[6px] ml-[128px]">
              <Image
                className="mt-[25px] w-[24px] h-[24px] ml-[229.2px]"
                src={storyDetailOptionBtn}
                alt="storyDetailOptionBtn"
              ></Image>
            </p>

            <div className="mt-[32px] font-[StoryFont]">사연 1의 제목이 들어갑니다</div>
          </div>

          <div className="text-allCreateStoryContentFont bg-createStoryContentBg w-[254px] h-[221px] mt-[119px] ml-[24px] text-createStoryContentColor pl-[20px] pt-[24px] rounded-[8px]">
            사연의 내용이 들어갑니다
          </div>

          <div className="border-soid border-[1.5px] border-[#ECEDF0] mt-[9.64px] rounded-[16.68px] flex ml-[24px] w-[63px] h-[34.46px]">
            <Image
              className="mt-[7.64px] ml-[16.16px] w-[15.94px] h-[15.94px]"
              src={storyDetailHeart}
              alt="storyDetailHeart"
            ></Image>
            <div className="font-normal text-[11.86px] w-[8px] h-[13px] ml-[5.56px] mt-[7.12px]">
              6
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryDetailContent;
