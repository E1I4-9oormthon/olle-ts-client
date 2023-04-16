import { memo, useMemo } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface InputProps {
  placeholder?: string;
  name?: string;
  title?: string;
  type?: string;
  blurHandler?: () => void;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  readOnly?: boolean;
}

export const Input = memo(
  ({ title, name, placeholder, changeHandler, blurHandler, type, value, readOnly }: InputProps) => {
    const inputTitle = useMemo(() => <InputTitle htmlFor={name}>{title}</InputTitle>, []);
    return (
      <InputWrapper>
        {inputTitle}
        <InputBox
          name={name}
          type={type}
          id={name}
          onChange={changeHandler}
          onBlur={blurHandler}
          placeholder={placeholder}
          value={value}
          readOnly={readOnly}
        />
      </InputWrapper>
    );
  },
);

const InputWrapper = styled.div``;

const InputTitle = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
`;

const InputBox = styled.input`
  border-radius: 8px;
  font-family: 'Pretendard-Regular', sans-serif;
  padding: 1rem;
  margin-top: 1.3rem;
  border: 2px solid ${theme.color.lightGrey};
  width: 100%;
  font-size: 1rem;
`;
