import styled from 'styled-components';

export const OlleWritePage = () => {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  padding: 3rem 2rem;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
