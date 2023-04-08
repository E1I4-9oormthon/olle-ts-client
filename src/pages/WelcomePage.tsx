import styled from 'styled-components';
import TitleImg from 'assets/images/logo_full_img.png';
import KakaoLoginButtonImg from 'assets/images/kakao_signin_button_img.png';
import { Modal } from 'components/common/Modal';
import useModal from 'hooks/useModal';
import { Button } from 'components/common/Button';

export const WelcomePage = () => {
  const { isOpen, toggleModal } = useModal();

  const handleModalConfirmButton = () => {
    location.href = import.meta.env.VITE_KAKAO_AUTH_URL;
    toggleModal();
  };

  return (
    <Wrapper>
      <Box>
        <TitleImage src={TitleImg} />
        <KakaoSignInButtonImage src={KakaoLoginButtonImg} onClick={toggleModal} />
        <Modal isOpen={isOpen} toggle={toggleModal}>
          <ModalBodyWrapper>
            <ModalTitle>카카오 로그인 시 '성별'과 '연령대' 제공에 동의해주세요!</ModalTitle>
            <ModalContents>
              비동의 시 '성별'과 '연령대'가 '상관 없음'으로 선택된 동행 제안만 받아보실 수 있습니다.
            </ModalContents>
            <Button name="확인" isActivated={true} handleClick={handleModalConfirmButton} />
          </ModalBodyWrapper>
        </Modal>
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
  width: 60%;
  min-width: 100px;
  max-width: 230px;
  cursor: pointer;
`;

const ModalBodyWrapper = styled.div`
  padding: 1.5rem;
  letter-spacing: 1.5px;
  line-height: 1.2;
`;

const ModalTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  white-space: pre-wrap;
  margin-bottom: 1rem;
`;

const ModalContents = styled.div`
  font-size: 1.3rem;
  white-space: pre-wrap;
  margin-bottom: 2.5rem;
`;
