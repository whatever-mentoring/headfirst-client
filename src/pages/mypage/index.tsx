import Header from '@/components/Header';
import MyPageButton from '@/components/MyPageButton';
import ProfileButton from '@/components/ProfileButton';
import { useRouter } from 'next/router';

const MyPage = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <Header headerTitle="마이 페이지" onBack={() => router.push('/main')}></Header>
        <div className="w-full h-[199px] flex flex-col items-center justify-center gap-[15px] border-b border-[#BDBDBD]">
          <ProfileButton width={90} height={90} />
          <div className="text-2xl text-[#535353]">닉네임님</div>
        </div>
        <MyPageButton buttonName="로그아웃" />
        <MyPageButton buttonName="탈퇴하기" />
      </div>
    </div>
  );
};

export default MyPage;
