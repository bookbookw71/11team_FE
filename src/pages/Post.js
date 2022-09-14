import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { __addReview } from "../redux/modules/postSlice";
import { __getReview } from "../redux/modules/postSlice";

// 각각 요소 컴포넌트
import BookImg from "../components/post/BookImg";
import ReadingPeriod from "../components/post/ReadingPeriod";
import Star from "../components/post/Star";
import BookIntro from "../components/post/BookIntro";
import PublisherPage from "../components/post/PublisherPage";
import Layout from "../components/common/Layout";
import { useDispatch } from "react-redux";
import { __addReview } from "../redux/modules/postSlice";
import { useLocation } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getReview()); // 그냥 책제목 가져와야하는데 이것도 카카오에서 불러오나여? ㅎㅎ
  }, []);

  const location = useLocation();

  let title = "";
  title = location.state.title;

  let imageUrl = "";
  imageUrl = location.state.imageUrl;

  // ANCHOR 이니셜 스테이트
  const [title, setTitle] = useState("");
  const [readStart, setReadStart] = useState("2000 - 01 - 01");
  const [readEnd, setReadEnd] = useState("2999 - 12 - 31");
  const [star, setStar] = useState();
  const [intro, setIntro] = useInput();
  const [page, setPage] = useState(0);

  // const bookcover = useSelector((state)=> state.post)

  const onClick = () => {
    const post = { title, readStart, readEnd, star, page };
    console.log("🚀 ~ onClick ~ post", post);
    dispatch(__addReview({ title, readStart, readEnd, star, page }));
  };

  const inputTitle = (e) => {
    return e.target.value;
  };

  return (
    <Layout>
      <PostWrap>
        <PostCon>
          <InfoBox className="flex">
            <BookImg />
            <BookInfo>
              <PostTitle placeholder="제목을 입력하세요" />
              <ReadingPeriod />
              <Star star={star} setStar={setStar} />
              <BookIntro intro={intro} setIntro={setIntro} />
              <PublisherPage page={page} setPage={setPage} />
            </BookInfo>
          </InfoBox>
          <Button
            className="button transition delay-100 duration-300 ease-in-out"
            type="button"
            onClick={onClick}
          >
            등록
          </Button>
        </PostCon>
      </PostWrap>
    </Layout>
  );
};

const PostWrap = tw.div`
  w-full
  pt-28
`;

const PostCon = tw.div`
  w-c
  mx-auto
  
  `;

const PostTitle = tw.input`
  text-Bblack
  text-2xl
  font-bold
  w-auto
  mb-3
  `;

const InfoBox = tw.div`
  w-full
  `;

const BookInfo = tw.div`
    w-3/5
    h-1/2
    px-10
`;

const Button = tw.button`
  w-full
  h-10
  mt-20
  bg-Bblue
  text-Bwhite
  rounded-full
  hover:bg-BDeepblue
`;

export default Post;
