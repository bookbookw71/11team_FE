import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

import Layout from "../components/common/Layout";

import harry from "../image/harry.jpg";

const Detail = () => {
  //더미 데이터
  const navigate = useNavigate();
  let testTitle = "해리포터와 마법사의 돌";
  let readingPeriod = "2022-09-08 ~ 2022-09-12";
  let publisher = "test";
  let maxPages = 240;

  const goBack = () => {
    navigate("/main");
  };

  const goEdit = () => {
    navigate("/post");
  };

  return (
    <Layout>
      <DetailContainer>
        <InfoBox>
          <BookImage>
            <BookCover src={harry} alt="BookCover" />
          </BookImage>

          <BookInfo>
            <h2>{testTitle}</h2>
            <p>독서 기간</p>
            <p>{readingPeriod}</p>
            <p>별점 4</p>
            <p>책 소개.. 블라블라브라</p>
            <p>출판사: {publisher}</p>
            <p>총 분량: {maxPages} 페이지</p>
          </BookInfo>
        </InfoBox>
      </DetailContainer>
      <DetailButtons>
        <DetailButton type="button" onClick={goBack}>
          취소
        </DetailButton>
        <DetailButton type="button" onClick={goEdit}>
          수정
        </DetailButton>
      </DetailButtons>
    </Layout>
  );
};

const DetailContainer = tw.div`
mx-auto 
max-w-2xl 
border 
pt-28
h-full
  `;

const InfoBox = tw.div`
flex
w-full
flex-col
items-center
sm:flex-row
  `;

const BookImage = tw.div`
w-1/2
h-1/2
flex
items-center
justify-center
`;

const BookCover = tw.img`
max-w-xs h-auto
self-center
`;

const BookInfo = tw.div`
    w-1/2
    h-1/2
`;

const DetailButtons = tw.div`
flex
items-center
justify-center
m-4
`;

const DetailButton = tw.button`
mx-4
hover:bg-Bblue
hover:text-white
px-4
py-2
w-24
rounded-full
`;

export default Detail;
