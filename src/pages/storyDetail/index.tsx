'use client';
import type { NextPage } from 'next';

import Header from '@/components/StoryDetail/Header';
import Address from '@/components/CreateStory/Address';
import StoryDetailContent from '@/components/StoryDetail/StoryDetailContent';
import Content from '@/components/StoryDetail/Content';

const StoryDetail: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <div className="w-[360px] bg-white">
          <Header />
          <Address />
          <StoryDetailContent />
        </div>
        <Content />
      </div>
    </div>
  );
};

export default StoryDetail;
