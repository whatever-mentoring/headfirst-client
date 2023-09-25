interface MyPageButtonProps {
  buttonName: string;
  onPop: () => void;
}

export default function MyPageButton({ buttonName, onPop }: MyPageButtonProps) {
  return (
    <div
      onClick={onPop}
      className="w-full h-[66px] border-b border-[#BDBDBD] text-base text-[#535353] font-semibold flex items-center pl-[28px]"
    >
      {buttonName}
    </div>
  );
}
