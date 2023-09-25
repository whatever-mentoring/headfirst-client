interface MyPageModalProps {
  title: string;
  subtitle: string;
  button_name: string;
  onCloseClick: () => void;
  onMoveClick: () => void;
}

export default function MyPageModal({
  title,
  subtitle,
  button_name,
  onCloseClick,
  onMoveClick,
}: MyPageModalProps) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[312px] h-[211] rounded-[14.02px] flex items-start justify-center flex-col bg-white p-[25px]">
      <div className="text-xl font-light">{title}</div>
      <div className="text-base font-light">{subtitle}</div>
      <div className="mt-[18px] flex flex-col gap-[10px]">
        <button
          className="w-[274px] h-[39.255px] bg-[#F34E4E] rounded-[8.412px] text-white"
          onClick={onMoveClick}
        >
          {button_name}
        </button>
        <button
          onClick={onCloseClick}
          className="w-[274px] h-[39.255px] bg-[#F7F7F8] rounded-[8.412px] text-[#F34E4E]"
        >
          취소
        </button>
      </div>
    </div>
  );
}
