import { combineReducers } from "redux";
import header from "./Header/Header.reducer";
import auth from "./Auth/Auth.reducer";
import trans from "./Transactions/Transaction.reducer";
import mail from "./Mail/Mail.reducer";
let rootReducer = combineReducers({ header, auth, trans, mail });

export default rootReducer;
