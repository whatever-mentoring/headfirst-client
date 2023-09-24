import type { NextPage } from 'next';
import CreateStoryModal from './createStoryModal';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { createStoryModalState, timeState } from '@/states/createStoryState';
import { inputValueState, textareaValueState } from '@/states/createStoryState';
import axios from 'axios';
import { getCookie } from 'cookies-next';
// import { keywordState } from '@/states/createStoryState';

const CreateStoryButton: NextPage = () => {
  const [modal, setModal] = useRecoilState(createStoryModalState);
  const inputValue = useRecoilValue(inputValueState);
  const textareaValue = useRecoilValue(textareaValueState);
  const setTime = useSetRecoilState(timeState);
  // const [keyword, setKeyword] = useRecoilState(keywordState);

  const modalHandle = async () => {
    setModal(true);
    const now = new Date();
    const mm = ('0' + now.getMonth()).slice(-2);
    const dd = ('0' + now.getDate()).slice(-2);
    const hh = ('0' + now.getHours()).slice(-2);
    const min = ('0' + now.getMinutes()).slice(-2);
    const date = mm + '/' + dd + ' ' + hh + ':' + min;
    setTime(date);

    const requestData = {
      title: inputValue,
      content: textareaValue,
      keyword: '강남역',
      longitude: '36.123243522',
      latitude: '125.32543211',
    };

    try {
      // Axios를 사용하여 POST 요청을 보냅니다.
      const response = await axios.post(
        'http://api.headfirst.p-e.kr/api/story/register',
        requestData,
        {
          headers: {
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        },
      );

      // 서버로부터의 응답을 처리합니다.
      console.log('서버 응답:', response.data);
    } catch (error) {
      // 에러를 처리합니다.
      console.error('에러:', error);
    }
  };

  return (
    <>
      <div className="bg-createStoryBtn w-[250px] h-[50px] ml-[55px] mt-[46px] mb-[45px] rounded-full">
        <button
          className="text-white font-StoryFont pt-[13px] pl-[68px] text-lg"
          onClick={() => modalHandle()}
        >
          사연 등록 완료
        </button>
        {modal === true ? <CreateStoryModal /> : null}
      </div>
    </>
  );
};

export default CreateStoryButton;
