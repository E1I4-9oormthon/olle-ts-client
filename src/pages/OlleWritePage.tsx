import { useState } from 'react';
import { Input } from 'components/common/Input';
import { BorderButton } from 'components/common/BorderButton';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Select from 'components/common/Select';
import { Option } from 'global/types';

export const OlleWritePage = () => {
  const [gender, setGender] = useState<number>(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [course, setCourse] = useState<number>(0);

  const handleGenderButtonClick = (value: number) => {
    setGender(value);
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourse(parseInt(e.target.value));
  };

  const courseData: Option[] = [
    { index: 1, name: '시흥 - 광치기 올레' },
    { index: 2, name: '우도 - 올레' },
    { index: 3, name: '광치기 - 온평 올레' },
    { index: 4, name: '온평 - 표선 올레 A코스' },
    { index: 5, name: '온평 - 표선 올레 B코스' },
    { index: 6, name: '표선 - 남원 올레' },
    { index: 7, name: '남원 - 쇠소깍 올레' },
    { index: 8, name: '쇠소깍 - 제주올레 여행자센터 올레' },
    { index: 9, name: '제주올레 여행자센터 - 월평 올레' },
    { index: 10, name: '서귀포 버스터미널 - 제주올레 여행자센터 올레' },
    { index: 11, name: '월평 - 대평 올레' },
    { index: 12, name: '대평 - 화순 올레' },
    { index: 13, name: '화순 - 모슬포 올레' },
    { index: 14, name: '가파도 - 올레' },
    { index: 15, name: '모슬포 - 무릉 올레' },
    { index: 16, name: '무릉 - 용수 올레' },
    { index: 17, name: '용수 - 저지 올레' },
    { index: 18, name: '저지 - 서광 올레' },
    { index: 19, name: '한림 - 고내 올레 A코스' },
    { index: 20, name: '한림 - 고내 올레 B코스' },
    { index: 21, name: '고내 - 광령 올레' },
    { index: 22, name: '광령 - 제주원도심 올레' },
    { index: 23, name: '제주원도심 - 조천 올레' },
    { index: 24, name: '상추자 - 올레' },
    { index: 25, name: '하추자 - 올레' },
    { index: 26, name: '조천 - 김녕 올레' },
    { index: 27, name: '김녕 - 하도 올레' },
    { index: 28, name: '하도 - 종달 올레' },
  ];

  return (
    <Wrapper>
      <OlleForm>
        <InputTitle>제목을 입력하세요</InputTitle>
        <Input placeholder="동행 제목을 입력해주세요" />
        <InputTitle>동행자 성별을 선택해 주세요</InputTitle>
        <ButtonContainer>
          <ButtonWrapper>
            <BorderButton
              handleClick={() => handleGenderButtonClick(1)}
              name="여성"
              nameAlign="center"
              isClicked={gender === 1}
              value={1}
              type="button"
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BorderButton
              handleClick={() => handleGenderButtonClick(2)}
              name="남성"
              nameAlign="center"
              isClicked={gender === 2}
              value={2}
              type="button"
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BorderButton
              handleClick={() => handleGenderButtonClick(0)}
              name="상관없어요"
              nameAlign="center"
              isClicked={gender === 0}
              value={0}
              type="button"
            />
          </ButtonWrapper>
        </ButtonContainer>
        <InputTitle>동행과 함께할 날짜를 선택해 주세요</InputTitle>
        <DayPickerWrapper>
          <DayPicker mode="single" selected={date} onSelect={(selectedDate) => handleDateSelect(selectedDate)} />
        </DayPickerWrapper>
        <InputTitle>동행과 함께할 올레길을 선택해 주세요</InputTitle>
        <Select name="kind" optionList={courseData} handleChange={(e) => handleCourseChange(e)} value={course} />
      </OlleForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  padding: 1rem 2rem 3rem;
`;

const OlleForm = styled.form`
  width: 100%;
`;

const InputTitle = styled.div`
  margin: 2rem 0 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: calc(90% / 3);
`;

const DayPickerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
