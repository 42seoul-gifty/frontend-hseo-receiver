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
import { setReceiver } from 'store/actions/receiver';
import { IReceiver, productObj } from 'config';

interface IProps {
  detailId: number;
}

const GiftDetail: React.FC<IProps> = ({ detailId }) => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);
  const choice = useSelector((state: RootState) => state.choice.choice);
  const receiver = useSelector((state: RootState) => state.receiver.receiver);

  const currentProduct = choice?.products.filter(
    (product) => product.id === detailId,
  )[0];
  const receiverProduct: IReceiver = {
    id: receiver?.id,
    name: receiver?.name,
    phone: receiver?.phone,
    product: detailId,
    address: receiver?.address,
  };

  const handleNext = () => {
    dispatch(setReceiver(receiverProduct));
    console.log(receiver);
    dispatch(setPageInfo(1));
  };

  const handleBefore = () => {
    dispatch(setPageInfo(-1));
  };

  return (
    <div css={Container}>
      <h1>선물 정보 {`page: ${page} name: ${currentProduct?.name}`}</h1>
      <div>
        <img src={currentProduct?.thumbnail} alt={currentProduct?.name}></img>
      </div>
      <section css={BeforeNextButtonSection}>
        <button type='button' onClick={handleBefore}>
          다른 선물 보기
        </button>
        <button type='button' onClick={handleNext}>
          선택하기
        </button>
      </section>
    </div>
  );
};

export default GiftDetail;

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
