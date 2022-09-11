import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// 아이콘
import { CgProfile } from 'react-icons/cg';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi';
import { RiBookLine } from 'react-icons/ri';

const SideBar = ({ spreadNav, isView }) => {
  const navigate = useNavigate();
  return (
    <CustomSideBar spreadNav={spreadNav}>
      {spreadNav && isView ? (
        <Wrapper variants={CreateAnimate} initial='start' animate='end'>
          <div className='flex'>
            <div className='flex flex-col h-screen p-3 bg-white  w-60'>
              <div className='space-y-3'>
                <div className='flex items-center pl-2 text-BDeepblue'>
                  <h2 className='text-xl font-bold'>북적북적</h2>
                </div>
                {/* WHAT 메뉴들 */}
                <div className='flex-1'>
                  <ul className='pt-2 pb-4 space-y-1 text-sm'>
                    {/* NOTE 프로필 */}
                    <li className='rounded-sm'>
                      <Button profile className='flex items-center p-2 space-x-3 rounded-md'>
                        <CgProfile className='w-6 h-6 text-Bblack' fill='none' viewBox='0 0 24 24'></CgProfile>
                        <span className='text-Bblack font-bold'>프로필</span>
                      </Button>
                    </li>
                    {/* NOTE 좋아요 */}
                    <li className='rounded-sm'>
                      <Button className='heart flex items-center p-2 space-x-3 rounded-md'>
                        <FaRegHeart className='w-6 h-6 text-Bblack' />
                        <span className='text-Bblack font-bold'>좋아요</span>
                      </Button>
                    </li>
                    {/* NOTE 리뷰작성 */}
                    <li className='rounded-sm'>
                      <Button className='review flex items-center p-2 space-x-3 rounded-md'>
                        <HiPencilAlt className='w-6 h-6 text-Bblack' />
                        <span className='text-Bblack font-bold'>리뷰작성</span>
                      </Button>
                    </li>
                    {/* NOTE 나의서재 */}
                    <li className='rounded-sm'>
                      <Button className='mybook flex items-center p-2 space-x-3 rounded-md'>
                        <RiBookLine className='w-6 h-6 text-Bblack' />
                        <span className='text-Bblack font-bold'>나의서재</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      ) : null}
    </CustomSideBar>
  );
};

const CustomSideBar = styled.div`
  width: ${props => (props.spreadNav ? 20 : 0)}vw;
  height: 100vh;
  position: fixed;
  /* opacity: .6; */
  left: 0px;
  display: flex;
  flex-direction: column;
  transition: width 400ms ease-in-out 0s;
`;

const Wrapper = styled(motion.div)`
  margin-top: 25%;
  padding: 0 5%;
`;

const CreateAnimate = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const Button = styled.button`
  color: ${props => props.profile ? '#3a3a3a' : '#caf' }
`

export default SideBar;
