import tw from 'tailwind-styled-components';
import styled from 'styled-components';

import Header from './../components/common/Header';
import Layout from './../components/layout/Layout';
import SideBar from './../components/common/SideBar';

import profile from '../image/profile.jpg';
import { useState } from 'react';

const Subscribe = () => {
  const [Nickname, setNickName] = useState('췤키라웃');
  const [Sub, setSub] = useState('구독중');

  return (
    <Wrapper>
      <Header />
      <Layout>
        <div>
          <ProfileImg>
            <img src={profile} alt='bookimg' />
          </ProfileImg>
          <ProfileInfo>
            <ProfileId>{Nickname}</ProfileId>
            <IsSub>{Sub}</IsSub>
          </ProfileInfo>
        </div>
      </Layout>
    </Wrapper>
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
  height: 1080px;
`

const ProfileImg = styled.div`
  margin: 120px auto 0 auto;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const ProfileId = styled.div`
  color: #3a3a3a;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-right: 10px;
`;
const IsSub = styled.div`
  border: 0.5px solid #567F9E;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 600;
  color: #567F9E;
`;

export default Subscribe;
