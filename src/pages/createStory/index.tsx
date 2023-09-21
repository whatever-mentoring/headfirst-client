import type { NextPage } from 'next';

import Header from '@/components/CreateStory/Header';
import CreateStoryContent from '@/components/CreateStory/CreateStoryContent';
import CreateStoryButton from '@/components/CreateStory/CreateStoryButton';
import Address from '@/components/CreateStory/Address';

const createStory: NextPage = () => {
  return (
    <div className="bg-pink-100 h-[850px] p-[25px]">
      <div className="ml-[525px] w-[360px] h-[780px]">
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
