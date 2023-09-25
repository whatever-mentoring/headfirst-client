import type { NextPage } from 'next';
// import Header from '@/components/AllCreateStory/Header';
import Address from '@/components/CreateStory/Address';
import AllCreateStoryContent from '@/components/AllCreateStory/AllCreateStoryContent';
import Header from '@/components/Header';
import { useRouter } from 'next/router';

const allCreateStory: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex flex-col w-[360px] h-screen bg-white">
        <Header headerTitle="전체 사연" onBack={() => router.push('/main')} />
        <Address />
        <div className="w-[360px] h-[720px] bg-white overflow-y-auto border-t border-[#BDBDBD]">
          <AllCreateStoryContent />
        </div>
      </div>
    </div>
  );
};

export default allCreateStory;
