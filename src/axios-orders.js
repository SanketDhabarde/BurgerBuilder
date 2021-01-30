import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-app-c2701-default-rtdb.firebaseio.com/'
});

export default instance;