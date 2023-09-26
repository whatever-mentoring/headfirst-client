import { storyidState } from '@/states/createStoryState';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface InputTextareaProps {
  resInput: string;
  resTextarea: string;
  time: string;
  storyId: number;
}

const InputTextarea: React.FC<InputTextareaProps> = ({ resInput, resTextarea, time, storyId }) => {
  const router = useRouter();
  const [storyid, setStoryid] = useRecoilState(storyidState);

  useEffect(() => {
    axios
      .get(`http://api.headfirst.p-e.kr/api/story/search/${storyId}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      })
      .then((response) => {
        response.data.data.forEach((item: any, index: any) => {
          console.log('각 데이터 별', response.data.data[`${index}`]);
          const val = response.data.data[`${index}`];
          console.log('id값을 콘솔에 찍었을 때 : ', val.id);
          setStoryid(val.id);
        });
      })
      .catch((error) => {
        console.log('스토리id 오류 ...', error);
      });
  }, [resInput]);

  console.log('id값을 storyid에 저장했을 때 : ', storyid);

  return (
    <>
      <div>
        {/* <div className="border-t w-[360px] mt-[15px]"></div> */}
        <div
          className="mt-[19px] border-b w-[360px] cursor-pointer"
          onClick={() => {
            router.push('/storyDetail');
          }}
        >
          <div className="font-StoryFont ml-[22px]">{resInput}</div>
          <div className="text-allCreateStoryContentFont mt-[11px] ml-[22px]">{resTextarea}</div>
          <div className="mt-[21px] text-allCreateStoryContentDate text-xs ml-[276px] mb-[13px]">
            {time}
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTextarea;
