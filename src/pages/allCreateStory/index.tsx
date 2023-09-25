import type { NextPage } from 'next';
import Header from '@/components/AllCreateStory/Header';
import Address from '@/components/CreateStory/Address';
import AllCreateStoryContent from '@/components/AllCreateStory/AllCreateStoryContent';

const allCreateStory: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <Header />
        <Address />
        <AllCreateStoryContent />
      </div>
    </div>
  );
};

export default allCreateStory;
