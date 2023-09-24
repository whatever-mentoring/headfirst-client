import PracticeKakaoMap from '@/components/PracticeKakaoMap';
import AddStoryModal from '@/components/AddStoryModal';
import { useState } from 'react';
import NewStoryModal from '@/components/NewStoryModal';
import SignInModal from '@/components/SignInModal';

type ModalTypes = 'addStory' | 'newStory' | 'signIn';

const Practice = () => {
  // 모달창 관리
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType: ModalTypes) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <PracticeKakaoMap
          openNewStoryModal={() => openModal('newStory')}
          openAddStoryModal={() => openModal('addStory')}
        />
        <div className="flex items-center justify-center">
          {activeModal === 'addStory' && <AddStoryModal onCloseClick={closeModal} />}
          {activeModal === 'newStory' && (
            <NewStoryModal
              title="NewStoryModal"
              subtitle="NewStoryModal입니다"
              onCloseClick={closeModal}
            />
          )}
          {activeModal === 'signIn' && <SignInModal onCloseClick={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default Practice;
