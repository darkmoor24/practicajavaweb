import { CustomHttpResponse } from "@/@types";
import httpRequest from "../httpRequest";
import endpointPaths from "@/utils/endpointPaths/endpointPaths";
import httpRequestsPaths from "@/utils/httpRequestsPaths/httpRequestsPaths";

export const getProveedoresProducto: Function = (idProducto: number): Promise<CustomHttpResponse> => {
    return new Promise<CustomHttpResponse>(async (resolve, reject) => {
        try {
            const proveedoresProducto = await httpRequest({ 
                url: `${ endpointPaths.proveedorProducto }/${ httpRequestsPaths.proveedorProducto.getProveedoresProducto }/${idProducto}`
            });

            resolve(proveedoresProducto);
        } catch (error) {
            reject(error);
        }
    });
};
