import { HIDE_MAILS, SEND_MAIL } from "../typeConstants";
export const sendMailTo = template => {
  return {
    type: SEND_MAIL,
    template
  };
};

export const closeMail = () => {
  return {
    type: HIDE_MAILS
  };
};
