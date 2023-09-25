import type { NextPage } from 'next';

import Header from '@/components/CreateStory/Header';
import CreateStoryContent from '@/components/CreateStory/CreateStoryContent';
import CreateStoryButton from '@/components/CreateStory/CreateStoryButton';
import Address from '@/components/CreateStory/Address';

const createStory: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <Header />
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
