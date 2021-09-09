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
  const receiver = useSelector((state: RootState) => state.receiver.receiver);

  if (!receiver) {
    return null;
  }

  return page > receiver?.product.length ? <GiftList /> : <GoodBad />;
};

export default GiftPage;
