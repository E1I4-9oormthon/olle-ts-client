import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Layout = () => {
  return (
    <>
      <Main>
        <Section>
          <Outlet />
        </Section>
      </Main>
    </>
  );
};

const Main = styled.main`
  height: 100vh;
  background: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  min-width: 0;
  background: blue;
  width: 100%;
  max-width: 500px;
  height: calc(100vh - ${theme.layout.bottomNavBarHeight});
`;
