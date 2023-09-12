import type { NextPage } from 'next';
import KakaoMap from '@/components/KakaoMap';

const Main: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <main className="w-[360px] h-screen absolute">
        <KakaoMap />
      </main>
    </div>
  );
};

export default Main;
