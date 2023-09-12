import type { NextPage } from 'next';

const CreateStoryContent: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="w-[303px] h-[481px] shadow-2xl mt-[12px] ml-[30px] rounded-[18.18px]">
          <div className="w-[212px] h-[21px] pt-[41px] font-[StoryFont] text-[#242424] ml-[29px]">
            사연 1의 제목이 들어갑니다
          </div>
          <div className="bg-createStoryContentBg w-[254px] h-[359px] mt-[48px] ml-[24px] text-createStoryContentColor pl-[20px] pt-[24px] rounded-[8px]">
            내용이 들어갑니다
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateStoryContent;
