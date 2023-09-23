import PracticeKakaoMap from '@/components/PracticeKakaoMap';

const Practice = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <PracticeKakaoMap />
      </div>
    </div>
  );
};

export default Practice;
