import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const SIZE_STYLES = {
    small: {
      height: 24,
      fontSize: 14,
      iconSize: 16,
      borderWidth: 1,
    },
    large: {
      height: 36,
      fontSize: 18,
      iconSize: 24,
      borderWidth: 2,
    },
  };

  const styles = SIZE_STYLES[size];

  return <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
          <Icon id={icon} size={styles.iconSize} strokeWidth="2" />
      </IconWrapper>
      <Input 
        placeholder={placeholder}
        style={{
          '--width': width,
          '--height': styles.height / 16 + 'rem',
          '--border-width': styles.borderWidth + 'px',
          '--font-size': styles.fontSize / 16 + 'rem'
        }}
      />
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black}
  }
`;

const Input = styled.input`
  font-size: var(--font-size);
  border: none;
  width: var(--width);
  height: var(--height);
  outline-offset: 2px;
  padding-left: var(--height);
  font-weight: bold;
  color: inherit;
  border-bottom: var(--border-width) solid ${COLORS.black};

  &::placeholder {
    font-weight: normal;
    color: ${COLORS.gray700};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  height: 90%;
  align-items: center;
`;

export default IconInput;
