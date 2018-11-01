import { SET_HEADER_TITLE } from "../typeConstants";
export const setHeaderTitle = title => {
  return {
    type: SET_HEADER_TITLE,
    title
  };
};
