import SearchMap from '@/components/SearchMap';
import SearchBar from '@/components/SearchBar';

const Search = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white">
        <SearchBar />
        <SearchMap />
      </div>
    </div>
  );
};

export default Search;
