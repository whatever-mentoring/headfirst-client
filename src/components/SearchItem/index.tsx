import Image from 'next/image';

interface SearchResult {
  place_name: string;
  address_name: string;
}

export default function SearchItem({ place_name, address_name }: SearchResult) {
  return (
    <div className="flex w-full h-[45px] pl-[20px] mb-[10px]">
      <div className="flex align-middle mr-[10px]">
        <Image src="/assets/search.svg" alt="search" width={15} height={15} />
      </div>
      <div>
        <div className="text-base">{place_name}</div>
        <div className="text-xs text-[#8E8E93]">{address_name}</div>
      </div>
    </div>
  );
}
