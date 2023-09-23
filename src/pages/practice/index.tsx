import PracticeKakaoMap from '@/components/PracticeKakaoMap';
import AddStoryModal from '@/components/AddStoryModal';
import { useState } from 'react';
import NewStoryModal from '@/components/NewStoryModal';
import SignInModal from '@/components/SignInModal';

const Practice = () => {
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
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <PracticeKakaoMap
          openNewStoryModal={openNewStoryModal}
          openAddStoryModal={openAddStoryModal}
        />
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
      </div>
    </div>
  );
};

export default Practice;
