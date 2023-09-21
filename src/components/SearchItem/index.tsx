import Image from 'next/image';

interface SearchResult {
  place_name: string;
  address_name: string;
  onClick: (placeName: string) => void;
}

const SearchItem: React.FC<SearchResult> = ({ place_name, address_name, onClick }) => {
  return (
    <div className="flex w-full h-[45px] pl-[20px] mb-[10px]" onClick={() => onClick(place_name)}>
      <div className="flex mr-[10px]">
        <Image src="/assets/search.svg" alt="search" width={15} height={15} />
      </div>
      <div>
        <div className="text-base">{place_name}</div>
        <div className="text-xs text-[#8E8E93]">{address_name}</div>
      </div>
    </div>
  );
};

export default SearchItem;
