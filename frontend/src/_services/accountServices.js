import Axios from "../Api/Axios";

let testBdd = (data) => {
  return Axios.post("/testbdd", data);
};

export const accountService = {
  //tokens//
  testBdd,
};
