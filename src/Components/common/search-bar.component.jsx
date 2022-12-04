import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="items-center flex justify-end mb-5">
      <div className="relative lg:w-6/12 sm:w-10/12 w-full">
        <div className="absolute top-5 left-3 items-center">
          <BsSearch className="w-5 h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="جستجو از بین هزاران مقاله"
          className="w-full py-4 pl-12 pr-4 text-gray-500 border-2 rounded-lg outline-none bg-gray-50 transition ease-in-out delay-150 
          focus:bg-white focus:border-lite-purple dark:border-dark-tertiary dark:focus:border-lite-purple dark:bg-transparent"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchBar;
