import axios from "axios";

const API_KEY = '503f6b805a50749d275ffc594a8eff0d';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY
    }
});

function prettyUrl (str) {
    return str.toLowerCase().replace(/[^A-Z0-9]/ig, "-");
}

export { api, prettyUrl};