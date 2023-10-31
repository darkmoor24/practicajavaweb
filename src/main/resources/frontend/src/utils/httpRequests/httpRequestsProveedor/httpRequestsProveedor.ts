import { CustomHttpResponse } from "@/types";
import httpRequest from "../httpRequest";
import endpointPaths from "@/utils/endpointPaths/endpointPaths";
import httpRequestsPaths from "@/utils/httpRequestsPaths/httpRequestsPaths";

export const getProveedores: Function = (): Promise<CustomHttpResponse> => {
	return new Promise<CustomHttpResponse>(async (resolve, reject) => {
		try {
			const proveedores = await httpRequest({
				url: `${endpointPaths.proveedor}/${httpRequestsPaths.proveedor.getProveedores}`,
			});

			resolve(proveedores);
		} catch (error) {
			reject(error);
		}
	});
};
