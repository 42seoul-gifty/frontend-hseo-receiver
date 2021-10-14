import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import {
  FlexCenter,
  FlexColCenter,
  FONT_SIZE_STYLE,
} from 'styles/GlobalStyles';
import { RootState } from 'store/configureStore';
import { setPageInfo } from 'store/actions/page';
import { setPreference } from 'store/actions/like';

const GoodBad: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);
  const choice = useSelector((state: RootState) => state.choice.choice);

  const handleClick = (type: string, id: number) => {
    dispatch(setPreference(type, id));
    dispatch(setPageInfo(1));
  };

  const currentProduct = choice?.products[page - 1];
  const id = currentProduct?.id || 0;

  return (
    <div css={Container}>
      <h1>선물 정보 {`page: ${page} name: ${currentProduct?.name}`}</h1>
      <div>
        <img src={currentProduct?.thumbnail} alt={currentProduct?.name}></img>
      </div>
      <section css={BeforeNextButtonSection}>
        <button type='button' onClick={() => handleClick('SET_LIKES', id)}>
          좋아요
        </button>
        <button type='button' onClick={() => handleClick('SET_DISLIKES', id)}>
          별로예요
        </button>
      </section>
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
