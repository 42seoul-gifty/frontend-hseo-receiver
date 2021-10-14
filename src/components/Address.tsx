import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';

import { IAddressInfo, IReceiver } from 'config';
import { RootState } from 'store/configureStore';
import api from 'api';
import { useHistory } from 'react-router';

const Address: React.FC = () => {
  const id = useSelector((state: RootState) => state.id);
  const likes = useSelector((state: RootState) => state.likes);

  const [addressInfo, setAddressInfo] = useState({
    post_code: '',
    address: '',
    address_detail: '',
  });

  const receiver = useSelector((state: RootState) => state.receiver.receiver);
  const history = useHistory();

  const handleClick = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: (data) => {
          const toBuildingAddress = `${data.address} ${data.buildingName}`;
          setAddressInfo((prev) => ({
            ...prev,
            post_code: data.zonecode.toString(),
            address: toBuildingAddress,
          }));
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
    const finalAddress = `${addressInfo.post_code} ${addressInfo.address} ${addressInfo.address_detail}`;
    console.log(finalAddress);
    const receiverInfo: IAddressInfo = {
      product_id: Number(id),
      post_code: addressInfo.post_code,
      address: addressInfo.address,
      address_detail: addressInfo.address_detail,
      likes: likes.likes,
      dislikes: likes.dislikes,
    };
    console.log(receiverInfo);
    try {
      const res = await api({
        method: 'patch',
        url: `/receiver/${receiver?.id}`,
        data: receiverInfo,
      });
      console.log(res);
      if (res.data.success) history.push('/last');
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setAddedAddress(e.target.value);
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  return (
    <div css={Container}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='우편번호'
          value={addressInfo.post_code}
          onChange={handleChange}
        ></input>
        <button type='button' onClick={handleClick}>
          주소 찾기
        </button>
        <br />
        <input
          placeholder='주소'
          value={addressInfo.address}
          onChange={handleChange}
        ></input>
        <br />
        <input
          placeholder='상세주소'
          value={addressInfo.address_detail}
          name='address_detail'
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
