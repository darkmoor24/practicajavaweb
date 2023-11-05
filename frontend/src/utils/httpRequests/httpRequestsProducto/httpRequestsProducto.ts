import { CustomHttpResponse, IProducto } from "@/@types";
import httpRequest from "../httpRequest";
import endpointPaths from "@/utils/endpointPaths/endpointPaths";
import httpRequestsPaths from "@/utils/httpRequestsPaths/httpRequestsPaths";

export const addProducto: Function = (producto: IProducto): Promise<CustomHttpResponse> => {
    return new Promise<CustomHttpResponse>(async (resolve, reject) => {
        try {
            const productoAgregado = await httpRequest({ 
                url: `${ endpointPaths.producto }/${ httpRequestsPaths.producto.addProducto }`,
                method: 'POST',
                body: JSON.stringify(producto)
            });

            resolve(productoAgregado);
        } catch (error) {
            reject(error);
        }
    });
};

export const getProductos: Function = (idTipoProducto: number, clave: string): Promise<CustomHttpResponse> => {
    return new Promise<CustomHttpResponse>(async (resolve, reject) => {
        try {
            const productos = await httpRequest({ 
                url: `${ endpointPaths.producto }/${ httpRequestsPaths.producto.getProductos }/${idTipoProducto}/${window.btoa(clave)}`,
                method: 'GET'
            });

            resolve(productos);
        } catch (error) {
            reject(error);
        }
    });
};

export const updateProducto: Function = (producto: IProducto): Promise<CustomHttpResponse> => {
    return new Promise<CustomHttpResponse>(async (resolve, reject) => {
        try {
            const productoActualizado = await httpRequest({ 
                url: `${ endpointPaths.producto }/${ httpRequestsPaths.producto.updateProducto }`,
                method: 'PUT',
                body: JSON.stringify(producto)
            });

            resolve(productoActualizado);
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