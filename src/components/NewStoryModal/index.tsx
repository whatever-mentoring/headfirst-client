interface NewStoryModalProps {
  title: string;
  subtitle: string;
  onCloseClick: () => void;
}

export default function NewStoryModal({ title, subtitle, onCloseClick }: NewStoryModalProps) {
  return (
    <div className="w-[312px] h-[266px] fixed bottom-[29.61px] z-10 flex items-end justify-center flex-col">
      <div
        className="rounded-full shadow-md bg-[url('/assets/close.svg')] border-none bg-no-repeat w-[52.563px] h-[52.563px] object-fill bg-[center] bg-white mb-[15px]"
        onClick={onCloseClick}
      />
      <div className="w-[312px] h-[195px] shadow-md bg-white rounded-[14px] p-[15px]">
        <div className="text-xl">{title}</div>
        <div className="text-sm text-[#6F6F6F]">{subtitle}</div>
        <div className="flex justify-between mt-[70px]">
          <button className="w-[281px] h-[39.255px] rounded-[8.41px] bg-[#F34E4E] text-[#FFF]">
            사연 작성하기
          </button>
        </div>
      </div>
    </div>
  );
}
