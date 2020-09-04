import axios from "axios";

export default axios.create({
  baseURL: "https://sstoragebackend.herokuapp.com/products",
  headers: {
    "Content-type": "application/json"
  }
});