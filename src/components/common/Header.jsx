import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import logo from '../../image/typo.png';
import SideBar from './SideBar';

const Header = () => {
  const [spreadNav, setSpreadNav] = React.useState(false); // 네비바를 여는 스테이트.
  const [isView, setIsView] = React.useState(false); // 내부 값을 보이게 하는 스테이트.
  const [bgView, setBgView] = React.useState('transparent');

  const onClick = () => {
    setSpreadNav(props => !props);
    setTimeout(() => setIsView(props => !props), 350);
  };

  // const onChangeBg = () => {
  //   backgroundColor === 'blue' ? setBgView('blue') : setBgView('transparent');
  // };
  return (
    <HeaderBox className='bg-slate-900'>
      <MenuWrap>
        <MenuButton onClick={onClick}>{!spreadNav ? <BiMenu fontSize='30px' color='#3a3a3a' /> : <IoClose fontSize='30px' color='#3a3a3a' />}</MenuButton>
        <SideBar spreadNav={spreadNav} isView={isView} />
      </MenuWrap>

      <Logo>
        <img src={logo} alt='logo' />
      </Logo>

      <UserInfo>췤키라웃</UserInfo>
    </HeaderBox>
  );
};

const MenuWrap = styled.div`
  width: 77px;
  /* background-color: transparent; */
`;

const HeaderBox = tw.div`
  flex
  flex-row
  justify-between
  items-center
  w-full
  h-24
  p-5
  fixed
`;

const MenuButton = styled.div`
  cursor: pointer;
  left: 15px;
  top: 20px;
  z-index: 11;
`;

const Logo = tw.div`
  w-auto
  & > img {
    w-48
  }
`;

const UserInfo = tw.div`
  w-20
`;

export default Header;
