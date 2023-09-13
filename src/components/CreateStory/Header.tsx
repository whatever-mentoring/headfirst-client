'use client';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import arrow_back from '../../../public/arrow_back.png';

import '../../app/globals.css';

const Header: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex bg-bg w-[360px] h-[100px]">
        <button className="w-[24px] h-[24px]" onClick={() => router.back()}>
          <Image
            className="w-[24px] h-[24px] ml-[29px] mt-[42px]"
            src={arrow_back}
            alt="backButton"
          ></Image>
        </button>

        <div className="text-lg text-white text-[18px] font-[StoryFont] w-[109px] h-[25px] ml-[101px] mt-[42px]">
          사연 작성하기
        </div>
      </div>
    </>
  );
};

export default Header;
