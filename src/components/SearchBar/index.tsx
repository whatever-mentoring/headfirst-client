import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PlacesSearchResultItem } from '@/data/types';

// searchResults를 props로 받을 준비
interface SearchBarProps {
  searchResults: PlacesSearchResultItem[];
  setSearchResults: React.Dispatch<React.SetStateAction<PlacesSearchResultItem[]>>; // setSearchResults를 추가
}

export default function SearchBar(props: SearchBarProps) {
  const router = useRouter();
  const [inputText, setInputText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 입력된 텍스트로 주소 검색 함수 호출
    searchLocation(inputText);
  };

  // 주소 검색
  const searchLocation = (keyword: string) => {
    if (window.kakao && window.kakao.maps) {
      // kakao 및 kakao.maps 객체가 정의되어 있는지 확인
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색 결과를 부모 컴포넌트로 전달
          props.setSearchResults(data);
        }
      });
    }
  };
  // const searchLocation = (keyword: string) => {
  //   const ps = new kakao.maps.services.Places();
  //   ps.keywordSearch(keyword, (data, status) => {
  //     if (status === kakao.maps.services.Status.OK) {
  //       // 검색 결과를 검색 결과 상태에 저장
  //       props.setSearchResults(data); // 상위 컴포넌트에서 전달된 props를 통해 setSearchResults 호출
  //     }
  //   });
  // };

  return (
    <div className="w-[360px] h-[79px] flex items-center justify-center">
      <div>
        <Image
          src="/assets/arrow-back.svg"
          alt="back-space-button"
          onClick={() => router.push('/main')}
          width={24}
          height={24}
        />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="장소를 검색해 주세요"
            onChange={onChange}
            value={inputText}
            onFocus={() => setInputText('')}
            className="placeholder:text-[#A9A9A9] w-[283px] h-[48px] placeholder:text-[#1D1E1F] rounded-[8px] bg-[#EEEEEE] border-none bg-no-repeat bg-[12px] bg-[url('/assets/search.svg')] pl-[40px] ml-[16px] outline-none"
          />
        </form>
        <div className="bg-red-500">
          <ul>
            {props.searchResults.map((result) => (
              <li key={result.id}>{result.place_name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
