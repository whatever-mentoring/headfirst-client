import type { NextPage } from 'next';
import Header from '@/components/AllCreateStory/Header';
import Address from '@/components/CreateStory/Address';
import AllCreateStoryContent from '@/components/AllCreateStory/AllCreateStoryContent';

const allCreateStory: NextPage = () => {
  return (
    <div className="ml-[40%]">
      <Header />
      <Address />
      <AllCreateStoryContent />
    </div>
  );
};

export default allCreateStory;
