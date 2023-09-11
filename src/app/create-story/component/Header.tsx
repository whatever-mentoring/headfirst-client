import type { NextPage } from 'next';
import Image from 'next/image';
import arrow_back from '../../../../public/arrow_back.png';

import '../../globals.css';

const Header: NextPage = () => {
  return (
    <>
      <div className="flex bg-bg w-[360px] h-[100px]">
        <Image
          className="w-[24px] h-[24px] ml-[30px] mt-[37px]"
          src={arrow_back}
          alt="backButton"
        ></Image>
        <div className="text-white text-[18px] font-[StoryFont] w-[109px] h-[25px] ml-[89px] mt-[42px]">
          사연 작성하기
        </div>
      </div>
    </>
  );
};

export default Header;
