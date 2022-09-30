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

const todayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
};

function prettyUrl (str) {
    return str.toLowerCase().replace(/[^A-Z0-9]/ig, "-");
}

export { api, prettyUrl, todayDate};