import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-8b47f.cloudfunctions.net/api",
});

export default instance;
