import SearchContainer from '@/components/SearchContainer';

const Search = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white flex-col">
        <SearchContainer />
      </div>
    </div>
  );
};

export default Search;
