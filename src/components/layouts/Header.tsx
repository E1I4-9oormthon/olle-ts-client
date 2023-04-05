import { memo } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Header = memo(() => {
  return <Wrapper>hello?</Wrapper>;
});

const Wrapper = styled.header`
  background-color: ${theme.color.white};
  height: ${theme.layout.headerHeight};
`;
