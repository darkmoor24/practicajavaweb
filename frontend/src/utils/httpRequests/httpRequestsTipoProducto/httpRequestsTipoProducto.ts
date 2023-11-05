import { CustomHttpResponse } from "@/@types";
import httpRequest from "../httpRequest";
import endpointPaths from "@/utils/endpointPaths/endpointPaths";
import httpRequestsPaths from "@/utils/httpRequestsPaths/httpRequestsPaths";

export const getTiposProducto: Function = (): Promise<CustomHttpResponse> => {
    return new Promise<CustomHttpResponse>(async (resolve, reject) => {
        try {
            const tiposProducto = await httpRequest({ 
                url: `${ endpointPaths.tipoProducto }/${ httpRequestsPaths.tipoProducto.getTiposProducto }` 
            });

            resolve(tiposProducto);
        } catch (error) {
            reject(error);
        }
    });
};