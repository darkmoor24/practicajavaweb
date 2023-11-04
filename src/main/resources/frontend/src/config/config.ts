const getApiUrl: Function = (): string => {
	const BASE_API_URL: string = "http://localhost:8080/practicaweb/api/v1";

	localStorage.setItem("BASE_API_URL", BASE_API_URL);

	return BASE_API_URL;
};

const AUTH_TOKEN: string = "";

export { getApiUrl, AUTH_TOKEN };
