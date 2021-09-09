import { IReceiver } from 'config';
import { ReceiverAction, SET_RECEIVER } from 'store/actions/receiver';

type receiverState = {
  receiver: IReceiver | undefined;
};

const initialState: receiverState = {
  receiver: undefined,
};

const receiverReducer = (state = initialState, action: ReceiverAction) => {
  switch (action.type) {
    case SET_RECEIVER:
      return { receiver: action.payload };
    default:
      return state;
  }
};

export default receiverReducer;
