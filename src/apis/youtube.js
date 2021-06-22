import axios from 'axios';

const KEY = 'AIzaSyDdaQS3QotbL60i0Apgj6DvgJDMW5QNLOA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})