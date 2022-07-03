import axios from "axios";

const instance = axios.create({
    baseUrl: "https://lesson7tiktok.herokuapp.com/",
});

export default instance;