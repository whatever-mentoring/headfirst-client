import type { NextPage } from 'next';
import CreateStoryModal from './createStoryModal';
import { useRecoilState } from 'recoil';
import { createStoryModalState } from '@/states/createStoryState';

// createStoryModal
// import CreateStoryModal from './createStoryModal';

const CreateStoryButton: NextPage = () => {
  const [modal, setModal] = useRecoilState(createStoryModalState);

  const modalHandle = () => {
    setModal(true);
    console.log(modal);

    // router.push('/main');
  };

  return (
    <>
      <div className="bg-createStoryBtn w-[250px] h-[50px] ml-[55px] mt-[46px] mb-[45px] rounded-full">
        <button
          className="text-white font-StoryFont pt-[13px] pl-[68px] text-lg"
          onClick={() => modalHandle()}
        >
          사연 등록 완료
        </button>
        {modal === true ? <CreateStoryModal /> : null}
      </div>
    </>
  );
};

export default CreateStoryButton;
