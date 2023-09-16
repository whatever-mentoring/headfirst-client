import type { NextPage } from 'next';

const CreateStoryContent: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="w-[303px] h-[481px] shadow-2xl mt-[12px] ml-[30px] rounded-[18.18px]">
          <div className="w-[212px] h-[21px] pt-[41px] font-[StoryFont] text-[#242424] ml-[29px] ">
            <input type="text" placeholder="제목을 입력해 주세요" />
          </div>

          <div className="bg-createStoryContentBg w-[254px] h-[359px] mt-[48px] ml-[24px] text-createStoryContentColor pl-[20px] pt-[24px] rounded-[8px]">
            <textarea
              className="bg-createStoryContentBg w-[212px] h-[312px]"
              placeholder="내용을 입력해 주세요"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateStoryContent;
