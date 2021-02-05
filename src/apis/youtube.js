import axios from 'axios';

const KEY = 'AIzaSyDbu45Yvl0giAWD8vsXVbhCLgcANdORl8E';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5, 
		key: KEY,
		type: 'video'
	}
});