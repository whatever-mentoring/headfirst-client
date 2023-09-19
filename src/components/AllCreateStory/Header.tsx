'use client';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import arrow_back from '../../../public/assets/arrow_back.svg';

const Header: NextPage = () => {
  const router = useRouter();
  console.log(router);
  // const allCreateStoryTitle = '전체 사연';

  return (
    <>
      <div className="flex bg-bg w-[360px] h-[80px]">
        <button className="w-[24px] h-[24px]" onClick={() => router.back()}>
          <Image
            className="w-[24px] h-[24px] ml-[29px] mt-[32px]"
            src={arrow_back}
            alt="backButton"
          ></Image>
        </button>

        <div className="text-lg text-white text-[18px] font-StoryFont w-[109px] h-[25px] ml-[113px] mt-[32px]">
          전체 사연
        </div>
      </div>
    </>
  );
};

export default Header;
