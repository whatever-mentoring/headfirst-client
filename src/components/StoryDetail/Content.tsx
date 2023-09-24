'use client';
import type { NextPage } from 'next';
import CommentText from '@/components/StoryDetail/CommentText';

import Image from 'next/image';
import contentPost from '@/../public/assets/contentPost.svg';
import { useRecoilState } from 'recoil';
import { commentState } from '@/states/createStoryState';

// import { dataCommentState } from '@/states/createStoryState';

const Content: NextPage = () => {
  const [comment, setComment] = useRecoilState(commentState);
  // const [dataComment, setDataComment] = useRecoilState(dataCommentState);
  console.log('comment???', comment);

  const handleCommentText = (event: {
    target: { value: string | ((currVal: string) => string) };
  }) => {
    setComment([event.target.value]);
  };

  const handleCommentSend = () => {
    // 여기서 새로운 댓글을 추가하고 상태를 업데이트합니다.
    const newComment = `${comment}`; // 이 부분을 실제로 입력한 댓글로 대체해야 합니다.
    setComment([...comment, newComment]);
  };

  return (
    <>
      <div className="w-[350px] h-[407px] bg-indigo0-10 ml-[7.5px] overflow-scroll">
        {comment.map((a, index) => (
          <CommentText key={index} comment={a} />
        ))}
      </div>
      <div className="flex shadow-2xl w-[325px] h-[48px] ml-[20px] rounded-lg">
        <input type="checkbox" className="w-[24px] h-[24px] ml-[28px] mt-[14px]" />{' '}
        <label className="ml-[4px] mt-[15px] text-[#A9A9A9] text-sm">익명</label>
        <input
          className="w-[127px] h-[19px] ml-[17px] mt-[15px]"
          type="text"
          placeholder="댓글을 입력하세요"
          onChange={handleCommentText}
        />
        <Image
          className="w-[24px] h-[24px] mt-[14px] ml-[60px] cursor-pointer	"
          src={contentPost}
          alt="contentPost"
          onClick={handleCommentSend}
        ></Image>
      </div>
    </>
  );
};

export default Content;
