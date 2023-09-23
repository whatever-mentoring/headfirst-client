import type { NextPage } from 'next';

const storyDeleteModal: NextPage = () => {
  return (
    <>
      <div>삭제하기</div>
      <div>작성하신 사연을 삭제하시겠어요?</div>
      <div>
        <button>삭제하기</button>
        <button>취소</button>
      </div>
    </>
  );
};

export default storyDeleteModal;

// <div className="cursor-pointer fixed w-[361px] h-[70px] bg-[#FCFCFC]">
//         <div>
//           <text> 삭제하기 </text>
//         </div>
