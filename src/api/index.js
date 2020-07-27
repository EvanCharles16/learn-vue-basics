import axios from "axios";

const baseUrl = "https://fd-library.herokuapp.com";

export const getData = () => {
  return axios({
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    url: `${baseUrl}/get`,
  });
};

export const postData = () => {
  return axios({
    method: "POST",
    headers: {
      Accept: "aplication/json",
    },
    url: `${baseUrl}/post`,
  });
};
