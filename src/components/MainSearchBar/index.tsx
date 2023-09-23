import { SearchAtom } from '@/recoil/SearchAtom';
import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

// interface MainSearchBarProps {
//   selectedPlaceName: string; // SearchContainer에서 전달된 place_name 데이터
// }

// export default function MainSearchBar({ selectedPlaceName }: MainSearchBarProps) {
//   const router = useRouter();

export default function MainSearchBar() {
  const router = useRouter();

  // const [inputText, setInputText] = useState('');

  // useEffect(() => {
  //   setInputText(selectedPlaceName); // selectedPlaceName을 input 값으로 설정
  // }, [selectedPlaceName]);

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputText(e.target.value);
  // };

  const searchResult = useRecoilValue(SearchAtom);
  console.log('검색바 : ', searchResult);

  return (
    <div className="">
      <input
        onClick={() => router.push('/search')}
        placeholder="장소를 검색해 주세요"
        // onChange={onChange}
        value={searchResult}
        // onFocus={() => setInputText('')}
        className="placeholder:text-[#A9A9A9] w-[272px] h-[42.79px] placeholder:text-[#1D1E1F] rounded-[8px] bg-[#FFF] shadow-md border-none bg-no-repeat bg-[12px] bg-[url('/assets/search.svg')] pl-[40px] ml-[16px] outline-none"
      />
    </div>
  );
}
