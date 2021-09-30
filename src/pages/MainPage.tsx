import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { ButtonDefault, FONT_SIZE_STYLE } from 'styles/GlobalStyles';
import { Prompt } from 'react-router';
import Modal from 'components/Modal';
import { RootState } from 'store/configureStore';
import { setPageInfo } from 'store/actions/page';
import GiftPage from './GiftPage';
import ExpiredPage from './ExpiredPage';

const MainPage: React.FC = () => {
  const receiver = useSelector((state: RootState) => state.receiver.receiver);
  const choice = useSelector((state: RootState) => state.choice.choice);
  const page = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPageInfo(1));
  };

  console.log(receiver);
  console.log(choice);

  return (
    <div css={Container}>
      {page ? (
        <GiftPage />
      ) : (
        <>
          <h1>{`${receiver?.name}님, ${choice?.giver_name}님이 보내신 선물이 도착했습니다`}</h1>

          <button css={MainMenuButton} onClick={handleClick}>
            선물받기
          </button>
        </>
      )}
      {/*}
      <Prompt
        when={true}
        message='페이지를 떠나면 변경사항이 저장되지 않습니다'
      />*/}
    </div>
  );
};

export default MainPage;

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
