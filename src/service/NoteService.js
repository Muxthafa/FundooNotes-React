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

let setNotes = (data) => {
  let token = sessionStorage.getItem("token");
  let reqObj = {
    method: "post",
    URL: 'http://localhost:5000/notes',
    headers: {
      "Content-type": "application/json",
      "authorization" : token
    },
    data:data
  }
  return axiosHelper.post(reqObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err
    });
};

let updateNote = (data, id) => {
  let token = sessionStorage.getItem("token");
  let reqObj = {
    method: "put",
    URL: 'http://localhost:5000/notes/'+id,
    headers: {
      "Content-type": "application/json",
      "authorization" : token
    },
    data:data
  }
  return axiosHelper.post(reqObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err
    });
};

let setTrash = (data, id) => {
  let token = sessionStorage.getItem("token");
  let reqObj = {
    method: "put",
    URL: 'http://localhost:5000/notes/'+id,
    headers: {
      "Content-type": "application/json",
      "authorization" : token
    },
    data:data
  }
  return axiosHelper.post(reqObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err
    });
};

let deleteNote = (id) => {
  let token = sessionStorage.getItem("token");
  let reqObj = {
    method: "delete",
    URL: 'http://localhost:5000/notes/'+id,
    headers: {
      "Content-type": "application/json",
      "authorization" : token
    },
  }
  return axiosHelper.post(reqObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err
    });
};

let setColor = (data, id) => {
  let token = sessionStorage.getItem("token");
  let reqObj = {
    method: "put",
    URL: 'http://localhost:5000/notes/'+id,
    headers: {
      "Content-type": "application/json",
      "authorization" : token
    },
    data:data
  }
  return axiosHelper.post(reqObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err
    });
};


let uploadImage = (data) => {
  let reqObj = {
    method: "post",
    URL: 'http://localhost:5000/notes/image',
    data,
    headers: {
      "Content-type": "multipart/form-data",
    },
    
  }
  console.log(reqObj);
  return axiosHelper.post(reqObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err
    });
};




export default {noteFetch, setNotes, updateNote, setTrash, deleteNote, setColor, uploadImage}