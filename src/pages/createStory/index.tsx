import type { NextPage } from 'next';

// import Header from '@/components/CreateStory/Header';
import CreateStoryContent from '@/components/CreateStory/CreateStoryContent';
import CreateStoryButton from '@/components/CreateStory/CreateStoryButton';
import Address from '@/components/CreateStory/Address';
import Header from '@/components/Header';
import { useRouter } from 'next/router';

const createStory: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        {/* <Header /> */}
        <Header headerTitle="사연 작성하기" onBack={() => router.push('/main')} />
        <div className="w-[360px] h-[720px] bg-white">
          <Address />
          <CreateStoryContent />
          <CreateStoryButton />
        </div>
      </div>
    </div>
  );
};

export default createStory;
