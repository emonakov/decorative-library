import { FC } from 'react';
import styled from 'styled-components';

const ToggleInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  appearance: none;
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 20px;
  min-height: 20px;
  background-color: #F8F8F8;
  border-radius: 50px;
  position: relative;

  &:before {
    content: '';
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: -5px;
    left: -5px;
  }

  &,
  &:before {
    transition: 0.3s;
  }

  &:checked {
    background-color: #7D4CDB;
  }

  &:checked:before {
    transform: translateX(30px);
  }
`;

export interface ToggleProps {
  onChange: (checked: boolean) => void;
  checked?: boolean;
}

const Toggle: FC<ToggleProps> = ({ onChange, checked }) => (
  <ToggleInput onChange={(e) => onChange(e.target.checked)} checked={checked} />
);

export default Toggle;
