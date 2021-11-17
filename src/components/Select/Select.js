import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange}>
        {children}
      </InvisibleSelect>
      <Label>
        {displayedValue}<SelectIcon id="chevron-down" size={16} strokeWidth={2} />
      </Label>
    </Wrapper>
  );
};


const InvisibleSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`;

const Label = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 4px;
  color: ${COLORS.gray700}; 
  font-size: 1rem;
  line-height: 1.1875;

  ${InvisibleSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${InvisibleSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectIcon = styled(Icon)`
  display: inline;
  margin-left: 24px;
`;


export default Select;
