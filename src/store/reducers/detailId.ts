import { IdAction, SET_ID } from 'store/actions/detailId';

const initialState: number = -1;

const idReducer = (state = initialState, action: IdAction) => {
  switch (action.type) {
    case SET_ID:
      return action.payload;
    default:
      return state;
  }
};

export default idReducer;
