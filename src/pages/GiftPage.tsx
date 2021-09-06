import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { RootState } from 'store/configureStore';
import {
  SenderInfo,
  ReceiverInfo,
  GiftInfo,
  OverallInfo,
} from 'components/infos';
import GoodBad from 'components/GoodBad';

const GiftPage: React.FC = () => {
  const [pageState, setPageState] = useState(0);
  /*
  if (pageState === 1) {
    return <ReceiverInfo pageState={pageState} setPageState={setPageState} />;
  } else if (pageState === 2) {
    return <GiftInfo pageState={pageState} setPageState={setPageState} />;
  } else if (pageState === 3) {
    return <OverallInfo pageState={pageState} setPageState={setPageState} />;
  }
*/
  console.log(pageState);

  return <GoodBad pageState={pageState} setPageState={setPageState} />;
};

export default GiftPage;
