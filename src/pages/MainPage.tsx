import React from 'react';
import { useHistory } from 'react-router';
import { css } from '@emotion/react';
import { ButtonDefault, FONT_SIZE_STYLE } from 'styles/GlobalStyles';
import Modal from 'components/Modal';

const MainPage: React.FC = () => {
  const history = useHistory();

  const handleMenuButtonClick = (menu: string) => {
    history.push(`/${menu}`);
  };

  return (
    <div css={Container}>
      <button
        css={MainMenuButton}
        onClick={() => handleMenuButtonClick('gift')}
      >
        선물받기
      </button>
      <Modal>
        <h1>my page</h1>
      </Modal>
    </div>
  );
};

export default MainPage;

const Container = css`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
