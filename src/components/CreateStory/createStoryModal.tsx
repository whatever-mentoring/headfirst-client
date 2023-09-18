import type { NextPage } from 'next';

import Image from 'next/image';
import createStoryModal from '../../../public/assets/createStoryModal.svg';
import createStoryModalDone from '../../../public/assets/createStoryModalDone.svg';

const CreateStoryModal: NextPage = () => {
  return (
    <>
      <div className="bg-yellow-100 w-[295px] h-[288px] rounded-2xl mt-[-500px] ml-[-21px] fixed text-center">
        <div>
          <Image
            className="mt-[14.95px] ml-[256.95px]"
            src={createStoryModalDone}
            alt="modalDone"
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
    </>
  );
};

export default CreateStoryModal;
