import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MainSearchBar() {
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
    <div className="">
      <input
        onSubmit={handleSubmit}
        placeholder="장소를 검색해 주세요"
        onChange={onChange}
        value={InputText}
        onFocus={() => setInputText('')}
        className="w-[272px] h-[42.79px] placeholder:text-[#1D1E1F] rounded-[8px] bg-[#FFF] shadow-md border-none bg-no-repeat bg-[12px] bg-[url('/assets/search.svg')] pl-[40px] ml-[16px] outline-none"
        onClick={() => router.push('/search')}
      />
    </div>
  );
}
