import { GET_TRANSACTION } from "../typeConstants";

const initialState = {
  transactionList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION: {
      return {
        ...state,
        transactionList: action.transactionList
      };
    }

    default: {
      return state;
    }
  }
};
