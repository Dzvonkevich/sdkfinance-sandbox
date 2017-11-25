class Request {
	request(method, url, data) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.addEventListener('load', () => {
				if (xhr.status === 200) {
					const result = JSON.parse(xhr.responseText);

					resolve(result);
				} else {
					reject(xhr);
				}
			});
			
			xhr.open(method, url, true);

			const dataJSON = data ? JSON.stringify(data) : null;
			xhr.send(dataJSON);
		});
	}
}

export default Request;