import axios from 'axios';

const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

export default axios.create({
    baseURL: URL
})