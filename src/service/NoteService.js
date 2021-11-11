import axiosHelper from "../helper/axios";

let noteFetch = (token) => {
    let reqObj = {
      method: "get",
      URL: 'http://localhost:5000/notes',
      headers: {
        "Content-type": "application/json",
        "authorization" : token
      },  
    }
    return axiosHelper.get(reqObj)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err
      });
};

export default {noteFetch}