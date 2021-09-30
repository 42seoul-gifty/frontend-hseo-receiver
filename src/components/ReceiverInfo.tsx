import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import {
  FlexCenter,
  FlexColCenter,
  FONT_SIZE_STYLE,
} from 'styles/GlobalStyles';
import { RootState } from 'store/configureStore';
import Modal from 'components/Modal';
import { setPageInfo } from 'store/actions/page';
import { setPreference } from 'store/actions/like';
import Address from './Address';

const ReceiverInfo: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);
  const choice = useSelector((state: RootState) => state.choice.choice);

  const handleClick = (type: string, id: string) => {
    dispatch(setPreference(type, id));
    dispatch(setPageInfo(1));
  };

  return (
    <div css={Container}>
      <h1>주소를 입력하세요</h1>
      <Address />
      <Modal>
        <h1>error</h1>
      </Modal>
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
