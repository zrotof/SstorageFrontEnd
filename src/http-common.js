import axios from "axios";

export default axios.create({
  baseURL: "http://sstoragebackend.herokuapp.com/products",
  headers: {
    "Content-type": "application/json"
  }
});