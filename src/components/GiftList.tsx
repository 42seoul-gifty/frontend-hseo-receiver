import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import {
  FlexCenter,
  FlexColCenter,
  FONT_SIZE_STYLE,
} from 'styles/GlobalStyles';
import { RootState } from 'store/configureStore';
import { showModal } from 'store/actions/modal';
import Modal from 'components/Modal';

const GiftList: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);
  const likes = useSelector((state: RootState) => state.likes);
  const [showFullList, setShowFullList] = useState(true);

  const likeProduct: string[] = likes.likes;
  const dislikeProduct: string[] = likes.dislikes;

  const toggleList = () => {
    setShowFullList((prev) => !prev);
  };

  return (
    <div css={Container}>
      <h1>당신이 위시한 선물이에요</h1>
      <h2>사진을 누르면 자세한 정보를 볼 수 있어요</h2>
      <hr />
      <div>
        좋아요한 선물{' '}
        {likeProduct.map((item) => (
          <div>{item}</div>
        ))}
      </div>
      <div>
        싫어요한 선물{' '}
        {dislikeProduct.map((item) => (
          <div>{item}</div>
        ))}
      </div>
      <section css={BeforeNextButtonSection}>
        <button type='button' onClick={toggleList}>
          {showFullList ? '전체 리스트 보기' : '좋아요 한 선물만 보기'}
        </button>
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
  margin-top: 40px;
`;

const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`;
