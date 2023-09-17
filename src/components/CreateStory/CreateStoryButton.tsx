import type { NextPage } from 'next';
import { useState } from 'react';
import CreateStoryModal from './createStoryModal';

// import CreateStoryModal from './createStoryModal';

const CreateStoryButton: NextPage = () => {
  const [modal, setModal] = useState(false);

  const modalHandle = () => {
    console.log(modal);
    setModal(true);
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
