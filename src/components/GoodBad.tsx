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

const GoodBad: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);

  const handleClick = (message: string) => {
    dispatch(setPageInfo());
  };

  return (
    <div css={Container}>
      <div>선물 정보 {page}</div>

      <section css={BeforeNextButtonSection}>
        <button type='button' onClick={() => handleClick('good')}>
          좋아요
        </button>
        <button type='button' onClick={() => handleClick('bad')}>
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
