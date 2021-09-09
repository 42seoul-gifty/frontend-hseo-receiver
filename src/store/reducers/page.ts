import { PageInfoAction, SET_PAGE } from 'store/actions/page';

const initialState: number = 0;

const pageReducer = (state = initialState, action: PageInfoAction) => {
  switch (action.type) {
    case SET_PAGE:
      return state + 1;
    default:
      return state;
  }
};

export default pageReducer;
