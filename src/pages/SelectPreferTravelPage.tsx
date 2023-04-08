import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'components/common/Button';
import { theme } from 'styles/theme';
import { Header } from 'components/layouts/Header';
import { BorderButton } from 'components/common/BorderButton';
import { member } from 'apis/member';

export const SelectPreferTravelPage = () => {
  const [preference, setPreference] = useState<number>(100);
  const navigate = useNavigate();

  const handlePreferTravelButtonClick = (value: number) => {
    if (preference === value) {
      setPreference(100);
    } else {
      setPreference(value);
    }
  };

  const handleSubmitButtonClick = async () => {
    await member.modifyMemberInfo({ prefer_travel: preference });
    navigate('/olle-list');
  };

  return (
    <Container>
      <Wrapper>
        <Header isBackButtonHidden={true} />
        <Box>
          <PreferenceSelectTitle>어떤 동행을 선호하세요?</PreferenceSelectTitle>
          <BorderButton
            handleClick={() => handlePreferTravelButtonClick(1)}
            name="혼자서 안전하게"
            nameAlign="left"
            isClicked={preference === 1}
            value={1}
          />
          <BorderButton
            handleClick={() => handlePreferTravelButtonClick(2)}
            name="말동무와 도란도란"
            nameAlign="left"
            isClicked={preference === 2}
            value={2}
          />
        </Box>
      </Wrapper>
      <SubmitButtonWrapper>
        <Button name="완료" isActivated={preference < 100} handleClick={() => handleSubmitButtonClick()} />
      </SubmitButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  padding-bottom: ${theme.layout.bottomNavBarHeight};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 7rem;
`;

const Box = styled.div`
  padding: 1rem;
`;

const PreferenceSelectTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  padding: 0.5rem 0;
`;

const SubmitButtonWrapper = styled.div`
  width: 85%;
`;
