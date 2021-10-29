/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = (rawRequest) => {
	const request = rawRequest.split("\r\n\r\n");
	const [method, path] = request[0].split(" ");
	const request2 = rawRequest.split("\r\n\r\n");
	const body = request2[1];
	return { method, path, body };
};
