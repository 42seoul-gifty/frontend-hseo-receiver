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

const GoodBad: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);
  const receiver = useSelector((state: RootState) => state.receiver.receiver);

  const handleClick = (type: string, id: string) => {
    dispatch(setPreference(type, id));
    dispatch(setPageInfo());
  };

  const id = receiver?.product[page - 1].id || '';

  return (
    <div css={Container}>
      <div>선물 정보 {`page: ${page} id: ${id}`}</div>

      <section css={BeforeNextButtonSection}>
        <button type='button' onClick={() => handleClick('SET_LIKES', id)}>
          좋아요
        </button>
        <button type='button' onClick={() => handleClick('SET_DISLIKES', id)}>
          별로예요
        </button>
      </section>

      <Modal>
        <h1>error</h1>
      </Modal>
    </div>
  );
};

export default GoodBad;

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
