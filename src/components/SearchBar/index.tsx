import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [InputText, setInputText] = useState('');
  // const [Place, setPlace] = useState('');

  const onChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // setPlace(InputText);
  };

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
        <input
          onSubmit={handleSubmit}
          placeholder="장소를 검색해 주세요"
          onChange={onChange}
          value={InputText}
          onFocus={() => setInputText('')}
          className="w-[283px] h-[48px] placeholder:text-[#1D1E1F] rounded-[8px] bg-[#EEEEEE] border-none bg-no-repeat bg-[12px] bg-[url('/assets/search.svg')] pl-[40px] ml-[16px] outline-none"
        />
      </div>
    </div>
  );
}
