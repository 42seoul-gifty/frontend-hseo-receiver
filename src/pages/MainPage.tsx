import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { ButtonDefault, FONT_SIZE_STYLE } from 'styles/GlobalStyles';

import Modal from 'components/Modal';
import { RootState } from 'store/configureStore';
import { setPageInfo } from 'store/actions/page';
import GiftPage from './GiftPage';

const MainPage: React.FC = () => {
  const receiver = useSelector((state: RootState) => state.receiver.receiver);
  const page = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPageInfo());
  };

  return (
    <div css={Container}>
      {page ? (
        <GiftPage />
      ) : (
        <>
          {receiver?.name}
          <button css={MainMenuButton} onClick={handleClick}>
            선물받기
          </button>
        </>
      )}

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
