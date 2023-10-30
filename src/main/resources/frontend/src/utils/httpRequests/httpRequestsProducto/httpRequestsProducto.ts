import { CustomHttpResponse } from "@/types";
import httpRequest from "../httpRequest";
import endpointPaths from "@/utils/endpointPaths/endpointPaths";
import httpRequestsPaths from "@/utils/httpRequestsPaths/httpRequestsPaths";

export const getProductos: Function = (idTipoProducto: number, clave: string): Promise<CustomHttpResponse> => {
    return new Promise<CustomHttpResponse>(async (resolve, reject) => {
        try {
            const productos = await httpRequest({ 
                url: `${ endpointPaths.producto }/${ httpRequestsPaths.producto.getProductos }/${idTipoProducto}/${window.btoa(clave)}`,
                method: 'POST'
            });

            resolve(productos);
        } catch (error) {
            reject(error);
        }
    });
};

export const deleteProducto: Function = (idProducto: number): Promise<CustomHttpResponse> => {
    return new Promise<CustomHttpResponse>(async (resolve, reject) => {
        try {
            const productoEliminado = await httpRequest({
                url: `${ endpointPaths.producto }/${ httpRequestsPaths.producto.deleteProducto }/${ idProducto }`,
                method: 'DELETE'
            });

            resolve(productoEliminado);
        } catch (error) {
            reject(error);
        }
    });
};