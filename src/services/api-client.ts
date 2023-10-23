import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '037e4087a87045ce907d21b5061bd201'
    }
})