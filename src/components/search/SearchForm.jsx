import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

const SearchForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: { title } });
    // navigate("/searchTest", { state: { title: title } });
  };

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <SearchInput
          type="search"
          id="search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="어떤 책을 읽으셨나요?"
          required
          value={title}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};

export default SearchForm;

const SearchInput = tw.input`
w-full
text-gray-800
border
focus:ring ring-indigo-300
rounded-full
outline-none
transition
duration-100
px-3
py-2
my-4
`;
