import { useState } from 'react';
import styled from 'styled-components';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
// import { ko } from 'date-fns/esm/locale';

const DatePick = () => {
  registerLocale('ko', ko); //한국어 설정

  const [dateRange, setDateRange] = useState([null, null]);

  const [readStart, readEnd] = dateRange;

  const formatDate = (readStart, readEnd) => {
    //달력 년, 월, 일 header
    const date = new Date();
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return setDateRange(`${year}-${monthIndex}-${date}`);
  };
  console.log('🚀 ~ formatDate ~ formatDate', formatDate);

  return (
    <DatePickWrap>
      <DatePicker
        locale={ko}
        dateFormat='yyyy-MM-dd'
        selectsRange={true}
        startDate={readStart}
        endDate={readEnd}
        onChange={update => {
          setDateRange(update);
          console.log(dateRange);
        }}
      />
    </DatePickWrap>
  );
};

const DatePickWrap = styled.div`
  width: 100%;

  & input {
    width: 250px;
    text-align: center;
    border: 1px solid red;
    border-radius: 7px;
  }
`;

export default DatePick;
