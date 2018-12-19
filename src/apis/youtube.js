import axios from 'axios';
import KEYS from '../components/KEYS';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEYS.youtube
  }
});