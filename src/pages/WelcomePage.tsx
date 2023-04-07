import styled from 'styled-components';

export const WelcomePage = () => {
  console.log(import.meta.env.VITE_KAKAO_AUTH_URL);
  return (
    <Wrapper>
      <>
        <a href={import.meta.env.VITE_KAKAO_AUTH_URL}>Kakao</a>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
