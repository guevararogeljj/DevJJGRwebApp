import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7293/api/v1/",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'false'
  }
});
