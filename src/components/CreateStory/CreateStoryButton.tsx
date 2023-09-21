import type { NextPage } from 'next';
import CreateStoryModal from './createStoryModal';
import { useRecoilState } from 'recoil';
import { createStoryModalState } from '@/states/createStoryState';
import axios from 'axios';

const CreateStoryButton: NextPage = () => {
  const [modal, setModal] = useRecoilState(createStoryModalState);

  const modalHandle = async () => {
    setModal(true);
    console.log(modal);

    const requestData = {
      title: '친구들과의 추억',
      content: '철수 생일 파티 너무 재밌었음!',
      keyword: '강남역',
      longitude: '36.123243522',
      latitude: '125.32543211',
    };

    try {
      // Axios를 사용하여 POST 요청을 보냅니다.
      const response = await axios.post(
        'http://api.headfirst.p-e.kr/api/story/register',
        requestData,
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
