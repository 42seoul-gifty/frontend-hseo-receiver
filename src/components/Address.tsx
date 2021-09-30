import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';

import GoodBad from 'components/GoodBad';
import GiftList from 'components/GiftList';
import axios from 'axios';
import { BASE_URL, IAddressInfo, IReceiver } from 'config';
import { RootState } from 'store/configureStore';
import GiftDetail from 'components/GiftDetail';
import ReceiverInfo from 'components/ReceiverInfo';
import { setReceiver } from 'store/actions/receiver';
import { useHistory } from 'react-router';

const Address: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);
  const choice = useSelector((state: RootState) => state.choice.choice);
  const id = useSelector((state: RootState) => state.id);
  const likes = useSelector((state: RootState) => state.likes);

  const [post, setPost] = useState('');
  const [address, setAddress] = useState('');
  const [addedAddress, setAddedAddress] = useState('');

  const receiver = useSelector((state: RootState) => state.receiver.receiver);
  const history = useHistory();

  const handleClick = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: (data) => {
          const toBuildingAddress = `${data.address} ${data.buildingName}`;
          setAddress(toBuildingAddress);
          setPost(data.zonecode.toString());
        },
        onsearch: (data) => {
          console.log(data);
        },
        width: 400,
        height: 600,
      });

      postcode.open({
        left: window.screen.width / 2 - 400 / 2,
        top: window.screen.height / 2 - 600 / 2,
        popupName: 'addressPopup',
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalAddress = `${post} ${address} ${addedAddress}`;
    console.log(finalAddress);
    const receiverInfo: IAddressInfo = {
      product_id: Number(id),
      post_code: post,
      address: address,
      address_detail: addedAddress,
      likes: likes.likes,
      dislikes: likes.dislikes,
    };
    console.log(receiverInfo);
    try {
      const res = await axios({
        method: 'patch',
        url: `${BASE_URL}/receiver/${receiver?.id}`,
        data: receiverInfo,
      });
      console.log(res);
      if (res.data.success) history.push('/last');
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddedAddress(e.target.value);
  };

  return (
    <div css={Container}>
      <form onSubmit={handleSubmit}>
        <input placeholder='우편번호' value={post}></input>
        <button type='button' onClick={handleClick}>
          주소 찾기
        </button>
        <br />
        <input placeholder='주소' value={address}></input>
        <br />
        <input
          placeholder='상세주소'
          value={addedAddress}
          onChange={handleChange}
        ></input>
        <br />
        <button type='submit'>선물받기</button>
      </form>
    </div>
  );
};

export default Address;

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
