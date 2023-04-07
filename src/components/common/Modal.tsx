import { memo } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
}

export const Modal = memo(({ children, isOpen, toggle }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Overlay onClick={toggle}>
          <ModalBox onClick={(e) => e.stopPropagation()}>{children}</ModalBox>
        </Overlay>
      )}
    </>
  );
});

const Overlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: ${theme.color.white};
  width: 80%;
  max-width: 430px;
  height: 70%;
  padding: 1rem;
  border-radius: 25px;
`;
