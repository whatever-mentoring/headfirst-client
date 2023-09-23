import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { storyDeleteCheckState } from '@/states/createStoryState';

const storyDeleteModal: NextPage = () => {
  const [storyDeleteCheck, setStoryDeleteCheck] = useRecoilState(storyDeleteCheckState);

  return (
    <div className="fixed w-[312px] h-[211px] mt-[-400px] ml-[-35px] rounded-[14.02px] bg-[#FFFFFF] font-light	">
      <div className="mt-[25px] ml-[23px] text-xl">삭제하기</div>
      <div className="ml-[23px] text-base">작성하신 사연을 삭제하시겠어요?</div>
      <div className="ml-[23px]">
        <button className="bg-[#F34E4E] w-[274px] h-[39.25px] rounded-[8.41px] mt-[18px]">
          <p className="font-StoryDeleteFont text-[#FFFFFF] cursor-pointer">삭제하기</p>
        </button>
        <button
          className="bg-[#F7F7F8] w-[274px] h-[39.25px] rounded-[8.41px] mt-[10.74px]"
          onClick={() => {
            setStoryDeleteCheck(false);
            console.log(storyDeleteCheck);
          }}
        >
          <p className="font-StoryDeleteFont text-[#F34E4E] mt-[-5px] cursor-pointer">취소</p>
        </button>
      </div>
    </div>
  );
};

export default storyDeleteModal;
