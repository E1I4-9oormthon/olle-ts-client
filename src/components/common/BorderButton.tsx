import { memo } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface BorderButtonProps {
  handleClick: (value: number) => void;
  name?: string;
  isClicked?: boolean;
  value: number;
  nameAlign?: string;
}

interface BorderButtonBoxProps {
  isClicked?: boolean;
  nameAlign?: string;
}

export const BorderButton = memo(({ handleClick, name, isClicked, value, nameAlign }: BorderButtonProps) => {
  return (
    <BorderButtonBox onClick={() => handleClick(value)} isClicked={isClicked} nameAlign={nameAlign}>
      {name}
    </BorderButtonBox>
  );
});

const BorderButtonBox = styled.button<BorderButtonBoxProps>`
  border: 2px solid ${theme.color.grey};
  width: 100%;
  font-size: 1rem;
  font-family: 'Pretendard-Regular', sans-serif;
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
  ${({ nameAlign }) =>
    nameAlign &&
    `    
    text-align: ${nameAlign};
`}
  border-radius: 8px;
  padding: 1rem;
`;
