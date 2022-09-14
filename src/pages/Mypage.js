import { useRef, useState } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { axios } from "axios";

import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import SideBar from "../components/common/SideBar";
import profile from "../image/profile.jpg";
import { useDispatch } from "react-redux";

const MyPage = () => {
  const dispatch = useDispatch();
  const [Nickname, setNickName] = useState("췤키라웃");
  const [Sub, setSub] = useState("구독중");
  const [isHover, setIsHover] = useState(false);
  const [profileImg, setProfileImg] = useState(profile);
  const fileInput = useRef(null);

  const handlClick = (e) => {
    fileInput.current.click();
  };

  const changeHandler = (e) => {
    let formData = new FormData();
    setProfileImg(e.target.files[0]);
  };

  return (
    <Layout>
      <Wrapper>
        <Header />

        <div className="pt-28">
          {/* NOTE 프로필 이미지  */}
          <ProfileImg>
            <img
              id="profile"
              src={profileImg}
              onChange={changeHandler}
              alt="프로필이미지"
            />
          </ProfileImg>

          {/* NOTE 프로필 이미지 변경 */}
          <ChangeImgCon>
            <label htmlFor="change-img" onClick={handlClick}>
              프로필 변경
            </label>
            <ChangeImg
              type="file"
              accept=".jpg,.png,.jpeg"
              ref={fileInput}
              onChange={changeHandler}
              id="change-img"
            />
            {/* <>{profileImg && <PreviewImage src={URL.createObjectURL(profileImg)} />}</> */}
          </ChangeImgCon>

          {/* NOTE 닉네임과 구독여부 뱃지 */}
          <ProfileNick>
            <ProfileId>{Nickname}</ProfileId>
            <IsSub>{Sub}</IsSub>
          </ProfileNick>
        </div>
        <div></div>
      </Wrapper>
    </Layout>
  );
};

// const Profile = tw.div`
//   w-profile
//   h-profile
//   bg-slate-700
//   rounded-full

//   & > img {
//     w-full
//     h-full
//     object-cover
//   }
// `;

const Wrapper = styled.div`
  height: 1024px;
`;

const ProfileImg = styled.div`
  margin: 180px auto 0 auto;
  width: 180px;
  height: 180px;
  border-radius: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PreviewImage = styled.img`
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: auto 10px auto 10px;
  object-fit: cover;
  right: 150px;
  bottom: 20px;
`;

const ChangeImgCon = tw.div`
  mx-auto
  my-3
  w-1/5
  text-center
  px-2.5
  py-2  
  rounded
  cursor-pointer
  text-BDeepblue
  border
  opacity-40
`;

const ChangeImg = tw.input`
  hidden
`;

const ProfileNick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileId = styled.div`
  color: #3a3a3a;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-right: 10px;
`;
const IsSub = styled.div`
  border: 0.5px solid #567f9e;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 600;
  color: #567f9e;
`;

export default MyPage;
