import Header from '@/components/Header';
import MyPageButton from '@/components/MyPageButton';
import ProfileButton from '@/components/ProfileButton';
import MyPageModal from '@/components/MyPageModal';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ModalOverlay from '@/components/ModalOverlay';

const MyPage = () => {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalType: any) => {
    setActiveModal(modalType);
  };
  const closeModal = () => {
    setActiveModal(null);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <Header headerTitle="마이 페이지" onBack={() => router.push('/main')}></Header>
        <div className="w-full h-[199px] flex flex-col items-center justify-center gap-[15px] border-b border-[#BDBDBD]">
          <ProfileButton width={90} height={90} />
          <div className="text-2xl text-[#535353]">닉네임님</div>
        </div>
        <MyPageButton buttonName="로그아웃" onPop={() => openModal('logout')} />
        <MyPageButton buttonName="탈퇴하기" onPop={() => openModal('withdraw')} />
      </div>
      {activeModal === 'logout' && (
        <ModalOverlay show={true} onHideModal={closeModal}>
          <MyPageModal
            title="로그아웃"
            subtitle="로그아웃 하시겠어요?"
            button_name="로그아웃"
            onCloseClick={closeModal}
            onMoveClick={() => router.push('/')}
          />
        </ModalOverlay>
      )}

      {activeModal === 'withdraw' && (
        <ModalOverlay show={true} onHideModal={closeModal}>
          <MyPageModal
            title="탈퇴하기"
            subtitle="회원 탈퇴를 진행하시겠어요?"
            button_name="회원탈퇴"
            onCloseClick={closeModal}
            onMoveClick={() => router.push('/')}
          />
        </ModalOverlay>
      )}
    </div>
  );
};

export default MyPage;
