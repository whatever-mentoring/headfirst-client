import type { NextPage } from 'next';
import Image from 'next/image';
import Icon from '@/../public/assets/Icon.svg';
import { useRecoilValue } from 'recoil';
import { NewStoryMarkerTitle } from '@/recoil/NewStoryMarkerTitle';
import { NewStoryMarkerSub } from '@/recoil/NewStoryMarkerSub';
import { AddStoryMarkerTitle } from '@/recoil/AddStoryMarkerTitle';
import { AddStoryMarkerSub } from '@/recoil/AddStoryMarkerSub';

const Address: NextPage = () => {
  const title = useRecoilValue(NewStoryMarkerTitle || AddStoryMarkerTitle);
  const sub = useRecoilValue(NewStoryMarkerSub || AddStoryMarkerSub);
  return (
    <div className="flex">
      <Image
        className="w-[27px] h-[33px] ml-[27px] mt-[21px] mr-[18px]"
        src={Icon}
        alt="addressPinIcon"
      ></Image>
      <div className="flex-inline">
        <div className="flex">
          <div className="mt-[17px]">{title}</div>
          <p className="mt-[23px] ml-[4px] text-xs text-createStorySubAddress">아파트</p>
        </div>
        <div className="text-sm text-createStorySubAddress">{sub}</div>
      </div>
    </div>
  );
};

export default Address;
