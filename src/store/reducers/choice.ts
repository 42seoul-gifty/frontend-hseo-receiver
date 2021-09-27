import { IChoice } from 'config';
import { ChoiceAction, SET_CHOICE } from 'store/actions/choice';

type choiceState = {
  choice: IChoice | undefined;
};

const initialState: choiceState = {
  choice: undefined,
};

const choiceReducer = (state = initialState, action: ChoiceAction) => {
  switch (action.type) {
    case SET_CHOICE:
      return { choice: action.payload };
    default:
      return state;
  }
};

export default choiceReducer;
