import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';

import GoodBad from 'components/GoodBad';
import GiftList from 'components/GiftList';
import axios from 'axios';
import { BASE_URL } from 'config';
import { RootState } from 'store/configureStore';

const GiftPage: React.FC = () => {
  const page = useSelector((state: RootState) => state.page);
  const choice = useSelector((state: RootState) => state.choice.choice);

  console.log(choice?.products);
  console.log(page);

  if (!choice) {
    return null;
  }

  return (
    <div css={Container}>
      {page > choice?.products.length ? <GiftList /> : <GoodBad />}
    </div>
  );
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
