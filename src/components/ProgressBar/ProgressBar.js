/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: SmallWrapper,
    medium: MediumWrapper,
    large: LargeWrapper
  }

  const WrapperComponent = SIZES[size] || SIZES.small;

  return (<WrapperComponent
    role="progress"
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <VisuallyHidden>{value}%</VisuallyHidden>
    <FillWrapper>
      <Fill style={{ '--width': value + '%' }} />
    </FillWrapper>
  </WrapperComponent>);
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
`;

const SmallWrapper = styled(Wrapper)`
  height: 8px;
`;

const MediumWrapper = styled(Wrapper)`
  height: 12px;
`;

const LargeWrapper = styled(Wrapper)`
  height: 24px;
  padding: 4px;
`;

const Fill = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: var(--width);
`;

const FillWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  border-radius: 4px;
  height: 100%;
  width: 100%;
`;

export default ProgressBar;
