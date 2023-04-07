import styled from 'styled-components';
import TitleImg from 'assets/images/logo_full_img.png';
import KakaoLoginButtonImg from 'assets/images/kakao_signin_button_img.png';

export const WelcomePage = () => {
  return (
    <Wrapper>
      <Box>
        <TitleImage src={TitleImg} />
        <a href={import.meta.env.VITE_KAKAO_AUTH_URL}>
          <KakaoSignInButtonImage src={KakaoLoginButtonImg} />
        </a>
      </Box>
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

const TitleImage = styled.img`
  width: 65%;
  max-width: 260px;
  min-width: 100px;
  margin-bottom: 14rem;
`;

const KakaoSignInButtonImage = styled.img`
  width: 100%;
`;
