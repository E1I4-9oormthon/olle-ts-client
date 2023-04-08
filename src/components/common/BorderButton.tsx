import { memo } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface BorderButtonProps {
  handleClick: (value: number) => void;
  name?: string;
  isClicked?: boolean;
  value: number;
}

interface BorderButtonBoxProps {
  isClicked?: boolean;
}

export const BorderButton = memo(({ handleClick, name, isClicked, value }: BorderButtonProps) => {
  return (
    <BorderButtonBox onClick={() => handleClick(value)} isClicked={isClicked}>
      {name}
    </BorderButtonBox>
  );
});

const BorderButtonBox = styled.div<BorderButtonBoxProps>`
  border: 2px solid ${theme.color.grey};
  color: ${theme.color.grey};
  &:hover {
    border: 2px solid ${theme.color.primary} !important;
    font-weight: 700;
    cursor: pointer;
  }
  ${({ isClicked }) =>
    isClicked &&
    `    
    border: 2px solid ${theme.color.primary} !important;
    font-weight: 700;
    color: ${theme.color.black};
`}

  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0 0;
`;
