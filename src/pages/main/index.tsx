import type { NextPage } from 'next';
import KakaoMap from '@/components/KakaoMap';
import MainSearchBar from '@/components/MainSearchBar';
import ProfileButton from '@/components/ProfileButton';
import AddStoryModal from '@/components/AddStoryModal';
import { useState } from 'react';
import NewStoryModal from '@/components/NewStoryModal';
import SignInModal from '@/components/SignInModal';

const Main: NextPage = () => {
  // AddStoryModal
  const [isAddStoryModalVisible, setIsAddStoryModalVisible] = useState(false);

  const openAddStoryModal = () => {
    setIsAddStoryModalVisible(true);
  };

  const closeAddStoryModal = () => {
    setIsAddStoryModalVisible(false);
  };

  // NewStoryModal
  const [isNewStoryModalVisible, setIsNewStoryModalVisible] = useState(false);

  const openNewStoryModal = () => {
    setIsNewStoryModalVisible(true);
  };

  const closeNewStoryModal = () => {
    setIsNewStoryModalVisible(false);
  };

  // SignInModal
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  // const openAddStoryModal = () => {
  //   setIsAddStoryModalVisible(true);
  // };

  const closeSignInModal = () => {
    setIsSignInModalVisible(false);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <main className="w-[360px] h-screen absolute">
        <header className="fixed top-[29.61px] z-10 flex items-center justify-center gap-[8.51px]">
          <MainSearchBar />
          <ProfileButton width={50} height={50} />
        </header>
        <KakaoMap openNewStoryModal={openNewStoryModal} openAddStoryModal={openAddStoryModal} />
        <div className="flex items-center justify-center">
          {isAddStoryModalVisible && (
            <AddStoryModal
              title="AddStoryModal"
              subtitle="AddStoryModal입니다"
              onCloseClick={closeAddStoryModal}
            />
          )}
          {isNewStoryModalVisible && (
            <NewStoryModal
              title="NewStoryModal"
              subtitle="NewStoryModal입니다"
              onCloseClick={closeNewStoryModal}
            />
          )}
          {isSignInModalVisible && <SignInModal onCloseClick={closeSignInModal} />}
        </div>
      </main>
    </div>
  );
};

export default Main;
