import axios from "axios";
const REQUEST_TIMEOUT = 20000;
const URL_API = process.env.REACT_APP_CURRENT_API;

export default class APIUtils {
	currentLanguage = "";
	static setAccessToken(token) {
		this.accessToken = `${token}`;
	}
	static changeCurrentLanguage(value = "vn") {
		this.currentLanguage = value;
	}

	static getAccessToken() {
		return this.accessToken;
	}

	static get(path, params) {
		return new Promise(async (resolve, reject) => {
			let getToken = JSON.parse(localStorage.getItem("persist:auth"));
			let token = getToken && JSON.parse(getToken?.token);

			let request = {
				url: `${URL_API}/${path}`,
				method: "GET",
				timeout: REQUEST_TIMEOUT,
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token || ""} `,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Credentials": true,
					"Access-Control-Allow-Methods":
						"GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD",
					"Access-Control-Allow-Headers":
						"Origin, Accept, X-Requested-With, Content-Type, " +
						"Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
				}
			};
			try {
				const response = await axios(request);
				const { status } = response;
				if (status === 200 || status === 201) {
					return resolve(response.data);
				} else {
					return reject(response.data);
				}
			} catch (error) {
				reject(error);
			}
		});
	}

	static post(path, postData, headers) {
		return new Promise(async (resolve, reject) => {
			let getToken = JSON.parse(localStorage.getItem("persist:auth"));
			let token = getToken && JSON.parse(getToken?.token);
			let request = {
				url: `${URL_API}/${path}`,
				method: "POST",
				timeout: REQUEST_TIMEOUT,
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token || ""}`,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Credentials": true,
					"Access-Control-Allow-Methods":
						"GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD",
					"Access-Control-Allow-Headers":
						"Origin, Accept, X-Requested-With, Content-Type, " +
						"Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
				},
				data: JSON.stringify(postData)
			};
			try {
				const response = await axios(request);
				const { status } = response;
				if (status === 200 || status === 201) {
					return resolve(response.data);
				} else {
					return reject(response.data);
				}
			} catch (error) {
				reject(error);
			}
		});
	}

	static put(path, postData, headers) {
		return new Promise(async (resolve, reject) => {
			let getToken = JSON.parse(localStorage.getItem("persist:auth"));
			let token = getToken && JSON.parse(getToken?.token);
			let request = {
				url: `${URL_API}/${path}`,
				method: "PUT",
				timeout: REQUEST_TIMEOUT,
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token || ""}`,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Credentials": true,
					"Access-Control-Allow-Methods":
						"GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD",
					"Access-Control-Allow-Headers":
						"Origin, Accept, X-Requested-With, Content-Type, " +
						"Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
				},
				data: JSON.stringify(postData)
			};
			try {
				const response = await axios(request);
				const { status } = response;
				if (status === 200 || status === 201) {
					return resolve(response.data);
				} else {
					return reject(response.data);
				}
			} catch (error) {
				reject(error);
			}
		});
	}
	static uploadFile(path, file, name, headers) {
		var fd = new FormData();
		fd.append(name, file);
		let getToken = JSON.parse(localStorage.getItem("persist:auth"));
		let token = getToken && JSON.parse(getToken?.token);

		return new Promise((resolve, reject) =>
			axios
				.post(`${URL_API}/${path}`, fd, {
					headers: {
						"Content-Type": "multipart/form-data",
						authorization: `Bearer ${token || ""}`,
						"content-length": 99999999
					},
					maxBodyLength: Infinity,
					maxContentLength: Infinity
				})
				.then(response => {
					const { status } = response;
					if (status === 200 || status === 201) {
						return resolve(response.data);
					} else {
						return reject(response.data);
					}
				})
				.catch(err => {
					reject(err);
				})
		);
	}
}
