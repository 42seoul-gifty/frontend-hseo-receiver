import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { ButtonDefault, FONT_SIZE_STYLE } from 'styles/GlobalStyles';
import { RootState } from 'store/configureStore';

const LastPage: React.FC = () => {
  const choice = useSelector((state: RootState) => state.choice.choice);

  const handleClick = () => {};

  return (
    <div css={Container}>
      <h1>{`${choice?.giver_name}님께 감사를 표현하세요!`}</h1>
      <button css={MainMenuButton} onClick={handleClick}>
        나도 선물하러 가기
      </button>
    </div>
  );
};

export default LastPage;

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
const MainMenuButton = css`
  ${ButtonDefault}
  font-size: ${FONT_SIZE_STYLE.large};
  background-color: #4a847a;
  color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
`;
