import type { NextPage } from 'next';
import Image from 'next/image';

import Icon from '../../../public/assets/Icon.svg';

import Header from '@/components/CreateStory/Header';
import CreateStoryContent from '@/components/CreateStory/CreateStoryContent';
import CreateStoryButton from '@/components/CreateStory/CreateStoryButton';

const createStory: NextPage = () => {
  return (
    <div className="bg-pink-100 h-[850px] p-[25px]">
      <div className="ml-[525px] w-[360px] h-[780px]">
        <Header />
        <div className="w-[360px] h-[720px] bg-white">
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
        </div>
      </div>
    </div>
  );
};

export default createStory;
