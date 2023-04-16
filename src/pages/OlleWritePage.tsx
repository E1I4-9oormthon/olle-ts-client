import { Input } from 'components/Input';
import styled from 'styled-components';

export const OlleWritePage = () => {
  return (
    <Wrapper>
      <Box>
        <Input title="제목을 입력하세요" placeholder="동행 제목을 입력해주세요" />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  padding: 3rem 2rem;
`;

const Box = styled.div`
  width: 100%;
`;
