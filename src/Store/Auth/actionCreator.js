import {
  SET_AUTH_USER,
  LOGIN_ERROR,
  USER_LOGOUT,
  GET_USER_INFO,
  USER_ALREADY_EXISTS,
  ADD_NEW_USER
} from "../typeConstants";

export const autheriseUser = ({ username, password }) => {
  return dispatch => {
    const users = JSON.parse(localStorage.getItem("users"));
    let authUser = users.filter(
      user => user.username === username && user.password === password
    );

    if (authUser.length > 0) {
      delete authUser[0].password;
      localStorage.setItem("user", JSON.stringify(authUser[0]));
      dispatch({
        type: SET_AUTH_USER,
        authUser: authUser[0]
      });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        message: "Invalid username or Password"
      });
    }
  };
};

export const getAutherisedUser = () => {
  return dispatch => {
    const authUser = JSON.parse(localStorage.getItem("user"));

    if (authUser && authUser.hasOwnProperty("username")) {
      dispatch({
        type: GET_USER_INFO,
        authUser
      });
    }
  };
};

export const logout = () => {
  localStorage.setItem("user", "{}");
  return {
    type: USER_LOGOUT
  };
};

export const addNewUser = user => {
  const { username, role } = user;
  const users = JSON.parse(localStorage.getItem("users"));
  let existingUser = users.filter(
    user => user.username === username && user.role === role
  );
  return dispatch => {
    if (existingUser.length > 0) {
      dispatch({ type: USER_ALREADY_EXISTS });
    } else {
      user.id = Math.floor((Math.random() + 1) * 10000);
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      dispatch({ type: ADD_NEW_USER });
    }
  };
};
