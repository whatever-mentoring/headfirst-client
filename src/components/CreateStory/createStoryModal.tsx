import type { NextPage } from 'next';

const CreateStoryModal: NextPage = () => {
  return (
    <>
      <div className="bg-yellow-100 w-[295px] h-[288px]">
        <div>
          <div>x</div>
          <div>사연 등록 완료</div>
          <div>
            <div>사연 등록이 완료되었습니다.</div>
            <div>이제 지도에서</div>
            <div>나의 사연을 확인하실 수 있어요:)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateStoryModal;
