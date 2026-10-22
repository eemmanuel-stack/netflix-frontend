import axios from 'axios';

export default axios.create({
    baseURL:'http://3.89.137.253:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
