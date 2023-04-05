import { memo } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const BottomNavBar = memo(() => {
  return <Wrapper>hello?</Wrapper>;
});

const Wrapper = styled.nav`
  background-color: ${theme.color.white};
  height: ${theme.layout.bottomNavBarHeight};
`;
