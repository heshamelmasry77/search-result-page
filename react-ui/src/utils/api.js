import axios from "axios";

const fetchSearchResultsList = () => {
  return axios.get("https://api.myjson.com/bins/18x6yt").then(resp => resp.data);
};

export { fetchSearchResultsList };

