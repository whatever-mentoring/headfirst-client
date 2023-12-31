import type { NextPage } from 'next';

import Image from 'next/image';
import createStoryModal from '../../../public/assets/createStoryModal.svg';
import createStoryModalDone from '../../../public/assets/createStoryModalDone.svg';

import { createStoryModalState } from '@/states/createStoryState';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

const CreateStoryModal: NextPage = () => {
  const setModal = useSetRecoilState(createStoryModalState);
  const router = useRouter();

  return (
    <div className="absolute top-[30%] left-[10%] bg-slate-50 w-[295px] h-[288px] rounded-2xl text-center">
      <div>
        <Image
          className="mt-[14.95px] ml-[256.95px] cursor-pointer"
          src={createStoryModalDone}
          alt="modalDone"
          onClick={() => {
            setModal(false);
            router.push('/main');
          }}
        ></Image>
        <div className="font-bold w-[113px] h-[24px] mt-[3.97px] ml-[91px] text-xl">
          사연 등록 완료
        </div>
        <div className="w-[210px] h-[57px] mt-[19px] ml-[43px] text-createStoryModalFont text-base text-center">
          <div>사연 등록이 완료되었습니다.</div>
          <div>이제 지도에서</div>
          <div>나의 사연을 확인하실 수 있어요:)</div>
        </div>
        <Image
          className="w-[108px] h-[108px] ml-[89px] mt-[19px]"
          src={createStoryModal}
          alt="modal"
        ></Image>
      </div>
    </div>
  );
};

export default CreateStoryModal;
