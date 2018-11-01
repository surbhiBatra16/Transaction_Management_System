import { SEND_MAIL, HIDE_MAILS } from "../typeConstants";

const initialState = {
  template: {},
  showMailPopup: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MAIL: {
      return {
        ...state,
        showMailPopup: true
      };
    }
    case HIDE_MAILS: {
      return {
        ...state,
        template: {},
        showMailPopup: false
      };
    }

    default:
      return state;
  }
};
