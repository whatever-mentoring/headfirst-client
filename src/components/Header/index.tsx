import Image from 'next/image';

interface HeaderProps {
  headerTitle: string;
  onBack: () => void;
}

export default function Header({ headerTitle, onBack }: HeaderProps) {
  return (
    <div className="w-full h-[80px] bg-[#FF6D6D] flex items-center pl-[30px] pr-[54px]">
      <div>
        <Image
          src="/assets/arrow-back-w.svg"
          alt="back-arrow"
          width={24}
          height={24}
          onClick={onBack}
        />
      </div>
      <div className="text-lg text-white font-extrabold flex-grow text-center">{headerTitle}</div>
    </div>
  );
}
