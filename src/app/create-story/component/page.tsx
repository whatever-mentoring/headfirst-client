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
        <Image src={Icon} alt="addressPinIcon"></Image>
        <div className="flex">
          <div>서초타운트라팰리스아파트</div>
          <div>아파트</div>
          <div>서울 서초구 서초대로 74길 23 (서초동)</div>
        </div>
      </div>
      <CreateStoryContent />
      <CreateStoryButton />
    </>
  );
};

export default page;
