interface MyPageButtonProps {
  buttonName: string;
}

export default function MyPageButton({ buttonName }: MyPageButtonProps) {
  return (
    <div className="w-full h-[66px] border-b border-[#BDBDBD] text-base text-[#535353] font-semibold flex items-center pl-[28px]">
      {buttonName}
    </div>
  );
}
