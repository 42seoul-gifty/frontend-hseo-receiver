import React from 'react';
import { css } from '@emotion/react';

import {
  FlexCenter,
  FlexColCenter,
  FONT_SIZE_STYLE,
} from 'styles/GlobalStyles';
import Address from './Address';

const ReceiverInfo: React.FC = () => {
  return (
    <div css={Container}>
      <h1>주소를 입력하세요</h1>
      <Address />
    </div>
  );
};

export default ReceiverInfo;

const Container = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`;

const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`;
