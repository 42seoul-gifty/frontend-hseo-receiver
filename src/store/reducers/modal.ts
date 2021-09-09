import {
  ModalAction,
  SHOW_WARNING_MODAL,
  HIDE_MODAL,
} from 'store/actions/modal';

const initialState = {
  showWarningModal: false,
};

const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case SHOW_WARNING_MODAL:
      return { ...state, showWarningModal: true };
    case HIDE_MODAL:
      return {
        showWarningModal: false,
        showMyPageModal: false,
        showAgeModal: false,
        showPriceModal: false,
        showPolicyModal: false,
        showPrivacyModal: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
