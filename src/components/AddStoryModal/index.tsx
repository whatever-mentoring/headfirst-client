import { AddStoryMarkerAtom } from '@/recoil/AddStoryMarkerAtom';
import { useRecoilValue } from 'recoil';
import { AddStoryMarkerTitle } from '@/recoil/AddStoryMarkerTitle';
import { useRouter } from 'next/router';

interface AddStoryModalProps {
  // title: string;
  // subtitle: string;
  onCloseClick: () => void;
}

export default function AddStoryModal({ onCloseClick }: AddStoryModalProps) {
  const title = useRecoilValue(AddStoryMarkerTitle);
  const data = useRecoilValue(AddStoryMarkerAtom);
  console.log('모달 title', title);
  const subtitle = String(data[1]);

  const router = useRouter();

  const handleAllStory = () => {
    router.push('/allCreateStory');
  };

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
          <button
            className="w-[136.537px] h-[39.255px] rounded-[8.41px] bg-[#F7F7F8] text-[#F34E4E]"
            onClick={handleAllStory}
          >
            전체 사연보기
          </button>
          <button
            className="w-[136.537px] h-[39.255px] rounded-[8.41px] bg-[#F34E4E] text-[#FFF]"
            onClick={() => router.push('/createStory')}
          >
            사연 작성하기
          </button>
        </div>
      </div>
    </div>
  );
}
