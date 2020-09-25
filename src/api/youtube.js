import axios from 'axios';

const KEY = 'AIzaSyBwHg7Z4nfqcFis-RlKM90WnGokVm1zStk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'
    }

});
