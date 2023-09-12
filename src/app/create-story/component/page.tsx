import type { NextPage } from 'next';
import Image from 'next/image';

import Icon from '../../../../public/Icon.png';

import Header from './Header';
import CreateStoryContent from './CreateStoryContent';
import CreateStoryButton from './CreateStoryButton';

const page: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Image
          className="w-[27px] h-[33px] ml-[27px] mt-[21px] mr-[18px]"
          src={Icon}
          alt="addressPinIcon"
        ></Image>
        <div className="flex-inline">
          <div className="flex">
            <div className="mt-[17px]">서초타운트라팰리스아파트</div>
            <p className="mt-[23px] ml-[4px] text-xs text-createStorySubAddress">아파트</p>
          </div>
          <div className="text-sm text-createStorySubAddress">
            서울 서초구 서초대로 74길 23 (서초동)
          </div>
        </div>
      </div>
      <CreateStoryContent />
      <CreateStoryButton />
    </>
  );
};

export default page;
