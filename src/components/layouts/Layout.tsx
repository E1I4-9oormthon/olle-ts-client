import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Header } from './Header';
import { BottomNavBar } from './BottomNavBar';

export const Layout = () => {
  return (
    <Main>
      <Section>
        <Outlet />
      </Section>
    </Main>
  );
};

export const HeaderBottomNavBarLayout = () => {
  return (
    <Main>
      <Section>
        <Header />
        <Article>
          <Outlet />
        </Article>
        <BottomNavBar />
      </Section>
    </Main>
  );
};

const Main = styled.main`
  height: 100vh;
  background-color: ${theme.color.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  background-color: ${theme.color.white};
  width: 100%;
  max-width: 500px;
`;

const Article = styled.article`
  overflow: auto;
  background-color: ${theme.color.white};
  height: calc(100vh - ${theme.layout.bottomNavBarHeight} - ${theme.layout.headerHeight});
`;
