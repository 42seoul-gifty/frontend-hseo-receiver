import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import GoodBad from 'components/GoodBad';
import GiftList from 'components/GiftList';
import { RootState } from 'store/configureStore';
import GiftDetail from 'components/GiftDetail';
import ReceiverInfo from 'components/ReceiverInfo';

const GiftPage: React.FC = () => {
  const page = useSelector((state: RootState) => state.page);
  const choice = useSelector((state: RootState) => state.choice.choice);
  const id = useSelector((state: RootState) => state.id);

  if (!choice) {
    return null;
  }

  const choosePage = () => {
    if (page <= choice?.products.length) {
      return <GoodBad />;
    } else if (page === choice?.products.length + 1) {
      return <GiftList />;
    } else if (page === choice?.products.length + 2) {
      return <GiftDetail detailId={id} />;
    } else if (page === choice?.products.length + 3) {
      return <ReceiverInfo />;
    }
  };

  return <div css={Container}>{choosePage()}</div>;
};

export default GiftPage;

const Container = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;
