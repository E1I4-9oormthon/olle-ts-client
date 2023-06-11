import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';

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
  route: string;
}

interface NavNameProps {
  isHover: boolean;
}

export const BottomNavBar = memo(() => {
  const navItemList = [
    {
      name: '홈',
      activeNavImg: HomeActiveIc,
      inactiveNavImg: HomeInactiveIc,
      route: '/',
    },
    {
      name: '제안하기',
      activeNavImg: WriteActiveIc,
      inactiveNavImg: WriteInactiveIc,
      route: '/olle-write',
    },
    {
      name: '마이페이지',
      activeNavImg: MyActiveIc,
      inactiveNavImg: MyInactiveIc,
      route: '/',
    },
  ];

  return (
    <Wrapper>
      {navItemList.map((navItem) => (
        <NavItem
          key={navItem.name}
          navName={navItem.name}
          activeNavImg={navItem.activeNavImg}
          inactiveNavImg={navItem.inactiveNavImg}
          route={navItem.route}
        />
      ))}
    </Wrapper>
  );
});

export const NavItem = memo(({ activeNavImg, inactiveNavImg, navName, route }: NavItemProps) => {
  const navigate = useNavigate();

  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <NavItemWrapper>
      <NavItemBox
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onClick={() => navigate(route)}
      >
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
  width: 1.3rem;
  margin-bottom: 0.5rem;
`;

const NavName = styled.div<NavNameProps>`
  font-size: 0.9rem;
  ${({ isHover }) =>
    isHover &&
    `
    color: ${theme.color.primary};
  `}
`;
