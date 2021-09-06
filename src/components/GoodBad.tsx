import React, { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import {
  FlexCenter,
  FlexColCenter,
  FONT_SIZE_STYLE,
} from 'styles/GlobalStyles';
import { RootState } from 'store/configureStore';
import { setOrderInfo } from 'store/actions/order';
import { showWarningModal } from 'store/actions/modal';
import Modal from 'components/Modal';
import { phoneNumberRegex } from 'config';

interface IProps {
  pageState: number;
  setPageState: Dispatch<SetStateAction<number>>;
}

const GoodBad: React.FC<IProps> = ({ pageState, setPageState }) => {
  const history = useHistory();
  const order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  console.log(order);

  const handleClick = (message: string) => {
    setPageState((pageState) => pageState + 1);
  };

  return (
    <div css={Container}>
      <div>선물 정보 {pageState}</div>

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
const InputForm = css`
  ${FlexColCenter}
  margin-top: 40px;
`;
const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`;
