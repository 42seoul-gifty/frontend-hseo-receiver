import React from 'react';
import { css } from '@emotion/react';
import { FONT_SIZE_STYLE } from 'styles/GlobalStyles';

const ExpiredPage: React.FC = () => {
  return (
    <div css={Container}>
      <h1>선물 선택이 완료된 페이지입니다</h1>
    </div>
  );
};

export default ExpiredPage;

const Container = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
`;
