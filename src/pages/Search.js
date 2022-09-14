import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

import Layout from "../components/common/Layout";
import SearchForm from "../components/search/SearchForm";
import SearchBook from "../components/search/SearchBook";
import { useDispatch, useSelector } from "react-redux";
import { __getBooksThunk } from "../redux/modules/bookSlice";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  let title = "";
  /**다이렉트로 search page 접속 시 오류 방지 */
  title = location.state?.title;

  const { books: searchList } = useSelector((state) => state.bookSlice);

  useEffect(() => {
    try {
      dispatch(__getBooksThunk(title));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, title]);

  return (
    <Layout>
      <SearchContainer>
        <SearchForm />
        {title === undefined ? (
          <div>책을 검색해주세요</div>
        ) : (
          <>
            {searchList.map((book) => {
              return (
                <SearchBook
                  key={book.isbn}
                  author={book.authors[0]}
                  title={book.title}
                  content={book.contents}
                  imageUrl={book.thumbnail}
                />
              );
            })}
          </>
        )}
      </SearchContainer>
    </Layout>
  );
};

const SearchContainer = tw.div`
mx-auto 
max-w-2xl 
border 
pt-28
h-full
`;

export default Search;
