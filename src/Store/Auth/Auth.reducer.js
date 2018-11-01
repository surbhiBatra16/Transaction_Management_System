import {
  SET_AUTH_USER,
  LOGIN_ERROR,
  USER_LOGOUT,
  GET_USER_INFO,
  USER_ALREADY_EXISTS,
  ADD_NEW_USER
} from "../typeConstants";

const initialState = {
  isAuthorized: false,
  user: {},
  msg: "",
  msgType: "info",
  signup: false
};
localStorage.setItem(
  "users",
  JSON.stringify([
    { id: 1, username: "user", password: "user", role: "user" },
    { id: 2, username: "admin", password: "admin", role: "admin" }
  ])
);
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO: {
      return {
        ...state,
        user: action.authUser,
        msg: "",
        isAuthorized: true,
        signup: false
      };
    }
    case SET_AUTH_USER: {
      return {
        ...state,
        user: action.authUser,
        msg: "",
        isAuthorized: true
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        msg: action.message,
        msgType: "danger"
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        msg: "Logged out successfully",
        msgType: "info",
        uesr: {},
        isAuthorized: false
      };
    }
    case USER_ALREADY_EXISTS: {
      return {
        ...state,
        msg:
          "User already exists with this username. Please choose another username",
        msgType: "danger"
      };
    }
    case ADD_NEW_USER: {
      return {
        ...state,
        msg: "User Added successfully",
        msgType: "success",
        signup: true
      };
    }

    default:
      return state;
  }
};
