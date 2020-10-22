import axios from "axios"

const http = axios.create({
    baseURL: 'http://mock-api.com/mnEd3LgJ.mock',
    timeout: 2000,
});

export default http