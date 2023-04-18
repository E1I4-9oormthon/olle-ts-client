import styled from 'styled-components';
import { Option } from 'global/types';
import { theme } from 'styles/theme';

interface SelectProps {
  optionList: Option[];
  handleChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
  value: number;
  name?: string;
}

export default function Select({ optionList, handleChange, value, name }: SelectProps) {
  return (
    <SelectBox onChange={(e) => handleChange(e)} value={value} name={name}>
      {optionList &&
        optionList.map((option) => (
          <Option key={option.index} value={option.index}>
            {option.name}
          </Option>
        ))}
    </SelectBox>
  );
}

const SelectBox = styled.select`
  width: 100%;
  height: 55px;
  padding: 1rem;
  font-size: 15px;
  color: ${theme.color.black};
  border: 1.5px solid ${theme.color.grey};
  outline: none;
  border-radius: 10px;
  background-image: url('https://user-images.githubusercontent.com/67324487/232566759-a6b3c2b3-8466-40df-9275-6219032b155e.png');
  background-size: 1rem;
  background-repeat: no-repeat;
  background-color: ${theme.color.white};
  -webkit-appearance: none;
  background-position-x: 96%;
  background-position-y: 50%;
`;

const Option = styled.option`
  padding: 30px;
`;
