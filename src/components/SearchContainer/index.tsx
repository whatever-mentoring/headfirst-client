import React, { useState } from 'react';
import { Place } from '@/data/types';
import SearchItem from '../SearchItem';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { SearchAtom } from '../../recoil/SearchAtom';
import { SearchXAtom } from '@/recoil/SearchXAtom';
import { SearchYAtom } from '@/recoil/SearchYAtom';

const SearchContainer = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const searchPlaces = async () => {
    if (!keyword.trim()) {
      alert('키워드를 입력해주세요!');
      return;
    }

    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`,
        {
          method: 'GET',
          headers: {
            Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error('검색 중 오류가 발생했습니다.');
      }

      const data = await response.json();
      if (data.meta.total_count === 0) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      }

      setPlaces(data.documents);
      setCurrentPage(1); // 검색 시 페이지를 1로 초기화
    } catch (error: any) {
      // 'any' 형식으로 명시
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  const router = useRouter();

  // 현재 페이지의 검색 결과를 가져오는 함수
  const getCurrentPageResults = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return places.slice(startIndex, endIndex);
  };

  // 총 페이지 수 계산
  const totalPages = Math.ceil(places.length / itemsPerPage);

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [selectedPlaceName, setSelectedPlaceName] = useRecoilState<string>(SearchAtom);
  const [selectedPlaceX, setSelectedPlaceX] = useRecoilState<number>(SearchXAtom);
  const [selectedPlaceY, setSelectedPlaceY] = useRecoilState<number>(SearchYAtom);

  console.log('검색한 장소 이름 : ', selectedPlaceName);
  console.log('검색한 장소 X 좌표 : ', selectedPlaceX);
  console.log('검색한 장소 Y 좌표 : ', selectedPlaceY);

  const handleSearchItemClick = (placeName: string, x: number, y: number) => {
    setSelectedPlaceName(placeName);
    setSelectedPlaceX(x);
    setSelectedPlaceY(y);
    console.log('클릭 완료');
  };

  return (
    <div>
      <div className="h-[80px] mb-[10px] flex items-center justify-center">
        <div>
          <Image
            src="/assets/arrow-back.svg"
            alt="back-space-button"
            onClick={() => router.push('/main')}
            width={24}
            height={24}
          />
        </div>
        <input
          type="text"
          placeholder="장소를 검색해 주세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="placeholder:text-[#A9A9A9] w-[235px] h-[48px] placeholder:text-[#1D1E1F] rounded-[8px] bg-[#EEEEEE] border-none bg-no-repeat bg-[12px] bg-[url('/assets/search.svg')] pl-[40px] ml-[16px] outline-none"
        />
        <button
          onClick={searchPlaces}
          className="w-[48px] h-[48px] bg-[#EF6262] rounded-[8px] ml-[5px]"
        >
          검색
        </button>
      </div>
      <ul>
        {getCurrentPageResults().map((place, index) => (
          <li key={index}>
            <SearchItem
              place_name={place.place_name}
              address_name={place.address_name}
              onClick={() => {
                handleSearchItemClick(place.place_name, place.x, place.y);
                console.log(place);
                router.push('/main');
              }}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <div className="fixed bottom-10 mx-auto">
          {totalPages > 1 && (
            <div className="pagination flex gap-[10px]">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`${currentPage === index + 1 ? 'text-black' : 'text-[#A9A9A9]'} ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
