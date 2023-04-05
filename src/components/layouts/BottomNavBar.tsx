import { useState, memo } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import HomeActiveIc from 'assets/icons/home_active_ic.png';
import HomeInactiveIc from 'assets/icons/home_inactive_ic.png';
import MyActiveIc from 'assets/icons/my_active_ic.png';
import MyInactiveIc from 'assets/icons/my_inactive_ic.png';
import WriteActiveIc from 'assets/icons/write_active_ic.png';
import WriteInactiveIc from 'assets/icons/write_inactive_ic.png';

interface NavItemProps {
  activeNavImg: string;
  inactiveNavImg: string;
  navName: string;
}

interface NavNameProps {
  isHover: boolean;
}

export const BottomNavBar = memo(() => {
  return (
    <Wrapper>
      <NavItem activeNavImg={HomeActiveIc} inactiveNavImg={HomeInactiveIc} navName="홈" />
      <NavItem activeNavImg={WriteActiveIc} inactiveNavImg={WriteInactiveIc} navName="제안하기" />
      <NavItem activeNavImg={MyActiveIc} inactiveNavImg={MyInactiveIc} navName="마이페이지" />
    </Wrapper>
  );
});

export const NavItem = memo(({ activeNavImg, inactiveNavImg, navName }: NavItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <NavItemWrapper>
      <NavItemBox onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
        <NavImage src={isHover ? activeNavImg : inactiveNavImg} />
        <NavName isHover={isHover}>{navName}</NavName>
      </NavItemBox>
    </NavItemWrapper>
  );
});

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.white};
  height: ${theme.layout.bottomNavBarHeight};
  box-shadow: 0px -5px 5px -2px rgba(0, 0, 0, 0.15);
`;

const NavItemWrapper = styled.div`
  text-align: center;
  flex-grow: 1;
  flex-basis: 33%;
`;

const NavItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  cursor: pointer;
`;

const NavImage = styled.img`
  width: 1rem;
`;

const NavName = styled.div<NavNameProps>`
  ${({ isHover }) =>
    isHover &&
    `
    color: ${theme.color.primary};
  `}
`;
