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
import { showWarningModal } from 'store/actions/modal';
import Modal from 'components/Modal';

interface IProps {
  pageState: number;
  setPageState: Dispatch<SetStateAction<number>>;
}

const GiftList: React.FC<IProps> = ({ pageState, setPageState }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div css={Container}>
      <div>선물 리스트 {pageState}</div>

      <section css={BeforeNextButtonSection}>
        <button type='button'>전체 리스트 보기</button>
        <button type='button'>좋아요 한 선물만 보기</button>
      </section>

      <Modal>
        <h1>error</h1>
      </Modal>
    </div>
  );
};

export default GiftList;

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
