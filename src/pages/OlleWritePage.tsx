import { Input } from 'components/common/Input';
import { BorderButton } from 'components/common/BorderButton';
import styled from 'styled-components';

export const OlleWritePage = () => {
  return (
    <Wrapper>
      <OlleForm>
        <InputTitle>제목을 입력하세요</InputTitle>
        <Input placeholder="동행 제목을 입력해주세요" />
        <InputTitle>동행자 성별을 선택해 주세요</InputTitle>
        <ButtonContainer>
          <ButtonWrapper>
            <BorderButton
              handleClick={() => console.log(1)}
              name="여성"
              nameAlign="center"
              isClicked={true}
              value={1}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BorderButton
              handleClick={() => console.log(1)}
              name="남성"
              nameAlign="center"
              isClicked={true}
              value={1}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <BorderButton
              handleClick={() => console.log(1)}
              name="상관없어요"
              nameAlign="center"
              isClicked={true}
              value={1}
            />
          </ButtonWrapper>
        </ButtonContainer>
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
