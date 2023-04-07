import { memo } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface ButtonProps {
  handleClick?: () => void;
  name?: string;
  isActivated?: boolean;
}

interface ButtonBoxProps {
  isActivated?: boolean;
}

export const Button = memo(({ handleClick, name, isActivated }: ButtonProps) => {
  return (
    <ButtonBox
      onClick={
        isActivated
          ? handleClick
          : () => {
              return;
            }
      }
      isActivated={isActivated}
    >
      {name}
    </ButtonBox>
  );
});

const ButtonBox = styled.div<ButtonBoxProps>`
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.2s ease;
  color: ${theme.color.white};
  background: ${theme.color.primary};
  ${({ isActivated }) =>
    isActivated &&
    `    
  &:hover {
    cursor: pointer;
  }
`}
  ${({ isActivated }) =>
    !isActivated &&
    `    
    background: ${theme.color.grey} !important;
`}
`;
