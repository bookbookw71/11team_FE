import { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { __addReview } from "../redux/modules/postSlice";
import { __getReview } from "../redux/modules/postSlice";

// 각각 요소 컴포넌트
import BookImg from "../components/post/BookImg";
import Star from "../components/post/Star";
import BookIntro from "../components/post/BookIntro";
import MaxPage from "../components/post/MaxPage";
import Layout from "../components/common/Layout";

import { useLocation } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getReview()); // 그냥 책제목 가져와야하는데 이것도 카카오에서 불러오나여? ㅎㅎ
  }, []);

  const location = useLocation();

  let title = "";
  title = location.state?.title;

  let imageUrl = "";
  imageUrl = location.state?.imageUrl;

  // ANCHOR 이니셜 스테이트
  // const [title, setTitle] = useState("");
  const [readStart, setReadStart] = useState(new Date());
  const [readEnd, setReadEnd] = useState(new Date());
  const [star, setStar] = useState();
  const [comment, setComment] = useState("");
  const [page, setPage] = useState(0);
  // const bookcover = useSelector((state)=> state.post)

  const onClick = () => {
    const post = { title, readStart, readEnd, star, comment, page, imageUrl };
    console.log(post);

    dispatch(
      __addReview({ imageUrl, title, readStart, readEnd, star, comment, page })
    );
    navigate("/main");
  };

  return (
    <Layout>
      <PostWrap>
        <PostCon>
          <InfoBox className="flex">
            <BookImg imageUrl={imageUrl} />

            <BookInfo>
              <PostTitle>{title}</PostTitle>

              <h2>독서 기간</h2>
              <DateInput>
                <input
                  type="date"
                  id="readStart"
                  min="2000-01-01"
                  max="2999-12-31"
                  value={readStart}
                  onChange={(e) => {
                    setReadStart(e.target.value);
                  }}
                ></input>
                <input
                  type="date"
                  id="readEnd"
                  min="1999-01-01"
                  max="2999-12-31"
                  value={readEnd}
                  onChange={(e) => {
                    setReadEnd(e.target.value);
                  }}
                ></input>
              </DateInput>

              <div className="flex flex-row">
                <Star star={star} setStar={setStar} />
                <MaxPage page={page} setPage={setPage} />
              </div>
            </BookInfo>
          </InfoBox>

          <BookIntro comment={comment} setComment={setComment} />
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

const PostTitle = tw.h2`
  text-Bblack
  text-2xl
  font-bold
  w-auto
  mb-3
 text-ellipsis
  `;

const DateInput = tw.div`
  border-1
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
