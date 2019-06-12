import axios from "axios";

export const crawlUrl = url => {
  console.log("IN API CRAWLURL FUNCTION");
  console.log(url, "<<--- URL TO CRAWL");
  return axios.get(url).then(({ data }) => {
    console.log(data);
  });
};
