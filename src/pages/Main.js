import Layout from "../components/common/Layout";
import tw from "tailwind-styled-components";
import BookList from "../components/main/BookList";
import SearchForm from "../components/search/SearchForm";
import BookTower from "../components/main/BookTower";
import { useEffect, useState } from "react";
import ModeSwitchButtons from "../components/main/ModeSwitchButtons.jsx";
import { useDispatch, useSelector } from "react-redux";
import { __getReview } from "../redux/modules/postSlice";

const Main = () => {
  const dispatch = useDispatch();

  const [isTowerMode, setTowerMode] = useState(true);

  // TODO db에서 가져온 책 목록 저장
  // const [reviews, setReviews] = useState([]);

  // TODO My character 설정(option)
  const [myCharacter, setMyCharacter] = useState({});

  // TODO DB에서 가져온 data + character
  const [bookTower, setBookTower] = useState([]);

  const { posts: reviews } = useSelector((state) => state.postSlice);

  useEffect(() => {
    dispatch(__getReview());
  }, []);

  //bookTower bookList 구분

  //가져온 배열에 캐릭터 추가

  // useEffect(() => {
  //   if (reviews.length > 0) {
  //     setBookTower([...reviews, myCharacter]);
  //   }
  // }, []);

  return (
    <Layout>
      <HomeContainer>
        <HomeHeadContainer>
          <HomeTitle>나의 독후감</HomeTitle>

          <ModeSwitchButtons setTowerMode={setTowerMode} />
        </HomeHeadContainer>
        <SearchForm />

        {isTowerMode ? (
          <BookTower books={bookTower} />
        ) : (
          <BookList books={reviews} />
        )}
      </HomeContainer>
    </Layout>
  );
};

export default Main;

const HomeContainer = tw.div`
mx-auto 
max-w-2xl 
border 
pt-28
h-full
`;

const HomeHeadContainer = tw.div`
flex
`;

const HomeTitle = tw.h2`
w-1/2
lg:w-2/3
`;
