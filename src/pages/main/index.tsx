import KakaoMap from '@/components/KakaoMap';
import AddStoryModal from '@/components/AddStoryModal';
import { useState } from 'react';
import NewStoryModal from '@/components/NewStoryModal';
import SignInModal from '@/components/SignInModal';
import MainSearchBar from '@/components/MainSearchBar';
import ProfileButton from '@/components/ProfileButton';

type ModalTypes = 'addStory' | 'newStory' | 'signIn';

const Main = () => {
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
        <header className="fixed top-[29.61px] z-10 flex items-center justify-center gap-[8.51px]">
          <MainSearchBar />
          <ProfileButton width={50} height={50} />
        </header>
        <KakaoMap
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

export default Main;
