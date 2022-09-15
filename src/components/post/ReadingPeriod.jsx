import tw from 'tailwind-styled-components';
import DatePick from './DatePick';
import TestDate from './TestDate';
import TestDate2 from './TestDate2';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getReview } from '../../redux/modules/postSlice';

const ReadingPeriod = () => {
  const dispatch = useDispatch;

  const post = useSelector(state => state.posts);
  console.log('🚀 ~ ReadingPeriod ~ post', post);

  return (
    <BookReadingBox>
      <DateTitle>독서 기간</DateTitle>
      <DatePick />
      {/* <TestDate /> */}
      {/* <TestDate2 /> */}
    </BookReadingBox>
  );
};
const BookReadingBox = tw.div`
`;

const DateTitle = tw.div`
  text-black
  text-xl
  font-bold
`;

export default ReadingPeriod;
