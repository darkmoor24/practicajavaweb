import { CustomHttpRequestProps } from "@/types";
import validateLocalStorageItemExistence from "../localStorage/validateLocalStorageItemExistence";
import { AUTH_TOKEN, getApiUrl } from "@/config/config";

const httpRequest: Function = ({ url, method = "GET", body = undefined }: CustomHttpRequestProps) => {
	return new Promise(async (resolve, reject) => {
		try {
			let BASE_API_URL: string | null = "";

			if (validateLocalStorageItemExistence("BASE_API_URL")) {
				BASE_API_URL = localStorage.getItem("BASE_API_URL");
			} else {
				BASE_API_URL = await getApiUrl();
			}

			const options: RequestInit = {
				method,
				headers: {
					Authorization: window.atob(AUTH_TOKEN),
					"Content-Type": "application/json; charset=utf-8",
				},
			};

			if (body !== undefined) {
				options.body = body;
			}

			const request = await fetch(`${BASE_API_URL}/${url}`, options);

			const response = await request.json();

			response.code === 200 ? resolve(response) : reject(response);
		} catch (error) {
			reject(error);
		}
	});
};

export default httpRequest;
