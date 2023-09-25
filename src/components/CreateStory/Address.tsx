import type { NextPage } from 'next';
import Image from 'next/image';
import Icon from '@/../public/assets/Icon.svg';
import { useRecoilValue } from 'recoil';
import { StoryMarkerTitle } from '@/recoil/StoryMarkerTitle';
import { StoryMarkerSub } from '@/recoil/StoryMarkerSub';

const Address: NextPage = () => {
  const title = useRecoilValue(StoryMarkerTitle);
  const sub = useRecoilValue(StoryMarkerSub);
  return (
    <div className="h-[87px] flex items-center pl-[27px]">
      <Image className="w-[27px] h-[33px] mr-[17px]" src={Icon} alt="addressPinIcon"></Image>
      <div className="flex-inline">
        <div className="flex">
          <div className="">{title}</div>
          {/* <p className="mt-[23px] ml-[4px] text-xs text-createStorySubAddress">아파트</p> */}
        </div>
        <div className="text-sm text-createStorySubAddress">{sub}</div>
      </div>
    </div>
  );
};

export default Address;
