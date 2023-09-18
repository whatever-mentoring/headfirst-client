import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface MapContainerProps {
  searchPlace: string;
}

const SearchMap: React.FC<MapContainerProps> = ({ searchPlace }) => {
  const router = useRouter();

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState<any[]>([]);

  // Places 배열을 초기화하는 useEffect 추가
  useEffect(() => {
    setPlaces([]);
  }, [searchPlace]);

  useEffect(() => {
    // var markers = []
    // const container = document.getElementById('myMap');

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data: any[], status: string, pagination: any): void {
      if (status === kakao.maps.services.Status.OK) {
        displayPagination(pagination);
        setPlaces(data);
      }
    }
  }, [searchPlace]);

  function displayPagination(pagination: any): void {
    const paginationEl = document.getElementById('pagination');
    const fragment = document.createDocumentFragment();
    let i;

    // 기존에 추가된 페이지 번호 삭제
    while (paginationEl!.hasChildNodes()) {
      paginationEl!.removeChild(paginationEl!.lastChild as HTMLElement);
    }

    for (i = 1; i <= pagination.last; i++) {
      const el = document.createElement('a');
      el.href = '#';
      el.innerHTML = i.toString();

      if (i === pagination.current) {
        el.className = 'on';
      } else {
        el.onclick = (function (i) {
          return function () {
            pagination.gotoPage(i);
          };
        })(i);
      }

      fragment.appendChild(el);
    }
    paginationEl!.appendChild(fragment);
  }

  return (
    <div>
      <div className="w-96 mt-6">
        {Places.slice(0, 5).map((item, i) => (
          <div
            key={i}
            className="mt-2 p-2 bg-white shadow-md rounded cursor-pointer hover:border-black border"
          >
            <div
              onClick={() => {
                router.push('/complete');
              }}
            >
              <div className="font-semibold">{item.place_name}</div>
              {item.road_address_name ? (
                <div>
                  <div>{item.road_address_name}</div>
                </div>
              ) : (
                <div>{item.address_name}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div id="pagination" className="w-96 flex justify-center mt-2 gap-2"></div>
    </div>
  );
};

export default SearchMap;
