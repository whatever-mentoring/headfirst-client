'use client';
import type { NextPage } from 'next';

import Header from '@/components/StoryDetail/Header';
import Address from '@/components/CreateStory/Address';
import StoryDetailContent from '@/components/StoryDetail/StoryDetailContent';
import Content from '@/components/StoryDetail/Content';

const StoryDetail: NextPage = () => {
  return (
    <div>
      <div className="ml-[40%] w-[360px] h-[1024px] ">
        <div className="w-[363px] h-[590px] bg-white">
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
