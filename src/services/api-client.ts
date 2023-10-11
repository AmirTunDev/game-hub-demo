import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '058e7bb3ac5247ae8f2b5754e1de3e9b'
    }
})