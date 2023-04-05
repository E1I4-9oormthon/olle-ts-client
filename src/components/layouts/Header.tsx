import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import LeftArrowIc from 'assets/icons/left_arrow_ic.png';
import HorizontalLogoImg from 'assets/images/logo_horizontal_img.png';

interface LeftArrowIconProps {
  isHidden?: boolean;
}

export const Header = memo(() => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LeftArrowIcon src={LeftArrowIc} onClick={() => navigate(-1)} />
      <HorizontalLogoImage src={HorizontalLogoImg} />
      <LeftArrowIcon src={LeftArrowIc} isHidden={true} />
    </Wrapper>
  );
});

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.white};
  height: ${theme.layout.headerHeight};
`;

const LeftArrowIcon = styled.img<LeftArrowIconProps>`
  ${({ isHidden }) =>
    isHidden &&
    `
    visibility: hidden;
  `}
  cursor: pointer;
  width: 1rem;
  height: 1rem;
`;

const HorizontalLogoImage = styled.img`
  width: 10rem;
`;
