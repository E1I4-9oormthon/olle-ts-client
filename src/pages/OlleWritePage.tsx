import { useState } from 'react';
import { Input } from 'components/common/Input';
import { BorderButton } from 'components/common/BorderButton';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Select from 'components/common/Select';
import { courseData } from 'data/courseData';
import { Point } from 'global/types';
import { OlleMap } from 'components/OlleWritePage/OlleMap';
import { Button } from 'components/common/Button';

export const OlleWritePage = () => {
  const [title, setTitle] = useState<string>('');
  const [gender, setGender] = useState<number>(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [course, setCourse] = useState<number>(0);
  const [route, setRoute] = useState<Point[]>([]);
  const [contact, setContact] = useState<string>('');

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleGenderButtonClick = (value: number) => {
    setGender(value);
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourse(parseInt(e.target.value));
  };

  const handleContactChange = (value: string) => {
    setContact(value);
  };

  const isSubmittable = () => {
    return title.length > 0 && contact.length > 0;
  };

  const handleOlleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmittable()) {
      console.log(title, gender, date, course, route, contact);
    }
  };

  return (
    <Wrapper>
      <OlleForm onSubmit={handleOlleFormSubmit}>
        <InputTitle>제목을 입력하세요</InputTitle>
        <Input
          placeholder="동행 제목을 입력해주세요"
          changeHandler={(e) => handleTitleChange(e.target.value)}
          value={title}
        />
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
          <DayPicker
            mode="single"
            selected={date}
            disabled={{ before: new Date() }}
            fromMonth={new Date()}
            onSelect={(selectedDate) => handleDateSelect(selectedDate)}
          />
        </DayPickerWrapper>
        <InputTitle>동행과 함께할 올레길을 선택해 주세요</InputTitle>
        <Select name="kind" optionList={courseData} handleChange={(e) => handleCourseChange(e)} value={course} />
        <OlleMapWrapper>
          <OlleMap selectedCourseIndex={course} setRoute={setRoute} />
        </OlleMapWrapper>
        <InputTitle>연락 가능한 오픈카톡 링크를 입력하세요</InputTitle>
        <Input
          placeholder="https://open.kakao.com/"
          changeHandler={(e) => handleContactChange(e.target.value)}
          value={contact}
        />
        <SubmitButtonWrapper>
          <Button type="submit" isActivated={isSubmittable()} name="등록하기" />
        </SubmitButtonWrapper>
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

const OlleMapWrapper = styled.div`
  margin: 1rem 0;
`;
