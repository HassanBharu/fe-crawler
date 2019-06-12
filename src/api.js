import axios from "axios";

export const crawlUrl = url => {
  return axios.get(url).then(({ data }) => {
    console.log(data);
  });
};
