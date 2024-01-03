const axios = require('axios');

async function getPost() {
	const res = await axios.get('https://jsonplaceholder.typicode.come/posts/1');
	console.group(res.data);
}

getPost();