import type { NextPage } from 'next';

const CreateStoryButton: NextPage = () => {
  return (
    <>
      <div className="bg-createStoryBtn w-[250px] h-[50px] ml-[55px] mt-[46px] mb-[45px] rounded-full">
        <div className="text-white font-[StoryFont] pt-[13px] pl-[68px]">사연 등록 완료</div>
      </div>
    </>
  );
};

export default CreateStoryButton;
