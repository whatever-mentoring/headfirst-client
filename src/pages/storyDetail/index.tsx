'use client';
import type { NextPage } from 'next';

import Header from '@/components/StoryDetail/Header';
import Address from '@/components/CreateStory/Address';
import StoryDetailContent from '@/components/StoryDetail/StoryDetailContent';

const StoryDetail: NextPage = () => {
  return (
    <>
      <div className="ml-[40%]">
        <Header />
        <Address />
        <StoryDetailContent />
      </div>
    </>
  );
};

export default StoryDetail;
