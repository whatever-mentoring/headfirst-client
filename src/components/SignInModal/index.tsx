interface SignInModalProps {
  onCloseClick: () => void;
}

export default function SignInModal({ onCloseClick }: SignInModalProps) {
  const SignInGuide = (
    <div>
      사연을 작성하려면 로그인이 필요해요.
      <br />
      회원가입을 진행하시겠어요?
    </div>
  );

  return (
    <div className="w-[312px] h-[266px] fixed bottom-[34px] z-10 flex items-end justify-center flex-col">
      <div className="w-[312px] h-[195px] shadow-md bg-white rounded-[14px] p-[15px]">
        <div className="text-base">{SignInGuide}</div>
        <div className="flex flex-col gap-[10px] mt-[25px]">
          <button className="w-[281px] h-[39.255px] rounded-[8.41px] bg-[#F34E4E] text-[#FFF]">
            지금 회원가입하기
          </button>
          <button
            onClick={onCloseClick}
            className="w-[281px] h-[39.255px] rounded-[8.41px] bg-[#F7F7F8] text-[#F34E4E]"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
