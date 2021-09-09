import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';

import GoodBad from 'components/GoodBad';
import GiftList from 'components/GiftList';
import axios from 'axios';
import { BASE_URL } from 'config';
import { RootState } from 'store/configureStore';

const GiftPage: React.FC = () => {
  const [productsList, setProductsList] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const page = useSelector((state: RootState) => state.page);

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/receiver`);
        const products = res.data[0].product;
        console.log(products);
        setProductsList(products);
        setProductCount(products.length);
      } catch (e) {
        console.log(e);
      }
    };
    fetchGifts();
  }, []);

  return page > productCount ? <GiftList /> : <GoodBad />;
};

export default GiftPage;
