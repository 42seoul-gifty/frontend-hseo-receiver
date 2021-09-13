import { LikesAction, SET_LIKES, SET_DISLIKES } from 'store/actions/like';

export type Preference = {
  likes: string[];
  dislikes: string[];
};
const initialState: Preference = {
  likes: [],
  dislikes: [],
};

const likesReducer = (state = initialState, action: LikesAction) => {
  switch (action.type) {
    case SET_LIKES:
      return { ...state, likes: [...state.likes, action.payload] };
    case SET_DISLIKES:
      return { ...state, dislikes: [...state.dislikes, action.payload] };
    default:
      return state;
  }
};

export default likesReducer;
