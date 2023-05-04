import axios from "axios";

const instance = axios.create({ 
  baseURL: 'http://general-bot-api-development:8081', 
  validateStatus: (status) => status < 400,
  headers: {
    "Content-Type": 'application/json',
  }
});

export default instance;