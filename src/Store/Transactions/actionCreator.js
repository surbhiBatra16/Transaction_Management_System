import { GET_TRANSACTION } from "../typeConstants";
import { transactions } from "../DummyData/data";

localStorage.setItem("transactionList", JSON.stringify(transactions));

export const getTransactionData = () => {
  let transactionList = JSON.parse(localStorage.getItem("transactionList"));
  return {
    type: GET_TRANSACTION,
    transactionList
  };
};
