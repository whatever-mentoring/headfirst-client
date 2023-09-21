// import axios from 'axios';
import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { inputValueState, textareaValueState } from '@/states/createStoryState';

const CreateStoryContent: NextPage = () => {
  // const url = '/api/story/register';
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [textareaValue, setTextareaValue] = useRecoilState(textareaValueState);

  const handleInput = (event: { target: { value: string | ((currVal: string) => string) } }) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleTextarea = (event: { target: { value: string | ((currVal: string) => string) } }) => {
    setTextareaValue(event.target.value);
    console.log(textareaValue);
  };

  return (
    <>
      <div className="">
        <div className="w-[303px] h-[481px] shadow-2xl mt-[12px] ml-[30px] rounded-[18.18px]">
          <div className="w-[212px] h-[21px] pt-[41px] font-[StoryFont] text-[#242424] ml-[29px]">
            <input type="text" placeholder="제목을 입력해 주세요" onChange={handleInput} />
          </div>

          <div className="bg-createStoryContentBg w-[254px] h-[359px] mt-[48px] ml-[24px] text-createStoryContentColor pl-[20px] pt-[24px] rounded-[8px]">
            <textarea
              className="bg-createStoryContentBg w-[212px] h-[312px]"
              placeholder="내용을 입력해 주세요"
              onChange={handleTextarea}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateStoryContent;
