import axios from 'axios';

export default axios.create({
    baseURL:'http://44.192.130.184:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
